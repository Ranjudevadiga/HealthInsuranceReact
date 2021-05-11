const initialState={
    login:undefined,
    register:undefined,
    
}

export default function LoginReducer(state=initialState,action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                login:action.login
            };
        case 'REGN_SUCCESS':
            return{
                ...state,
                register:action.register
            };
       
            default:
                return state;
    }
};