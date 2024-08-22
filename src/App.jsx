import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch} from "react-redux"
import authService from './appwite/auth'
import {login,logout} from './store/authSlice'
import {Header,Footer} from './components/index'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading,setLoading] = useState(true)
  const dispatch=useDispatch()

  useEffect(() => {
      authService.getCurrrentUser()
      .then( (userData) => {

          if(userData){

             dispatch(login({userData}))
          }else{

             dispatch(logout())
          }
         })

      .finally( () => setLoading(false))
  },)
  

  return !loading ? (
    <div className='min-h-screen flex flex-grow content-between'>
      <div className=''>
       <Header/>

    <main>
    <Outlet />
    </main>
      
      <Footer/>
      </div>
    </div>
  ) : 
  <div className='flex-col gap-4 w-full h-[100vh] flex items-center justify-center'>
    <div
         class="hover:scale-110 transition-all ease-in-out cursor-pointer hover:shadow-xl hover:shadow-neutral-700 delay-250 animate-spin delay-50 duration-1000 bg-gradient-to-br border-4 shadow-inner shadow-neutral-700 border-neutral-950 from-white/80 to-gray-600 rounded-full grid place-items-center z-0 h-20 w-20 relative"
    >
        <div
            class="rounded-full bg-neutral-900 absolute rotate-[90deg] z-20 h-20 scale-50 w-2"
        ></div>
        <div
            class="rounded-full bg-neutral-900 absolute rotate-[180deg] z-20 h-20 scale-50 w-2"
        ></div>
    </div>
  </div>
}

export default App
