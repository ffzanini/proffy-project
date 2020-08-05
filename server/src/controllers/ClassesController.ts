import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface scheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesController {
    async index(request: Request, response: Response){
        const filters = request.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if(!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                erro: 'Missing filters searching classes'
            })
        }

        const timeInMinutes = convertHourToMinutes(time);

        const classes = await db('classes')
        .whereExists(function(){
            this.select('class_schedule.*')
            .from('class_schedule')
            .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
            .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
            .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
            .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]);
        })
        .where('classes.subject', '=', subject)
        .join('users', 'classes.user_id', '=', 'users.id')
        .select(['classes.*', 'users.*']);

        return response.json(classes);
    }

    async create(request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        }  = request.body;
    
        //criando a transection, significa que todos os estados de insert dentro do try devem estar sem erro para que o sucesso ocorra
        const trx = await db.transaction();
    
        try{
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            })
    
            const user_id = insertedUsersIds[0];
    
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            })
            
            const class_id = insertedClassesIds[0];
    
            const classSchedule = schedule.map((scheduleItem: scheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                };
            })
    
            //cadastrando a array já ajustada com os valores integer
            await trx('class_schedule').insert(classSchedule);
    
            //após todos os inserts serem feitos, para serem validados no banco, necessário realizar o commmit 
            await trx.commit();
            //aqui vai enviar o trx e cadastra-lo no banco de dados. 201 é um status http que indica sucesso
            return response.status(201).send();
        }catch(err){
            //função para voltar no banco de dados caso algum erro seja detectado e algum item tenha sido adicionado
            await trx.rollback();
            //retorna um erro em formato json. 400 é um número utilizado quando acontece algum erro inespeado de cadastro
            return response.status(400).json({
               erro: 'Unexpected error while creating a new class'
            })
        }
    }
}