import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './style.css';



function TeacherForm() {
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas" 
                description="O primeiro passo é preencher esse formulário"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome Completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="WhatsApp"/>
                    <Textarea name="bio" label="Biografia" />
                    
                </fieldset>
                <fieldset>
                    <legend>Sobre a Aula</legend>

                    <Select 
                    name="subject" 
                    label="Matéria"
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
                    <Input name="cost" label="Custo da hora/aula"/>
                    
                </fieldset>

                <fieldset>
                    <legend>
                        Horários Disponíveis
                        <button type="button">
                            + Novo Horário
                        </button>
                    </legend>
                    <div className="schedule-item">
                            <Select 
                                name="weeK_day" 
                                label="Dia da Semana"
                                options={[
                                    {value: '0', label: 'Segunda-feira'},
                                    {value: '1', label: 'Terça-feiora'},
                                    {value: '2', label: 'Quarta-feira'},
                                    {value: '3', label: 'Quinta-feira'},
                                    {value: '4', label: 'Sexta-feira'},
                                    {value: '5', label: 'Sábado'},
                                    {value: '6', label: 'Domingo'},
                                ]}
                            />

                            <Input name="from" label="Das" type="time" />
                            <Input name="to" label="Até" type="time" />
                        </div>                 
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"/>
                        Importante <br/>
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar Registro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;