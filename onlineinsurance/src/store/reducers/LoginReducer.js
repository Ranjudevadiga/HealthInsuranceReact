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
        case 'CUST_DETAIL_ADD_SUCCESS':
            return{
                    ...state,
                    customerDetails:action.customerDetails
    
            };
       
            default:
                return state;
    }
};