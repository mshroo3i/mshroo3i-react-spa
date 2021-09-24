/* This example requires Tailwind CSS v2.0+ */

export function Banner(props: any) {
    return (
        <div className="fixed bottom-1 inset-x-0 pb-2 sm:pb-5">
            <div className="max-w-xl mx-auto px-2 sm:px-6 lg:px-8">
                <button className="relative block w-full p-1 rounded bg-green-600 shadow-lg py-2 px-3">
                    <div className="absolute inset-y-0 left-0 pt-2 ml-2">
                        <span className="text-white" aria-hidden="true">‏٢٫٢٥٠ د.ك</span>
                    </div>
                    <p className="font-medium text-center text-white truncate">
                        راجع الطلب
                    </p>
                    <div className=" border-white absolute inset-y-0 right-0 my-2 mr-2 border rounded-lg px-2">
                        <span className="text-white" aria-hidden="true">٥</span>
                    </div>
                </button>
            </div>
        </div>
    )
}
