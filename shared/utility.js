
export function handleModifyAnswerVotes(answers,answerId,increment){
    return answers.map(ans=>{
        if (ans.answerId !==answerId){
            return ans;
        }
        else{
            return {...ans,upvotes:ans.upvotes+increment}
        }
    })
}