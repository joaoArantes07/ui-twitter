import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import  './Status.css';

export function Status(){
  const [newAnswer, setNewAnswer] = useState ('')
  const [answers, setAnswers] = useState([
    'Resposta 1',
    'Resposta 2',
    'Resposta 3',
  ])

  function createNewAnswer(event: FormEvent){
      event.preventDefault()
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
  }


  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

    return (
    <main className="status">
    <Header title="Tweet" />

    <Tweet content="        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates veritatis magni illum rerum quo possimus autem pariatur, suscipit nisi exercitationem voluptatibus odio laborum, vel iure non officia eum. Consequuntur, voluptatibus.
    "/>

    <Separator />

    <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/joaoArantes07.png" alt="Joao Arantes" />
          <textarea 
          id="tweet" 
          placeholder="Tweet your reply"
          value={newAnswer}
          onKeyDown={handleHotKeySubmit}
          onChange={(event) => {
            setNewAnswer(event.target.value)
          }}
          />
        </label>

        <button type="submit">
           <PaperPlaneRight />
           <span>Answer</span>
        </button>
    </form>

    {answers.map(answer => {
      return <Tweet key={answer} content={answer}/>
    })}
    
  </main>
  )
}