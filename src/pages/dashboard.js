import React from 'react'
import Link from 'next/link'

const dashboard = () => {
  return (
    <div className=' md:w-4/5  md:absolute md:right-0 md:bottom-0 md:h-h-t' id={'dash'}>
      <div className='md:flex flex-wrap  md:h-full h-full overflow-y-auto md:m-auto w-full justify-around  '>
        <section className=' md:w-2/5 md:h-d flex flex-col md:justify-evenly md:mt-5 items-center h-full  justify-around'>

          <div className=' h-1/5 rounded-3xl md:flex flex-col text-left justify-center p-5 bg-[#E1E1E9] hidden m-3'>
            <p className='flex  text-2xl'>Account Balance</p>
            <p className='font-bold text-4xl'>1000.00 NGN</p>
          </div>

          <div className={'controldiv'}>
            <Link href='./data' className='flex md:w-o w-2/5 bg-[#5C0601]' id={'controler'}>
              <div>
                buy Data
              </div>
            </Link>
            <Link href='./airtime' className='flex md:w-o w-2/5 bg-[#008080]' id={'controler'}>
              <div>
                buy airtime
              </div>
            </Link>
            <Link href='./Cable' className='flex md:w-o w-2/5 bg-[#272A6E]' id={'controler'}>
              <div>
                buy CableTv
              </div>
            </Link>
            <Link href='./electricity' className='flex md:w-o w-2/5 bg-[#41C09C]' id={'controler'}>
              <div>
                buy Electricity
              </div>
            </Link>
            <Link href='./bet'  className='flex md:w-o w-2/5 bg-[#0171DF]' id={'controler'}>
              <div>
                buy Bet wallet
              </div>
            </Link>
            <Link href='./giftcard' className='flex md:w-o w-2/5 bg-[#FFA500]' id={'controler'}>
              <div >
                buy Giftcard
              </div>
            </Link>
          </div>
          <div className='w-w-t h-1/6 md:mt-1 mt-16'>
            <p className=' '>click to copy your Referral</p>
            < input className=' bg-[#E1E1E9] w-4/5' />
          </div>

        </section>
        <section className=' md:w-3/12 md:h-4/5  w-full h-5/6 md:my-8 my-6 '>
          <card className='flex  md:rounded-4xl bg-[#FFFFFF] h-full flex-col p-4'>
            <h5 className=' h-o mt-5'> Recent Transations </h5>
            <hr />
            <div className='flex flex-col md:justify-around md:h-4/5  h-full'>
              <div className='flex justify-between '>
                <div>
                  <p>
                    Registration Bonus
                  </p>
                  <p class='block text-xs font-light'>
                    Transation ID: WP4TR23PO
                  </p>
                </div>
                <div>
                  <p>
                    +10.00
                  </p>
                  <p class='block text-xs font-light'>
                    9:00 am
                  </p>
                </div>
              </div>
              <div className='flex justify-between '>
                <div>
                  <p>
                    Registration Bonus
                  </p>
                  <p class='block text-xs font-light'>
                    Transation ID: WP4TR23PO
                  </p>
                </div>
                <div>
                  <p>
                    +10.00
                  </p>
                  <p class='block text-xs font-light'>
                    9:00 am
                  </p>
                </div>
              </div>
              <div className='flex justify-between '>
                <div>
                  <p>
                    Registration Bonus
                  </p>
                  <p class='block text-xs font-light'>
                    Transation ID: WP4TR23PO
                  </p>
                </div>
                <div>
                  <p>
                    +10.00
                  </p>
                  <p class='block text-xs font-light'>
                    9:00 am
                  </p>
                </div>
              </div>
              <div className='flex justify-between '>
                <div>
                  <p>
                    Registration Bonus
                  </p>
                  <p class='block text-xs font-light'>
                    Transation ID: WP4TR23PO
                  </p>
                </div>
                <div>
                  <p>
                    +10.00
                  </p>
                  <p class='block text-xs font-light'>
                    9:00 am
                  </p>
                </div>
              </div>
              <div className='flex justify-between '>
                <div>
                  <p>
                    Registration Bonus
                  </p>
                  <p class='block text-xs font-light'>
                    Transation ID: WP4TR23PO
                  </p>
                </div>
                <div>
                  <p>
                    +10.00
                  </p>
                  <p class='block text-xs font-light'>
                    9:00 am
                  </p>
                </div>
              </div>
              <div className='flex justify-between '>
                <div>
                  <p>
                    Registration Bonus
                  </p>
                  <p class='block text-xs font-light'>
                    Transation ID: WP4TR23PO
                  </p>
                </div>
                <div>
                  <p>
                    +10.00
                  </p>
                  <p class='block text-xs font-light'>
                    9:00 am
                  </p>
                </div>
              </div>
  
            </div>
          </card>
        </section>
      </div>
      <div className=''>



      </div>
    </div>

  )
}

export default dashboard