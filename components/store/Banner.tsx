
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react"

interface BannerProps extends  React.HTMLAttributes<HTMLAttributes<any>> {
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
        <div className="fixed bottom-1 inset-x-0 pb-2 sm:pb-5">
            <div className="max-w-xl mx-auto px-2 sm:px-6 lg:px-8">
                {element}
                {/* <button className="relative block w-full p-1 rounded bg-green-600 shadow-lg py-2 px-3 font-medium text-white" onClick={onClickHandler}>
                    /* <div className="absolute inset-y-0 left-0 pt-2 ml-2">
                        <span className="text-white" aria-hidden="true">{price.toFormattedString()}</span>
                    </div>
                    <p className="font-medium text-center text-white truncate">
                        راجع السلة
                    </p>
                    <div className=" border-white border-2 absolute inset-y-0 right-0 my-2 mr-2 rounded-full px-2">
                        <span className="text-white" aria-hidden="true">{quantity.toLocaleString("ar-EG")}</span>
                    </div>
                    children
                </button> */}
            </div>
        </div>
    )
}
