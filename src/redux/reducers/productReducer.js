import { ActionTypes } from "../constants/actions-types";

export const initialState = {
    products:[{
        id:1,
        title:"image",
        category:"software"
    }]
}

export const productReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        
    
        default:
            return state;
    }
}