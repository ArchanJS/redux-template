import {INCRE,DECRE} from '../Constants';

export const numberReducer=(state=0,action)=>{
    switch(action.type){
        case INCRE:
            return state+action.payload;
        case DECRE:
            return state-action.payload;
        default:
            return state;
    }
}