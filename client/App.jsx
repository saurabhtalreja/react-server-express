import React from 'react';

const App = ({questions, answers,handleModifyAnswerClick}) => {
    return (<div>
                <h1>Q&A Tool</h1>
            {questions.map(({questionId, content})=>(
                <div key={questionId}>
                    <h3>{content}</h3>
                    <div>
                        {answers.filter(ans=>ans.questionId==questionId).map(({content,upvotes,answerId})=>(
                            <div key={answerId}>
                                <span>{content}-{upvotes}</span>
                                <button className="btn btn-sm btn-outline-secondary" onClick={()=>handleModifyAnswerClick(answerId, 1)}>+</button>
                                <button className="btn btn-sm btn-outline-secondary ml-1" onClick={()=>handleModifyAnswerClick(answerId, -1)}>-</button>
                            </div>
                        ))}
                    </div>



                </div>
            ))}


            This is React Component

            </div>
    )
}

export {App};