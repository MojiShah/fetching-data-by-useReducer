import { actionTypes } from "./actionTypes";

export const initialState = {
    text: '',
    loading: false,
    error: false
};

//  Fetch_start : loading : true;
//  Fetch_success : loading : false;  
//                  fact : res.data.fact
//  Fetch_error : loading : false
//                error : true

export const factReducer = (state, action) => {
    //action : {type:,data:}
    switch (action.type) {
        case actionTypes.fetch_start:
            return {text:'' , loading:true , error:false};
        case actionTypes.fetch_success:
            return {text:action.data , loading:false , error:false};
        case actionTypes.fetch_error:
            return {text:'' , loading:false , error:true};
        default:
            return state;
    }
}