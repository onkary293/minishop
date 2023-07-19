import React from 'react'
import cancel from '../assets/cancel.png'
import { Link } from 'react-router-dom'

const Cancel = () => {
  return (
    <div className="grid place-items-center w-full lg:h-screen h-full font-raleway bg-[#F7F7F7]">
      <div className="max-w-5xl rounded flex flex-col">
        <span className="text-red-600 text-5xl"> Something went wrong </span>{' '}
        <span className="text-red-400 text-center mt-8 text-2xl font-bold">
          {' '}
          Please retry after sometime{' '}
        </span>{' '}
      </div>{' '}
      <div className="flex justify-end items-center mx-auto my-15 w-60">
        <img src={cancel} alt="" />
      </div>{' '}
      <div className="my-10mx--auto">
        <Link to="/" className="underline text-xl uderline-offset-4">
          Back To Home Page{' '}
        </Link>{' '}
      </div>{' '}
    </div>
  )
}

export default Cancel
