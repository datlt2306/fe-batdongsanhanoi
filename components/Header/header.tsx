'use client'

import React from 'react';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import Link from 'next/link';
import Image from 'next/image'
import { AiOutlineHome } from "react-icons/ai"
import { FaHotel } from "react-icons/fa6";

import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();
  return (
    <>
      <div className='container'>
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center">
              <Link href={"/"}>
                <img
                  src="https://staticfile.batdongsan.com.vn/images/logo/standard/red/logo.svg"
                  className="h-10 mr-"
                  alt="Flowbite Logo" />
              </Link>
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
              >
                <ul className="ml-10 flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link
                      href="/"
                      className={`link ${pathname === '/' ? 'active' : ''} block py-2 text-gray-900 pl-3 pr-4  rounded md:bg-transparent transition-all `}
                      aria-current="page"
                    >
                      Trang chủ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/du-an"
                      className={`link ${pathname === '/du-an' ? 'active' : ''} block py-2 text-gray-900 pl-3 pr-4  rounded md:bg-transparent transition-all`}
                    >
                      Dự án
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
            <div >
              <div className="flex md:order-2 items-center gap-1">

                <div className=' md:hidden block ' >
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6  h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>
                          <Link href="/">
                            <Image
                              src="https://staticfile.batdongsan.com.vn/images/logo/standard/red/logo.svg"
                              className="h-10 mr-"
                              alt="Flowbite Logo" width={100} height={100} />

                          </Link>
                        </SheetTitle>
                        <div className="flex h-screen flex-col justify-between border-e bg-white">
                          <div className="px-4 py-6">
                            <ul className="mt-6 text-left space-y-1 text-gray-900">
                              <li>
                                <Link
                                  href="/"
                                  className={`link ${pathname === '/' ? 'active' : ''}   flex  items-center gap-2  rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
                                  aria-current="page" >
                                  <AiOutlineHome />
                                  Trang chủ
                                </Link>
                              </li>
                              <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                  <summary
                                    className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                  >
                                    <Link href={"/du-an"}>
                                      <span className="text-sm font-medium  flex  items-center gap-2 ">
                                        <FaHotel />
                                        Dự án
                                      </span>
                                    </Link>
                                  </summary>
                                </details>
                              </li>
                            </ul>
                          </div>

                        </div>
                      </SheetHeader>
                      <SheetFooter>
                        <SheetClose asChild>
                          <Button type="submit">Save changes</Button>
                        </SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>


  );
}

export default Header;