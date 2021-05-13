import axios from 'axios';
const CUSTOMERURL="http://localhost:8081/admin";
const POLICYURL="http://localhost:8081/customer";
export const getCustomerSuccess=(customer)=>{
    console.log("inside get customer success");
    console.log(customer);
    return{
        type:'GET_ALL_CUSTOMER_SUCCESS',customer
    }
};
export const getCustomer=() =>{
    console.log("inside get customers");
    return(dispatch)=>{
        return axios.get(CUSTOMERURL+"/viewAllCustomer")
        .then(Response =>{
            //localStorage.setCustomer("customer",JSON.stringify(Response.data));
            console.log("api call");
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
        console.log(data.customerId);
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
