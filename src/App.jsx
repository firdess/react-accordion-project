
import { useState } from 'react'
import Question from './Question'
import data from './data';
import './styles/styles.css'

function App() {

  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3>questions and answers about login</h3>
        <div className='info'>
          {
            questions.map((question) => {
             return (
              <Question key={question.id} {...question} />
             )
            })
          }
        </div>
      </section>
    </main>
  )
}

export default App
