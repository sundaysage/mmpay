import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faUser, faCirclePlus,faArrowRightFromBracket,faGlobe,faWallet,faCreditCard,faLink,faClock,faQuestionCircle} from '@fortawesome/free-solid-svg-icons'

const Sidenav = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex'>
            <div className='hidden w-1/5 md:absolute  h-full md:flex md:flex-col  '>

                <div className='hidden w-full md:absolute h-full md:flex md:flex-col md:justify-around bg-white text-[#666666] '>
                    <div className='flex w-2/6 m-auto'>
                        <img src='logo.svg' alt='logo' />
                    </div>
                    <li>
                      <FontAwesomeIcon icon={faHouse}/>  <Link href='./dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link href='./deposit'>
                        <FontAwesomeIcon icon={faCirclePlus} />   Deposit
                        </Link>
                    </li>
                    <li>
                        
                        <Link href='./data'>
                        <i class="fa-solid fa-phone"></i> Airtime
                        </Link>
                    </li>
                    <li>
                        <Link href='./data'>
                        <FontAwesomeIcon icon={faGlobe} />  Buy Data
                        </Link>
                    </li>
                    <li>
                        <Link href='./cable'>
                        <i class="fas fa-tv"></i>  Buy CableTv
                        </Link>
                    </li>
                    <li><i class="fa-solid fa-lightbulb"></i>Buy Electricity</li>
                    <li><FontAwesomeIcon icon={faWallet} />Fund Bet Wallet</li>
                    <li><FontAwesomeIcon icon={faCreditCard} />Trade Giftcard</li>
                    <li><FontAwesomeIcon icon={faClock} />Transactions</li>
                    <li><FontAwesomeIcon icon={faLink} />Referral</li>
                    <li><FontAwesomeIcon icon={faQuestionCircle} />Help & Support</li>
                    <li><FontAwesomeIcon icon={faUser} />Account</li>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} />Logout</li>
                </div>
            </div>


            <nav className='md:w-4/5 md:absolute md:right-0 w-full'>
                <div className='flex item-center justify-around bg-white' >
                    <div className=' md:p-5 md:w-auto w-full flex justify-between'>
                        <div className='md:hidden'>
                            <p>Good day</p>
                            <div className='md:cursor-pointer '>Sage</div>
                        </div>
                        <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
                            =
                        </div>
                    </div>
                    <ul className='md:flex hidden items-center  md:justify-between w-full bg-white '>
                        <div className=' md:w-2/3 justify-around flex text-[#000000] text-sm font-bold'>
                            <Link href='./' to='/' className='py-7 px-3 inline-block'>
                                Home
                            </Link>
                            <Link href='./deposit' to='/' className='py-7 px-3 inline-block'>
                                Deposit
                            </Link>
                            <Link href='' to='/' className='py-7 px-3 inline-block'>
                                Withdraw
                            </Link>
                            <Link href='' to='/' className='py-7 px-3 inline-block'>
                                History
                            </Link>
                            <Link href='' to='/' className='py-7 px-3 inline-block'>
                                Developer
                            </Link>
                            <Link href='./deposit' to='/' className='py-7 px-3 inline-block'>
                                Deposit
                            </Link>
                            <Link href='./transactions' to='/' className='py-7 px-3 inline-block'>
                                Transactions
                            </Link>

                        </div>
                        <div className='text-3xl md:flex hidden justify-center w-1/5 '>
                            <Image src='' alt='n' className='md:cursor-pointer h-9' />
                            <p>
                                =
                            </p>
                        </div>
                    </ul>
                    {/* Moblie nav */}
                    <ul className={`
                md:hidden bg-gray-500 text-white absolute wfull h-full bottom-0  w-3/5 justify-center flex  flex-col
                duration-500 ${open ? "left-0 " : "left-[-100%]"}
                `} >
                        <div className='flex w-3/6 m-auto'>
                            <img src='logo.svg' alt='logo' />
                        </div>
                        <div className='flex flex-col h-4/5 justify-around m-auto '>
                            <Link href='./dashboard' to='/' className=' px-3 '>
                                Dashboard
                            </Link>
                            <Link href='./deposit' to='' className=' px-3 '>
                                Deposit
                            </Link>
                            <Link href='./airtime' to='/' className=' px-3 '>
                                Buy Airtime
                            </Link>
                            <Link href='./data' to='/' className=' px-3 '>
                                Buy Data
                            </Link>
                            <Link href='./cable' to='/' className=' px-3 '>
                                Buy CableTv
                            </Link>
                            <Link href='./electricity' to='/' className=' px-3 '>
                                Buy Electricity
                            </Link>
                            <Link href='./bet' to='/' className=' px-3 '>
                                Fund Bet Wallet
                            </Link>
                            <Link href='' to='/' className=' px-3 '>
                                Trade Giftcard
                            </Link>
                            <Link href='' to='/' className=' px-3 '>
                                Transactions
                            </Link>
                            <Link href='' to='/' className=' px-3 '>
                                Referral
                            </Link>
                            <Link href='' to='/' className=' px-3 '>
                                Help & Support
                            </Link>
                            <Link href='' to='/' className=' px-3 '>
                                Account
                            </Link>
                            <Link href='' to='/' className=' px-3 '>
                                Logout
                            </Link>
                        </div>
                    </ul>
                </div>
            </nav>

        </div >
    )
}

export default Sidenav