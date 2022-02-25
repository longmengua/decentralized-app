import React from 'react'
import './index.scss'

export const Input = (p: {className: string, disabled?: boolean, value?: string, onChange?: (value: string) => void}) => {
  const { className, disabled, value, onChange } = p

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    onChange && onChange(v)
  }

  return <div className={`input ${className}`}>
    <input className={'input__i'} disabled={disabled} style={{color: disabled ? 'gray' : ''}} value={value} onChange={change}/>
  </div>
}