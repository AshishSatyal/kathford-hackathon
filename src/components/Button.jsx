import React from 'react'

const Button = ({ label, link, className }) => {
  return (
    <a href={link} target='_blank' className={`${className} register-btn relative h-12 overflow-hidden rounded-full p-[1.25px] focus:outline-none transition-all duration-300 ease-out`}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3c536c_0%,#393BB2_50%,#05bc64_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2  text-white backdrop-blur-3xl capitalize text-lg font-bold">
          { label }
        </span>
    </a>
  )
}

export default Button