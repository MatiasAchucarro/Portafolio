import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Start } from '../components/Start';
import { Briefcase } from '../components/Briefcase';
import { Contact } from '../components/Contact';
import { Curriculum } from '../components/Curriculum';
import { Services } from '../components/Services';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Projects } from '../components/layout/Projects';
export const MyRoutes = () => {
    return (
        <BrowserRouter>
            {/* HEADER Y NAVEGACION*/}
            <HeaderNav />

            {/*CONTENIDO CENTRAL */}
            <section className='content'>
                <Routes>
                    <Route path='/' element={<Navigate to="/inicio"/>} />
                    <Route path='/inicio' element={<Start />} />
                    <Route path='/portafolio' element={<Briefcase />} />
                    <Route path='/contacto' element={<Contact />} />
                    <Route path='/servicio' element={<Services />} />
                    <Route path='/curriculum' element={<Curriculum />} />
                    <Route path='/proyecto/:id' element={<Projects />} />
                    <Route path='*' element={
                    <div className='page'>
                    <h1 className="heading"> Error 404 </h1>
                    </div>}/>
                </Routes>
            </section>

            {/*FOOTER */}
            <Footer />
        </BrowserRouter>
    )
}
