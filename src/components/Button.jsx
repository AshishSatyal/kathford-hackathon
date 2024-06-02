import React from 'react'

const Button = ({ label, link }) => {
  return (
    <a href={link} target='_blank' className="register-btn m-2 relative inline-flex h-12 overflow-hidden rounded-full p-[1.25px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-0 focus:ring-offset-slate-50 ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#05bc64_0%,#27445c_50%,#232323_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2  text-white backdrop-blur-3xl capitalize text-lg font-bold">
          { label }
        </span>
    </a>
  )
}

export default Button