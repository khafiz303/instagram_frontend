'use client'
import Image from 'next/image'
import logo from '../../app/images/logoo.png'
import { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import { useSelector ,  useDispatch} from 'react-redux'
import { signUp , LogIn } from '@/app/store/slices/authSlice'
import { current } from '@reduxjs/toolkit'
import Link from 'next/link'
export default function Authorization(){
    const[auth , setAuth] = useState(1)
    const [email , setEmail] = useState('')
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const dispatch = useDispatch()
    const [error , setError] = useState('')
    const isAuth = useSelector((state) =>state.auth.isAuth)
     const router = useRouter()
     const currentUser = useSelector((state) => state.auth.currentUser);
    const requestSignUp = ()=>{
        if(email == '') setError('Введите email корректно')
        if(username == '') setError('Введите username корректно')
        if(password.length >=  0) setError('Введите password корректно')
        
        if(email !== '' && username !== '' && password.length > 8){
            dispatch(signUp(email , password , username))
        }
      
    }
    const requestLogIn = ()=>{
        dispatch(LogIn(email , password))
    }


    useEffect(()=>{
        if(isAuth) router.push(`/home`)
    },[isAuth])
    return(
        <section>
            
            {auth === 1 && <div className="auth">
                <div className="auth-img">
                    <Image src={logo} alt='Logo' />
                </div>
                <div className='main-auth'>
                    <p>Sign up to see photos and videos from your friends.</p>
                    <button className='button btn-auth'> 
                        <img src='/images/lofo_faceBook.png'/>
                        Log in with Facebook
                    </button>
                    <div className='border'>
                        <span></span>
                        <p>OR</p>
                        <span></span>
                    </div>
                    <div className='input'>
                        <input placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                        <input placeholder='Username' value={username} onChange={(e)=> setUsername(e.target.value)}/>
                        {/* <input placeholder='Username'/> */}
                        <input placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                        {error && <p className='error'>{error}</p>}
                    </div>
                    
                    <p>People who use our service may have uploaded
                    your contact information to Instagram. Learn More
                    </p>
                    <p>By signing up, you agree to our Terms , and Cookies Policy .</p>
                    <button className='button' onClick={requestSignUp}>Sign up</button>
                </div>

            
            </div>}
            {auth === 1 && <div className='auth auth-b' >
                    <p>Have an account? <span onClick={()=> setAuth(2)}>Log in</span></p>
                </div>}

            

            {auth === 2 && <div className='auth'>
                <div className="auth-img">
                    <Image src={logo} alt='Logo' />
                </div>
                <div className='input'>
                    <input placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                    <input placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                </div>
                <button className='button'  onClick={requestLogIn}>Log in</button>  

            </div>}
            { auth === 2 && <div className='auth auth-b' >
                    <p>Done have an account? <span onClick={()=> setAuth(1)}>Sign up</span></p>
                </div>}

                <div className='auth-b-parag'>
                    <p>Get the app.</p>
                    <div className='auth-b-logo'>
                        <img src='/images/mic-logo.png'/>
                        <img src='/images/gp-logo.png'/>
                    </div>
                </div>
        </section>
    )
}