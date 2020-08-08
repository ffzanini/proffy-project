import React, {useState, FormEvent} from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';

import './style.css';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '', to: ''}
    ]);

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(()=>{
            alert('Cadastro realizado com sucesso');

            history.push('/');
        }).catch(()=>{
            alert('Erro no cadastro');
        })
    }

    function setScheduleItemValue(position: number, field: string, value: string){
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position){
                return { ...scheduleItem, [field]: value};
            }

            return scheduleItem;            
        })

        setScheduleItems(updateScheduleItems);
    }

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            {week_day: 0, from: '', to: ''}
        ]);
    }
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas" 
                description="O primeiro passo é preencher esse formulário"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input name="name" label="Nome Completo" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        <Input name="avatar" label="Avatar" value={avatar} onChange={(e)=>{setAvatar(e.target.value)}}/>
                        <Input name="whatsapp" label="WhatsApp" value={whatsapp} onChange={(e)=>{setWhatsapp(e.target.value)}}/>
                        <Textarea name="bio" label="Biografia" value={bio} onChange={(e)=>{setBio(e.target.value)}}/>
                        
                    </fieldset>
                    <fieldset>
                        <legend>Sobre a Aula</legend>

                        <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject} 
                        onChange={(e)=>{setSubject(e.target.value)}}
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Física', label: 'Física'},
                            {value: 'Ciências', label: 'Ciências'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ed. Física', label: 'Ed. Física'},
                            {value: 'Geografia', label: 'Geografia'},
                            {value: 'História', label: 'História'},
                            {value: 'Português', label: 'Português'},
                            {value: 'Literatura', label: 'Literatura'},
                            {value: 'Química', label: 'Química'},
                        ]}
                        />
                        <Input name="cost" label="Custo da hora/aula" value={cost} onChange={(e)=>{setCost(e.target.value)}}/>
                        
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários Disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo Horário
                            </button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select 
                                        name="weeK_day" 
                                        label="Dia da Semana"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            {value: '0', label: 'Segunda-feira'},
                                            {value: '1', label: 'Terça-feira'},
                                            {value: '2', label: 'Quarta-feira'},
                                            {value: '3', label: 'Quinta-feira'},
                                            {value: '4', label: 'Sexta-feira'},
                                            {value: '5', label: 'Sábado'},
                                            {value: '6', label: 'Domingo'},
                                        ]}
                                    />

                                    <Input name="from" label="Das" type="time" value={scheduleItem.from} onChange={e => setScheduleItemValue(index, 'from', e.target.value)}/>
                                    <Input name="to" label="Até" type="time" value={scheduleItem.to} onChange={e => setScheduleItemValue(index, 'to', e.target.value)}/>
                                </div>
                            );
                        })}                         
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante"/>
                            Importante <br/>
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar Registro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;