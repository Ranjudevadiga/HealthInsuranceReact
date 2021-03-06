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
            localStorage.setItem("items",JSON.stringify(Response.data));
          
       
            dispatch(getPolicySuccess(Response.data));
        })
        
    };
};


export const policyDeleteSuccess=(policy)=>{
    console.log("inside delete success");
    window.location.href="/adminviewpolicy";
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
        
   
        dispatch(policyDeleteSuccess(Response.data));
    })
};
};

export const createPolicySuccess=(Policies)=>{
    console.log("inside create Policy Success ");
    alert("Policy Added Successfully");
    window.location.href="/adminviewpolicy";
    return {
        type:'POLICY_CREATION_SUCCESS',Policies
    }
};

export const createPolicy = (payload) => {
    console.log("inside add policy");
let data={
    policyName:payload.policyName,
    ageGroup:payload.ageGroup,
    policyTerm:payload.policyTerm,
    baseAmount:payload.baseAmount,
    policyCover:payload.policyCover
}
    return (dispatch) => {
        return axios.post(POLICYADMURL + "/addPolicy", data)
        .then(Response=>{
            dispatch(createPolicySuccess(Response.data));
        })
        .catch(error=>{
            alert(error.response.data);
            throw(error);
        });

    };

};

export const editPolicySuccess=()=>{
    console.log("inside editItemSuccess method");
    window.location.href="/adminviewpolicy";
    return {
        type : 'POLICY_EDITED'
    }
};

export const editPolicy = (payload) =>{
    console.log("inside editItem method");
    let item = {
        policyId : payload.policyId,
        policyName : payload.policyName,
        ageGroup : payload.ageGroup,
        policyTerm:payload.policyTerm,
        baseAmount:payload.baseAmount,
        policyCover:payload.policyCover
    }
    return (dispatch)=> {
        return axios.put(POLICYADMURL+"/updatePolicy",item)
        .then(Response => {
            
            dispatch(editPolicySuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};
