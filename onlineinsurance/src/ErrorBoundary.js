import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
class ErrorBoundary extends Component{
    constructor(props) {
        super(props)
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }
    render(){
        if(this.state.hasError) {
            return alert("Something went 94927 wrong");
          
        
        }
        return this.props.children
    }
}
export default ErrorBoundary