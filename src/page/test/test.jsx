import "./test.css"
import React, { useState } from "react"


export const Test = () => {

    const[currentQuestion, setCurrentQuestion] = useState(0);
    const[showScore, setShowScore] = useState(false)

    let Questionbank=[
        {
            Question:"Just a few quick questions so we can create your language learning profile. Are you ready? ",
            Answers:[
                { Answer:"I'm Ready", isCorrect: true},
            ]
        },
        {
            Question:"What's your English level now?",
            Answers:[
                { Answer:"I'm just starting", isCorrect: true},
                { Answer:"I can't say much yet", isCorrect: true},
                { Answer:"I know the basics", isCorrect: true},
                { Answer:"I can talk about simple topics", isCorrect: true},
                { Answer:"I'm conversational", isCorrect: true},
                { Answer:"I can speak about my experience, make plans and tell stories", isCorrect: true},
                { Answer:"I can express myself fluently", isCorrect: true},
                { Answer:"I can use complex grammer and phrases but l lack nuance", isCorrect: true}
            ]
        },
        {
            Question:"What kind of lessons do you need?",
            Answers:[
                { Answer:"Popular", isCorrect: true},
                { Answer:"Business English", isCorrect: true},
                { Answer:"Conversational English", isCorrect: true},
                { Answer:"Intesive English", isCorrect: true},
                { Answer:"English for beginners", isCorrect: true},
                { Answer:"English for travling", isCorrect: true},
                { Answer:"For studying abroad", isCorrect: true},
                { Answer:"English Literature", isCorrect: true}
            ]
        },
        {
            Question:"When would you like to take lessons?",
            Answers:[
                { Answer:"For school or university", isCorrect: true},
                { Answer:"Out of interest or fun", isCorrect: true},
                { Answer:"For an upcoming trip", isCorrect: true},
                { Answer:"To connect with family or friends", isCorrect: true},
                { Answer:"For my job or career", isCorrect: true},
                { Answer:"To train my brain", isCorrect: true},
                { Answer:"I can express myself fluently", isCorrect: true},
                { Answer:"I can use complex grammer and phrases but l lack nuance", isCorrect: true}
            ]
        },
        {
            Question:"How much time do you want commit to learn English?",
            Answers:[
                { Answer:"Less than 30 min / week", isCorrect: true},
                { Answer:"Up to 2 hours / week", isCorrect: true},
                { Answer:"Up to 4 hours / week", isCorrect: true},
                { Answer:"More than 4 hours / week", isCorrect: true},
                { Answer:"Ask me again later", isCorrect: true},
            ]
        },
        {
            Question:"How would you like to learn",
            Answers:[
                { Answer:"Self-study", isCorrect: true},
                { Answer:"Live online classes", isCorrect: true},
                { Answer:"A mix of both", isCorrect: true},
            ]
        }
    ]
    const handleAnswerResponse = (isCorrect) => {
        const nextQuestion = currentQuestion + 1
        if(nextQuestion < Questionbank.length){
            setCurrentQuestion(nextQuestion)
        }else{
            setShowScore(true)
        }
    }

    return(
        <div className="main">
            {showScore?(
                <>
                <button className="finish"> <b>Finish</b></button>
                </>
            ):
                <div className="text">
                    <p className="p"><b>{Questionbank[currentQuestion].Question}</b></p>
                    <div className="answer">
                        {
                            Questionbank[currentQuestion].Answers.map((answer, i) =>
                            (
                                <button className="pt2" key={i} onClick={() => handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                            ))
                        }
                    </div>
                </div>
            }
        </div>
    )
}