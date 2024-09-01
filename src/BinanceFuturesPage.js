import React from 'react';

const BinanceFuturesPage = () => {
  return (
    <div className="h-screen flex justify-start items-start px-12 py-4">
      <div className=" text-white w-80">
        <div className='px-4'>
            <div className='flex flex-row binance-plex text-xl font-semibold'>
                <span className='border-r pr-4' style={{color:"#28d18c"}}>Long</span>
                <span className='border-r pr-4 pl-4'>20x</span>
                <span className=' pr-4 pl-4'>AlUSDT</span>
                <span className='pl-4'>Perpetual</span>
            </div>

            <div className='binance-plex' style={{color:"#28d18c"}}>
                <h1 className='text-7xl font-bold py-4 mb-4'>
                    + 76.31%
                </h1>
            </div>
        </div>
        <div className='flex grid gap-y-4 gap-x-4 grid-cols-2 binance-plex text-3xl'>
            <span style={{color:"#828f98"}}>Entry Price</span>
            <span className='px-4' style={{color:"#cfaf30"}}>0.320400</span>
            <span style={{color:"#828f98"}}>Last Price</span>
            <span className='px-4' style={{color:"#cfaf30"}}>0.332625</span>
        </div>

        <div className='flex flex-row mt-4'>
            <div className='p-2 py-4'>
                <img src="./qrcode.png" alt="Logo" className="h-20" />
            </div>
            <div className='flex flex-col binance-plex gap-y-2 pl-2'>
                <span style={{color:"#828f98"}}>Referral Code</span>
                <span className='text-4xl font-bold'>9229822326</span>
                <span style={{color:"#cfaf30"}}>Get the Binance App</span>
            </div>
        </div>



        

      </div>
    </div>
  );
}

export default BinanceFuturesPage;
