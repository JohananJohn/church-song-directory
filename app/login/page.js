import Link from "next/link"
import "../globals.scss";

export default function Login() {
    return <div className="flex items-center justify-center h-[90vh] w-full">
        <div className="flex-1">

        </div>
        <div className="flex flex-1 justify-center">
            <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-sky-500 text-7xl font-bold">Welcome</h1>
                    <span className="text-gray-400">Login with Email</span>
                </div>
                <form>
                    <div className="flex flex-col gap-5 font-semibold items-center w-96">
                        <div className="flex flex-col w-full">
                            <label className="text-xs ml-4 p-1 mb-[-12px] z-10 bg-white w-max" htmlFor="email">Email Id</label>
                            <input className="border-[1.7px] border-blue-500 rounded-md pl-12 pr-4 py-3 text-blue-500 focus:outline-none" type="email" name="email" id="email" />
                            <span className="z-10 mt-[-36px] ml-4 w-max text- border-black">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#0ea5e9"} fill={"none"}>
                                    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-xs ml-4 p-1 mb-[-12px] z-10 bg-white w-max" htmlFor="password">Password</label>
                            <input className="border-[1.7px] border-blue-500 rounded-md pl-12 pr-4 py-3 text-blue-500 focus:outline-none" type="password" name="password" id="password" />
                            <span className="z-10 mt-[-36px] ml-4 w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#0ea5e9"} fill={"none"}>
                                    <path d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 15.49V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 15.49V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 15.49V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex justify-end">
                            <Link className="text-xs text-gray-700 transition-all duration-500 hover:scale-105 hover:font-semibold" href={"/forgotPassword"}>Forgot your password?</Link>
                        </div>
                    </div>
                    <div className="mt-5 flex items-center justify-center">
                        <button className="bg-sky-500 text-white py-3 px-9 rounded-md text-sm font-medium hover:scale-110 hover:text-md duration-700">LOGIN</button>
                    </div>
                </form>
                <div className="flex flex-col items-center w-full mt-5">
                    <hr className="border-sky-500 w-full" />
                    <span className="bg-white px-2 mt-[-13px] font-mono">OR</span>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <span>Don&apos;t have an account?
                        <Link href="/register" className="font-semibold ml-1 relative group inline-block text-sky-500">
                            Register Now
                            <span className="absolute top-4 left-0 w-0 h-0.5 bg-sky-500 mt-2 transition-all duration-300 group-hover:w-full group-focus:w-0"></span>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    </div>
}