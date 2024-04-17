
const Wallet = () => {
    return (
        <div>
            <div className="flex mx-20 mt-32 justify-center gap-40 bg-[#EFECFE80] py-16 pr-16 pl-36 rounded-3xl">
            <div>
                <div className="flex justify-center p-4 items-center w-[127px] h-[64px] rounded-2xl bg-[#EFECFE] mb-5">
                    <img src="https://i.postimg.cc/FRHXX0ns/wallet.png" alt="#" />
                    <p className="text-[#7349F2] text-[18px] font-medium">Wallet</p>
                </div>
                <h1 className="text-[#7349F2] text-[40px] font-semibold leading-10">The only crypto wallet <br /> you’ll ever need</h1>
                <p className="bg-[#EFECFE] text-base font-medium text-[#7349F2] py-3 pl-4 mb-4 border-[1px] border-[#DED8FD] rounded-xl mt-10">Buy, sell, and swap with ease <br />
                <span>Use a card or bank account to buy BTC, ETH, stablecoins, and other assets.</span></p>
                <p className="text-[#7349F2] text-base font-medium py-4 pl-5 pr-64 bg-[#F7F5FF] border-[1px] border-[#DED8FD] rounded-xl mb-4">Earn rewards on your crypto</p>
                <p className="text-[#7349F2] text-base font-medium py-4 pl-5 pr-64 bg-[#F7F5FF] border-[1px] border-[#DED8FD] rounded-xl mb-4">Self-custody your crypto</p>
                <p className="text-[#7349F2] text-base font-medium py-4 pl-5 pr-64 bg-[#F7F5FF] border-[1px] border-[#DED8FD] rounded-xl mb-56">Connect to DeFi</p>
                <button className="text-white text-[18px] font-medium py-3 px-6 bg-[#7349F2] rounded-lg">Get started</button>    
            </div>
            <img src="https://i.postimg.cc/vZ39Xs9g/app.png" alt="#" />
            </div>
        </div>
    );
};

export default Wallet;