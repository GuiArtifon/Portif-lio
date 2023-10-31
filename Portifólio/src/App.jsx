import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Guilherme Artifon Machado</h1>
      </header>
      <section id="sobre">
        <h2>Sobre Mim</h2>
        <p>Olá! Sou um profissional de 33 anos, casado e pai de uma adorável filha, com uma sólida formação em Segurança do Trabalho e Administração de Empresas. Ao longo da minha carreira, adquiri conhecimentos e experiência em gestão pública, e atualmente estou investindo na minha formação em desenvolvimento de sistemas e Educação Física.</p>
      </section>
      <section id="projetos">
        <h2>Conhecimentos</h2>
        <p>Já realizei projetos utilizando React,React Native, JavaScript e PostgreSQL (Todas em nível básico).</p>
        {/* Listagem de projetos */}
      </section>
      <section id="experiencia">
        <h2>Experiência</h2>
        <p>Em breve...</p>
      </section>
      <section id="educacao">
        <h2>Educação</h2>
        <p> Técnico em Segurança do Trabalho, SENAI, 2010</p>
    <p>Graduação em Administração de Empresas, FMP, 2016</p>
    <p>MBA em Gestão Pública, FPM, 2018</p>
    <p>Técnico em Desenvolvimento de Sistemas, SENAI, 2023</p>
   <p> Aluno de Educação Física, FAVENI, 2024</p>
      </section>
    </div>
  );
}

export default App;