import {useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import {app} from '../../firebase-config'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {


let navigate = useNavigate()
const {register, handleSubmit} = useForm()
const [loading, setLoading] = useState(false)
const onSubmit = (data) => {
  console.log(data)
setLoading(true)
const authentication = getAuth()
let uid = '1234'
createUserWithEmailAndPassword(authentication, data.email, data.password).then((response) => {
  console.log("response: ",response)
  uid = response.user.uid
  sessionStorage.setItem('User Id', uid)
  sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken)
  window.dispatchEvent(new Event("storage"))
  console.log("UID: ", uid)


  fetch('http://localhost:8080/api/create-user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: data.email,
    name: data.name,
    _id: uid
  })
}).then((response) => {
  if (response.status === 200) {
    setLoading(false)
    toast.success('Account created successfully!🎉', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark'
                        });
                    navigate('/');
                } else {
                    console.log(response.json());
                }
            }).catch((error) => {
                setLoading(false);
                console.log(error)
            })

}).catch((err) => {
    console.log("error: ",err)

  if (err.code === 'auth/email-already-in-use'){
    toast.error('Email Already in Use')
  }
})



}


  return (
   <div className="h-screen bg-black flex  items-center justify-center">
            <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
                <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
                    <h5 className="text-3xl text-white">Register</h5>
                <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label 
                        htmlFor="name"
                        className="block text-lg font-medium text-gray-200">Name</label>
                        <input 
                        {...register('name')}
                        id="name"
                        type="text"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                        />
                    </div>
                    <div>
                        <label 
                        htmlFor="email"
                        className="block text-lg font-medium text-gray-200">Email</label>
                        <input 
                        {...register('email')}
                        id="email"
                        type="email"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                        />
                    </div>
                    <div>
                        <label 
                        htmlFor="password"
                        className="block text-lg font-medium text-gray-200">Password</label>
                        <input 
                        {...register('password')}
                        id="password"
                        type="password"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                        />
                    </div>
                    <div class="py-10 text-center">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-orange-400 group-hover:from-red-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-pink-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Register
  </span>
</button>
            </div>
                </form>
                <ToastContainer />
                </div>
            </div>
        </div>
  )
}

export default Register