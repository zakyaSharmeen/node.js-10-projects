import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios"

export function attempts_Numbers(result){
    return result.filter(r => r!== undefined).length;
}

export function earnPoints_Number(result, answers, point){
    return result.map((elem, i)=> answers[i] === elem).filter(i => i).map(i => point).reduce((prev, curr) => prev +curr, 0)
}

export function flagResult(totalPoints, earnPoints){
    return (totalPoints *50/100) < earnPoints;
}


export function CheckUserExist({children}){
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={"/"} replace={true}></Navigate>
}


// to bring data from backend

export async function getServerData(url, callback){
    const data = await(await axios.get(url))?.data


    // console.log(data);
    
   
    return callback ? callback(data): data
    
}
 
export async function postServerData(url, result,callback){
    const data = await ((await axios.post(url, result))?.data)
    // console.log(data);
    return callback ? callback(data): data
    
}

