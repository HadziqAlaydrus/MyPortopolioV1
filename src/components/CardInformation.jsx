import React from 'react'
import { Link } from 'react-router-dom'

const CardInformation = () => {
  return (
    <section className='relative flex justify-center items-center p-20'>
      <div className='absolute inset-0 mx-auto my-auto h-20 z-0 filter blur-3xl animate-pulse bg-gradient-to-r from-purple-800 dark:from-purple-600 to-yellow-800 dark:to-yellow-600 w-full md:w-1/3'></div>
      
      <div className='relative z-10 p-10 mx-auto flex gap-8 grid grid-cols-2 w-fit'>
        <Link to={"https://github.com/HadziqAlaydrus"} target='_blank' rel='noopener noreferrer' ><button className='text-white btn btn-primary'>Github</button></Link>
        <Link to={"https://www.linkedin.com/in/abubakarhadziqalaydrus/"} target='_blank' rel='noopener noreferrer'><button className='text-white btn btn-primary' >LinkedIn</button></Link>
        <Link to={"mailto:hadziq.alaydrus361@gmail.com"} target='_blank' rel='noopener noreferrer'><button className='text-white btn btn-primary' >Email</button></Link>
        <Link to={"https://www.instagram.com/hadziqalaydrus"} target='_blank' rel='noopener noreferrer'><button className='text-white btn btn-primary' >Instagram</button></Link>
        
      </div>
    </section>
  )
}

export default CardInformation
