const initialState={
    customer:[],
    policyDetails:[]
}
export default function UserReducer(state=initialState,action){
    switch(action.type){
        case 'GET_ALL_CUSTOMER_SUCCESS':
            return{
                ...state,
                customer:action.customer
            };
        case 'RENEW_POLICY_SUCCESS':
            return{
                    ...state,
                    policyDetails:action.policyDetails
            };
        case 'GET_PURCHASED_POLICY_SUCCESS':
            return{
                      ...state,
                      policyDetails:action.policyDetails
                };
        case 'BUY_POLICY_SUCCESS':
            return{
                    ...state,
                    policyDetails:action.policyDetails
        };
            default:
                return state
        }
        
};