import React from 'react'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import Logo from '../../components/Logo'
import './register.scss'

type formProp = {
    username:string,
    email:string,
    password:string,
}

const Register = () => {
    const history = useHistory()
    const { handleSubmit, register, formState: { errors },reset } = useForm();
    const onSubmit = (data:formProp)=>{
        reset()
        history.push('/login')
    }
    
    return (
        <div className="register-page d-flex align-items-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div id="username">
                <span>username</span>
                    <input className="form-control" type="text" placeholder="username is not for login"  
                    {...register("username", { required: true, minLength: 3 })}
                    />
                    {errors.username && <span id="error">username at least 3 char</span>}
               </div>
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
                <button>register</button>
                <a href="/login">Already have a accout?</a>
                </div>
            </form>
            <Logo/>                        
        </div>
    )
}

export default Register
