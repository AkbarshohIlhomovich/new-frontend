import React from 'react'
import NotFoundAnim from '../../components/LottiAnimations/404/NotFoundAnim'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='h-screen pt-1 flex flex-col justify-center items-center'>
      <NotFoundAnim className={"w-[70%] xl:w-[60%]"} />
      <div className='text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl'>Bunday sahifa topilmadi</h1>
        <button onClick={()=>navigate(-1)} className='bg-blue-500 mt-6 px-4 rounded-md py-2  hover:shadow-lg hover:shadow-blue-300 text-white'>Ortga qaytish</button>
      </div>
    </div>
  )
}

export default PageNotFound