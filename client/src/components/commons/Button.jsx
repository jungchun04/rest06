import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({ children, className, handleOnClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={handleOnClick}
      className={twMerge(
        clsx('py-3 px-4 text-white bg-main-700 rounded-md', className)
      )}
    >
      {children}
    </button>
  )
}

export default Button