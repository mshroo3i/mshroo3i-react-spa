
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react"

interface BannerProps extends React.HTMLAttributes<HTMLAttributes<any>> {
    children: ReactNode,
    onClickHandler?: any,
    as?: 'button' | 'a' | undefined,
    href?: string
}

export function Banner({onClickHandler, children, as = "button", href, ...props}:  BannerProps) {
    const myProps: any = { className: 'relative block w-full p-1 rounded bg-green-600 shadow-lg py-2 px-3 font-medium text-white'}
    if (as === 'button') {
        myProps.onClick = onClickHandler
    } else {
        myProps.href = href
        myProps.target = "_blank"
        myProps.rel = "noopener noreferrer"
    }
    const element = React.createElement(as, { ...myProps, ...props }, children)
    return (
        <div className="flex items-center fixed bottom-1 inset-x-0 pb-2 sm:pb-5">
            <div className="w-full px-2 sm:px-6 lg:px-8">
                {element}
            </div>
        </div>
    )
}
