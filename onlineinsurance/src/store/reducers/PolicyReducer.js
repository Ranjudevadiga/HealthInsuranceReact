const initialState={
   
    policies:[],
    policyDetails:[],
    editpolicy:undefined
    
}

export default function LoginReducer(state=initialState,action){
    switch(action.type){
        

     case 'GET_POLICY_SUCCESS':
          return{
                ...state,
                policies:action.policies
            };
    case 'GET_PURCHASED_POLICY_SUCCESS':
            return{
                      ...state,
                      policyDetails:action.policyDetails
                };
    case 'DELETE_ITEM_SUCCESS':
        return{
            policies:[
                ...state.policies.filter(polcy=>polcy!==action.payload)
            ]
        };
    case 'BUY_POLICY_SUCCESS':
        return{
            ...state,
            policyDetails:action.policyDetails
        }
    case 'POLICY_CREATION_SUCCESS':
        return{
            ...state,
            policies:action.policies
        }

        case 'POLICY_EDITED' :
            return {
                ...state,
                editpolicy : 'edited'
            }
       

     default:
                return state;
    }
};