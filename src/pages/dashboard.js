import React from 'react'

const dashboard = () => {
  return (
    <div className=' md:w-4/5  md:absolute md:right-0 md:bottom-0 md:h-h-t  h-screen'>
      <div className='md:flex flex-wrap bg-blue-400 md:h-full h-full overflow-y-auto md:m-auto w-full justify-around  '>
        <section className='bg-purple-600 md:h-d md:w-2/5 flex flex-col md:justify-evenly mt-3 items-center h-full justify-around'>

          <div className=' h-1/5 rounded-3xl md:flex flex-col text-left justify-center p-5 bg-slate-300 hidden m-3'>
            <p className='flex  text-2xl'>Account Balance</p>
            <p className='text-5xl font-bold'>1000.00 NGN</p>
          </div>

          <div className={'controldiv'}>
            <div className='flex md:w-o w-2/5 bg-red-500'>buy Data</div>
            <div className='flex md:w-o w-2/5 bg-green-700'>buy airtime</div>
            <div className='flex md:w-o w-2/5 bg-blue-950'>buy CableTv</div>
            <div className='flex md:w-o w-2/5 bg-green-300'>buy Electricit</div>
            <div className='flex md:w-o w-2/5 bg-sky-400'>buy Bet wallet</div>
            <div className='flex md:w-o w-2/5 bg-amber-600'>buy Giftcard</div>
          </div>
          <div className=' h-h-r bg-red-500 flex flex-col w-w-t justify-around '>
            <p className='flex text-lg '>click to copy your Referral</p>
            < input className='flex w-w-i h-1/2' />
          </div>

        </section>
        <section className=' md:w-3/12 md:h-4/5 h-full w-full  my-8 p-5'>
          <card className='flex md:rounded-4xl bg-white h-full flex-col p-4'>
            <h5 className=' h-o mt-5'> Recent Transations </h5>
            <hr />
            <div className='flex flex-col justify-around  h-full'>

              <div className='flex justify-between '>
                <div>
                  <p>
                    Registration Bonus
                  </p>
                  <p>
                    Transation ID: WP4TR23PO
                  </p>
                </div>
                <div>
                  <p>
                    +10.00
                  </p>
                  <p>
                    9:00 am
                  </p>
                </div>
              </div>
              <div className='flex justify-between '>
                <div>
                  <p>
                    Registration Bonus
                  </p>
                  <p>
                    Transation ID: WP4TR23PO
                  </p>
                </div>
                <div>
                  <p>
                    +10.00
                  </p>
                  <p>
                    9:00 am
                  </p>
                </div>
              </div>
              <div className='flex justify-between '>
                <div>
                  <p>
                    Registration Bonus
                  </p>
                  <p>
                    Transation ID: WP4TR23PO
                  </p>
                </div>
                <div>
                  <p>
                    +10.00
                  </p>
                  <p>
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