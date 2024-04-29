
"use client"

import NavLinks from '@/app/ui/home/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import ThemeSwitcher from '../ThemeSwitcher';


import React, { useEffect, useState } from "react"
import { AiFillWallet, AiOutlineSwap } from "react-icons/ai"
import Button from "@/app/components/button"
import Image from "next/image"
import { usePolkadot } from "@/context"
import { truncateWalletAddress } from "@/utils"
import { FaSpinner } from "react-icons/fa6"
import { GrDashboard } from "react-icons/gr"
import Link from "next/link"

const SideNav = () => {

  const { isInitialized, handleConnect, selectedAccount } = usePolkadot()

  return (
  <div className='fixed z-50 flex items-center justify-between rounded-md w-full px-6 py-4 backdrop-blur-lg bg-primary-300 bg-opacity-50 dark:border-gray-700 shadow-md'>
    {/* Left */}
    <div className="z-50 flex flex-row h-full items-center px-14 dark:border-gray-700">
      <div className="relative aspect-square h-[100%] w-auto mr-3">
        <AcmeLogo />
      </div> 
      <div className="hidden md:flex md:mx-6 text-gray-300 dark:text-white">
        <NavLinks />
      </div>
    </div>

    {/* Right */}
    <div className="flex flex-row ml-auto">
      <div className="hidden md:flex flex-row h-full items-center gap-4">
        <ThemeSwitcher />
        <div className="container flex justify-between items-center gap-2 py-3">
          <Link href="/">
            <div>
              <Image
                alt="blockchain"
                src="/Animated1.gif"
                height={30}
                width={30}
              />
            </div>
          </Link>

          {isInitialized && selectedAccount ? (
            <div className="flex items-center">
              <Link href="/portfolio">
                <div className="text-base mx-3 font-medium flex items-center gap-x-2 cursor-pointer relative">
                  <GrDashboard /> Portfolio{" "}
                  <span className="inline-block bg-red-500 text-white text-xs font-semibold px-2 rounded-full uppercase">
                    New
                  </span>
                </div>
              </Link>

              <div className="relative flex items-center bg-white rounded-full shadow px-4 py-2">
                <button className="flex items-center cursor-pointer">
                  <AiFillWallet size={24} className="text-purple" />
                  <span className="ml-2 font-mono">
                    {truncateWalletAddress(selectedAccount.address)}
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-x-2 ">
              {!isInitialized && <FaSpinner className="spinner" />}
              <Button
                size="large"
                variant="primary"
                onClick={handleConnect}
                isDisabled={!isInitialized}
              >
              <AiFillWallet size={18} />
                Connect Wallet
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}

export default SideNav;
