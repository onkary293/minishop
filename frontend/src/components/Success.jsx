import React from 'react'
import success from '../assets/success.png'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className="grid place-items-center w-full lg:h-screen h-full font-raleway bg-[#F7F7F7]">
      <div className="max-w-5xl rounded flex flex-col">
        <span className="text-green-600 text-5xl"> Payment Suceessful </span>{' '}
        <span className="text-yellow-600 text-center mt-8 text-2xl font-bold">
          {' '}
          Your order is in our system{' '}
        </span>{' '}
        <div className="flex justify-end items-center mx-auto my-24 w-60">
          <img src={success} alt="" />
        </div>{' '}
        <div className="my-10mx--auto">
          <Link to="/" className="underline text-xl uderline-offset-4">
            Back To Home Page{' '}
          </Link>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  )
}

export default Success
