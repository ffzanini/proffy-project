import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './style.css';



function TeacherList() {
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
               <form id="search-teachers">
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
                   <Input type="time" name="time" label="Hora"/>
               </form>
            </PageHeader>

            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;