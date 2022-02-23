import React from "react";
import {Overlay} from "../overlay";

import './index.scss'

export const Dialog = (p: { children?: React.ReactNode, isOpen?: boolean, onDismiss?: (e?: React.MouseEvent) => void}) => {

    const { children, onDismiss, isOpen } = p

    const onClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        onDismiss && onDismiss()
    }

    const onClickContent = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    if(!isOpen) return <></>

    return <Overlay onClose={onDismiss}>
        <div className={'dialog'} onClick={onClickContent}>
            <div className={'dialog__close'} onClick={onClick}/>
            <div className={'dialog__content'}>{children}</div>
        </div>
    </Overlay>
}