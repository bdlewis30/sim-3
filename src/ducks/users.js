import axios from 'axios';

// 43D
const initialState = {
    user: {}
}
// 43E
const GET_USER_INFO = 'GET_USER_INFO';

// 43F, 44C, 44D, 74D-1
export function getUserInfo(){
    let userData = axios.get('/auth/me').then( res => {
        return res.data;
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}


export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_USER_INFO:
            return Object.assign({}, state, {user: action.payload})
        default:
            return state;
    }
}

