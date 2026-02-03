import { useState } from "react"
import Question from "../questions.js"

export default function Quiz(){
    const[userAnswers, setUseAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    function handleSelectAnswer(selectedAnswer){
        setUseAnswers((prevUserAnswer) => {
            return[...prevUserAnswer, selectedAnswer];
        })
    }

    return(
        <>
            <div id="quiz">
                <div id="question">
                    <h2>{Question[activeQuestionIndex].text}</h2>
                    <ul id="answers">
                        {Question[activeQuestionIndex].answers.map((answer)=>{
                            return(
                                <li className="answer">
                                    <button onClick={() => handleSelectAnswer(answer)} key={answer}>
                                        {answer}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}




// Có thể dùng dấu () dùng để thay thế return : () => ()
// {Question[activeQuestionIndex].answers.map((answer)=>(
//         <li className="answer">
//             <button>
//                 {answer}
//             </button>
//         </li>
// ))}