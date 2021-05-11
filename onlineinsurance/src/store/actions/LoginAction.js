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

