const initialState={
    customer:[]
}
export default function ItemReducer(state=initialState,action){
    switch(action.type){
        case 'GET_ALL_CUSTOMER_SUCCESS':
            return{
                ...state,
                customer:action.customer
            };
            default:
                return state
        }
        
        

};