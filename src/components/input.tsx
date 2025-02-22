import * as React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({id, className, type, label, ...props}, ref) => {
    return (
      <div className="relative">
        <input
          id={id}
          type={type}
          className="block rounded-md px-6 pt-6 pb-1 w-full text-sm text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
          placeholder=""
          {...props}
        />
        <label htmlFor={id} className="absolute text-sm text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
          {label}
        </label>
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }