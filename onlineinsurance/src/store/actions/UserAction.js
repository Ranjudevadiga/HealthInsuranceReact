import axios from 'axios';
const CUSTOMERURL="http://localhost:8081/admin";
const POLICYURL="http://localhost:8081/customer";
export const getCustomerSuccess=(customer)=>{
    console.log("inside get customer success");
  
    return{
        type:'GET_ALL_CUSTOMER_SUCCESS',customer
    }
};
export const getCustomer=() =>{
    console.log("inside get customers");
    return(dispatch)=>{
        return axios.get(CUSTOMERURL+"/viewAllCustomer")
        .then(Response =>{
           
            dispatch(getCustomerSuccess(Response.data));
        })
        .catch(Error=>{
            console.log("error");
            throw(Error);
        });
    };
};
export const renewSuccess=(policy)=>{
    console.log("inside renew success method");
    window.location.href="/viewPurchasedPolicy?Id=/"+policy.customerId;
    return{
        type:'RENEW_POLICY_SUCCESS'
    }
}
export const renewPolicy=(payload)=>{
    console.log("In renew method");
    let data={
       policyDetailsId:payload.policyDetailsId,
        policyId:payload.policyId,
        customerId:payload.customerId
        }
       
    return(dispatch)=>{
      return  axios.put(POLICYURL+"/renewPolicy",data)
      .then(Response=>{
        dispatch(renewSuccess(Response.data));
      })
    .catch(Error=>{
        console.log("error");
        throw(Error);
    });
};
};
export const buyPolicySucces=(policy)=>{
    console.log("inside buypolicy");
    alert("Policy bought successfully");
    window.location.href="/viewPurchasedPolicy?Id="+policy.customerId;
    return{
        type:'BUY_POLICY_SUCCESS'
    }
}
export const buyPolicies=(payload)=>{

    console.log("inside buy policy");
    let data={
        customerId:payload.customerId,
        policyId:payload.policyId
        }
      
        return(dispatch)=>{
            return axios.post(POLICYURL+"/buyPolicy",data)
            .then(Response=>{
              
                dispatch(buyPolicySucces(Response.data));
                
            })
            .catch(Error=>{
                alert("This policy is purchased by you already");
                throw(Error);
            });
        };
};
export const getBoughtPolicyDetailsSuccess=(policyDetails)=>{
    console.log("inside purchased policies success");
    
    return{
        type: 'GET_PURCHASED_POLICY_SUCCESS',policyDetails
    }
} ;
export const getBoughtPolicy=(customerId)=>{
console.log("In policy details display method");
return(dispatch)=>{
    return axios.get(POLICYURL+"/getAllPolicydetails/"+customerId)
    .then(Response=>{
   
        dispatch(getBoughtPolicyDetailsSuccess(Response.data));
    })
    .catch(Error=>{
        console.log("error");
        throw(Error);
    });
};
};
