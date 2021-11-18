import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import Logo from '../../components/Logo'
import './login.scss'

type formProp = {
    email:string,
    password:string,
}

const Login = () => {
    const { handleSubmit, register, formState: { errors },reset } = useForm();
    const onSubmit = (data:formProp)=>{
        reset()
    }
    
    return (
        <div className="login-page d-flex align-items-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div id="email">
                <span>email</span>
                <input className="form-control" type="email" placeholder="Enter your email" 
                 {...register("email", {
                    required: "Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address"
                    }
                  })}/>
                  {errors.email && <span id="error">invalid email format</span>}
                </div>
               <div id="password">
               <span>password</span>
                <input className="form-control" type="password" placeholder="Enter your password"  
                 {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && <span id="error">password at least 6 char</span>}
               </div>
              
                <div className="d-flex align-items-center">
                <button>login</button>
                <a href="/register">Not have a account,go to register!</a>
                </div>
               
            </form>
            <Logo/>  
           
            
                                  
        </div>
    )
}

export default Login
