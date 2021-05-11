import axios from 'axios';

const POLICYURL="http://localhost:8081/customer";
const POLICYADMURL="http://localhost:8081/admin";

export const getPolicySuccess=(policies)=>{
    console.log("inside registration success");
    
    return{
        type: 'GET_POLICY_SUCCESS',policies
    }
} ;

export const getPolicy=()=>{
    console.log("inside register user method");
    
    return(dispatch)=>{
        return axios.get(POLICYURL+"/viewAllPolicies")
        .then(Response=>{
            //localStorage.setPolicy("policies",JSON.stringify(Response.data));
            console.log("api call");
       
            dispatch(getPolicySuccess(Response.data));
        })
        
    };
};


export const policyDeleteSuccess=(policy)=>{
    console.log("inside delete success");
    
    return{
        type: 'DELETE_ITEM_SUCCESS',
        payload:policy
    }
} ;


export const deletePolicy=(policyId)=>{
console.log("inside delete");
return(dispatch)=>{
    return axios.delete(POLICYADMURL+"/deletePolicy/"+policyId)
    .then(Response=>{
        localStorage.setItem("items",JSON.stringify(Response.data));
        console.log("api call");
   
        dispatch(policyDeleteSuccess(Response.data));
    })
};
};