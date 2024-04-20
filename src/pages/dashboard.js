import React from 'react'

const dashboard = () => {
  return (
    <div className='bg-yellow-500 md:w-4/5  md:absolute md:right-0 md:bottom-0 md:h-h-t  h-screen'>
      <div className='w-full flex flex-wrap bg-blue-400 md:h-4/5 justify-around h-full overflow-y-auto'>
        <section>

          <div>
            <p>Account Balance</p>
            <p>1000.00 NGN</p>
          </div>

          <div>
            <div>buy airtime</div>
            <div>buy Data</div>
            <div>buy CableTv</div>
            <div>buy Electricit</div>
            <div>buy Bet wallet</div>
            <div>buy Giftcard</div>
          </div>
          <div>
            <p>click to cop your Referral</p>
            < input />
          </div>

        </section>
        <section>
          <card>
            <h5> Recent Transations </h5> <br />
            <hr />
            <div>
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


          </card>
        </section>
      </div>
      <div className=''>



      </div>
    </div>

  )
}

export default dashboard