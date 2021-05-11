import axios from 'axios';

const LOGINURL="http://localhost:8081/customer";

export const loginSuccess=(login)=>{

    console.log("inside loginsuccess method");
    console.log(login);
    return{
        type:'LOGIN_SUCCESS',login
    }
};
export const loginValidate=(payload)=>{
    console.log("inside loginvalidate  method");
    let data={
        emailId:payload.emailId,
        password:payload.password
   }
    console.log(data.emailId);
    return (dispatch)=>{
        return axios.post(LOGINURL+"/validate",data)
        
        .then(Response=>{
          
           localStorage.setItem("login",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(loginSuccess(Response.data));

        })
        .catch(Error=>{
            console.log("error");
            throw(Error);
        });
    };
};
export const registrationSuccess=(customerId)=>{
    console.log("inside registration success");
    alert("Customer registered successfully");
    
  //window.location.href="/addcus?Id="+customerId;
    return{
        type:'REGN_SUCCESS'
    }

}
export const registerCustomer=(payload)=>{
    console.log("inside register customer method");
    let data={
        firstName:payload.firstName,
        lastName:payload.lastName,
        emailId:payload.emailId,
        password:payload.password,
        role:payload.role
    }
    
    return(dispatch)=>{
        return axios.post(LOGINURL+"/registerCustomer",data)
        .then(Response=>{
         
             document.getElementById('customerId').value=Response.data;
          
            dispatch(registrationSuccess(Response.data));
        })
        .catch(Error=>{
            console.log("error");
            throw(Error);
        });
       
    };
};