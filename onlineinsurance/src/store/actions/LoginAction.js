import axios from 'axios';

const LOGINURL="http://localhost:8081/customer";

export const loginSuccess=(login)=>{

    console.log("inside loginsuccess method");
   
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
   
    return (dispatch)=>{
        return axios.post(LOGINURL+"/validate",data)
        
        .then(Response=>{
          
           localStorage.setItem("login",JSON.stringify(Response.data));
           if(Response.data.role==='admin'){
            sessionStorage.setItem("adminId",Response.data.customerId);
           }
           else{
           sessionStorage.setItem("userId",Response.data.customerId);
           sessionStorage.setItem("username",Response.data.firstName);
           }
            
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
    
  window.location.href="/addCus?Id="+customerId;
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


export const additionSuccess=()=>{
    console.log("inside customer addiotn succes method");
    alert("Customer details added successfully");
    if(sessionStorage.getItem("userId")===undefined){
    window.location.href="/login";
    }
    else{
        window.location.href="/user"; 
    }
    return{
        type:'CUST_DETAIL_ADD_SUCCESS'
    }


}
export const addCustDetails=(payload)=>{
    console.log("inside add customer details method");
    let data={
        isDiabetic:payload.isDiabetic,
        isSmoker:payload.isSmoker,
        isAlcoholic:payload.isAlcoholic,
        bodyMassIndex:payload.bodyMassIndex,
        age:payload.age,
        salaryBracket:payload.salaryBracket,
        customerId:payload.customerId

    }
    
    return(dispatch)=>{
        return axios.post(LOGINURL+"/addCustomerDetail",data)
        .then(Response=>{
            console.log(Response.data);
            dispatch(additionSuccess());
        })
        .catch(error=>{
            alert(error.response.data);
            window.location.href="/user";
            
            throw(Error);
        });
    };
};