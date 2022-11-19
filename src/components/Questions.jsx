import './Questions.css';

import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Option from './Option';

const Questions = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    const onselectOption = (option) => {
        console.log(option)
        dispatch({type: "CHECK_ANSWER", payload: {answer: currentQuestion.answer, option}})
    }

    return (
        <div id='questions'>
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2>{ currentQuestion.question }</h2>
            <div id='options-conteiner'>
                {currentQuestion.options.map((option) => (
                <Option option={option}
                key={option}
                answer={currentQuestion.answer}
                selectOption={() => onselectOption(option)}
                />
                ))}
            </div>
            {quizState.answerSelected && (
                <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
            )}
        </div>
    )
}

export default Questions