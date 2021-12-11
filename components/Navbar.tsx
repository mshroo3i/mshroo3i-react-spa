/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import Link from 'next/link';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Mshroo3iLogoFull } from './svg/Mshroo3iLogoFull';

interface LinkData {
  href: string
  text: string
}

const navItems: LinkData[] = [
  // {
  //   href: '#',
  //   text: 'Dashboard'
  // },
  // {
  //   href: '#',
  //   text: 'Team'
  // },
  // {
  //   href: '#',
  //   text: 'Projects'
  // },
  // {
  //   href: '#',
  //   text: 'Calendar'
  // }
]

const navData: {navItems: LinkData[], login: LinkData, logout: LinkData} = {
  navItems,
  login: {
    text: "تسجيل الدخول",
    href: "#"
  },
  logout: {
    text: "تسجيل الخروج",
    href: "#"
  },
}

const NavItem = (props: { href: string, children: any }) => {
  return <Link href={props.href}>
    <a
      className="sm:mx-4 border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
    >
      {props.children}
    </a>
  </Link>
}

const NavItemMobile = (props: { href: string, children: any }) => {
  return (
    <Link href={props.href}>
    <a className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block px-3 py-2 border-l-4 text-base font-medium">
      {props.children}
    </a>
  </Link>
  )
}

export function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow z-30">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link href="/">
                <a className="flex-shrink-0 flex items-center">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  /> */}
                  <Mshroo3iLogoFull className=" h-auto w-40 md:w-56" />
                </a>
                </Link>
                <div className="hidden sm:mx-6 sm:flex">
                  {navData.navItems.map(item => (
                    <NavItem href={item.href} key={item.text}>{item.text}</NavItem>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <NavItem href={navData.login.href}>{navData.login.text}</NavItem>
                {/* <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <Menu as="div" className="mx-3 relative">
                  <div>
                    <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {navData.navItems.map(item => (
                <Disclosure.Button
                  as={Fragment}
                  key={item.text}
                >
                  <NavItemMobile href={item.href}>
                    {item.text}
                  </NavItemMobile>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
