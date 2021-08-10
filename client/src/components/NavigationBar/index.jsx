/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import {
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline"
// eslint-disable-next-line import/extensions
import BabyBottle from "../../assets/img/baby-bottle.png"

export default function NavigationBar() {
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto">
            <div className="px-4 flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <img
                  alt="Bottle"
                  className="h-10"
                  src={BabyBottle}
                />
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon aria-hidden="true" className="h-6 w-6" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900" href="#">
                  Track
                </a>
                <a className="text-base font-medium text-gray-500 hover:text-gray-900" href="#">
                  History
                </a>
              </Popover.Group>

              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900" href="#">
                  Account
                </a>
                <a
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-400"
                  href="#"
                >
                  Log Out
                </a>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            show={open}
          >
            <Popover.Panel
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              focus
              static
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        alt="Bottle"
                        className="h-10"
                        src={BabyBottle}
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon aria-hidden="true" className="h-6 w-6" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                      Track
                    </a>

                    <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                      History
                    </a>
                  </div>
                  <div>
                    <a
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-400"
                      href="#"
                    >
                      Log Out
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      View{" "}
                      <a className="text-blue-400 hover:text-blue-600" href="#">
                        Account
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
