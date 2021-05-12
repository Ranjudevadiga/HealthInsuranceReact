import axios from 'axios';
const CUSTOMERURL="http://localhost:8081/admin";
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
