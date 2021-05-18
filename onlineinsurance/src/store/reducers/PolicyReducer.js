const initialState={
   
    policies:[],
    policyDetails:[],
    editpolicy:undefined
    
}

export default function PolicyReducer(state=initialState,action){
    switch(action.type){
        

     case 'GET_POLICY_SUCCESS':
          return{
                ...state,
                policies:action.policies
            };
    case 'DELETE_ITEM_SUCCESS':
        return{
            policies:[
                ...state.policies.filter(polcy=>polcy!==action.payload)
            ]
        };
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