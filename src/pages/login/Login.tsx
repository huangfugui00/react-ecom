import React,{useEffect,useContext} from 'react'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import Logo from '../../components/Logo'
import {ToastAlert,toastAlert} from '../../components/ToastAlert'
import {userContext} from '../../App'
import userServices from '../../services/user'
import './login.scss'

type formProp = {
    email:string,
    password:string,
}

const Login = () => {
    useEffect(() => {
        if(user.islogin){
            history.push('/')
        }
    }, [])

    const history = useHistory()
    const { handleSubmit, register, formState: { errors },reset } = useForm();
    const {user,setUser} = useContext(userContext)

    const onSubmit = async (data:formProp)=>{
        let result = await userServices.login(data.email,data.password)
        if(result.status===1){
             //set local token
            const token = result.data.token
            sessionStorage.setItem('token', token)
            //getUser
            result = await userServices.getMe()
            if(result.status===1){
            //setUser
                const user= result.data.user   
                setUser({...user,islogin:true})
            }
            reset()
            history.push('/')
        }
        toastAlert(result.statusText)
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
                 {...register("password", { required: true, minLength: 3 })}
                />
                {errors.password && <span id="error">password at least 3 char</span>}
               </div>
              
                <div className="d-flex align-items-center">
                <button>login</button>
                <a href="/register">Not have a account,go to register!</a>
                </div>
            </form>
            <Logo/>              
            <ToastAlert/>          
        </div>
    )
}

export default Login
