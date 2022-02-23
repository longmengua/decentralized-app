import React from "react";
import './index.scss'

export const Loader = (p: {size?: number}) => {
    return <div className={'loader image'} style={{padding: p.size ? `${p.size}px` : '10px'}}/>
}