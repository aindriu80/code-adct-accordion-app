import { useState } from 'react'
import Question from './Question';
import data from './data';
import './App.css';

function App() {
  return (
    <main>
      <div className='container'>
        <h2>Accordion App</h2>

        <section className='info'>
          {data.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App
