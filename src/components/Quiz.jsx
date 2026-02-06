import { useState } from "react"
import Question from "../questions.js"
import { renderToStaticMarkup } from "react-dom/server";
import QuizCompeleImg from "../assets/quiz-complete.png"

export default function Quiz(){
    const[userAnswers, setUseAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    //Kiểm tra đã hết câu hỏi chưa 
    const quizCompele = activeQuestionIndex === Question.length;

    function handleSelectAnswer(selectedAnswer){
        setUseAnswers((prevUserAnswer) => {
            return[...prevUserAnswer, selectedAnswer];
        })
    }

    if(quizCompele){
        return(
            <div id="summary">
                <img src={QuizCompeleImg}/>
                <h2>Quiz Compele</h2>
            </div>
        )
    }


    function shuffleArray(array) {
    for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    }

    //tạo bản sao mảng gốc 0 để xáo trộn (0 làm thay đổi mảng gốc) -
    const shuffledAnswers = [...Question[activeQuestionIndex].answers];
    shuffleArray(shuffledAnswers);
    return(
        <>
            <div id="quiz">
                <div id="question">
                    <h2>{Question[activeQuestionIndex].text}</h2>
                    <ul id="answers">
                        {/* {Question[activeQuestionIndex].answers.map((answer)=>{ */}
                        {shuffledAnswers.map((answer) => (
                            <li key={answer} className="answer">
                                <button onClick={() => handleSelectAnswer(answer)}>
                                    {answer}
                                </button>
                            </li>
                        ))}
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