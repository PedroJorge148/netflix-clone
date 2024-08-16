'use client'

import { Input } from "@/components/input"
import { useState } from "react"

export function AuthForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [variant, setVariant] = useState('login')

  function onToggleVariant() {
    setVariant(
      (currentVariant) => currentVariant === 'login' ? 'register' : 'login'
    )
  }

  return (
    <div className="bg-black/70 p-16 self-center mt-2 rounded-md w-full lg:w-2/5 lg:max-w-md">
      <h2 className="text-white text-4xl mb-8 font-semibold">
        {variant === 'login' ? 'Sign In' : 'Register'}
      </h2>
      <div className="flex flex-col gap-4">
        {variant === 'register' && (
          <Input
            id="name"
            type="text"
            label="Username"
            value={name}
            onChange={(e) => {setName(e.target.value)}} 
          />
        )}
        <Input 
          id="email"
          type="email"
          label="Email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}} 
        />
        <Input 
          id="password"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}} 
        />
      </div>
      <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
        {variant === 'login' ? 'Login' : 'Sign up' }
      </button>
      <p className="text-neutral-500 mt-12">
        {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?' }
        <span onClick={onToggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
          {variant === 'login' ? 'Create an account' : 'Login' }
        </span>
      </p>
    </div>
  )
}