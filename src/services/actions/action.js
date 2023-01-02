import {INCRE,DECRE} from '../Constants';

export const increment=(data)=>{
    return (dispatch)=>dispatch({
        type:INCRE,
        payload:data
    })
}

export const decrement=(data)=>{
    return (dispatch)=>dispatch({
        type:DECRE,
        payload:data
    })
}