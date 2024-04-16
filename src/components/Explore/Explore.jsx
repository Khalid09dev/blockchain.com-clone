
const Explore = () => {
    return (
        <div className="flex justify-center items-center mx-20 py-20 rounded-3xl bg-[#FFF2E580]">
            <div>
                <div className="flex justify-center w-[138px] p-4 h-[64px] gap-2 rounded-2xl items-center bg-[#FFF2E5]">
                    <img src="../../../public/explore.png" alt="#" />
                    <p className="text-[#F28B24] text-[18px] font-medium ">Explore</p>
                </div>
                <h1 className="text-[#F28B24] text-[40px] font-semibold leading-10 py-5 pb-7">Blockchain data is in our <br /> DNA</h1>
                <p className="text-[#F28B24] text-base bg-[#FFF2E5] font-normal py-4 pl-5 w-[500px] mb-4 rounded-xl border-[1px] border-[#FAE4CD]">Explore the top blockchains <br /> <span>Confirm transactions, analyze the market, or
                simply learn more about crypto.</span></p>
                <p className="text-[#F28B24] text-base font-normal py-4 pl-5 bg-[#FFF8F2] border-[1px] border-[#FAE4CD] rounded-xl bg-[#FFF2E5]-xl mb-4 ">Powerful Blockchain Data API</p>
                <p className="text-[#F28B24] text-base font-normal py-4 pl-5 bg-[#FFF8F2] border-[1px] border-[#FAE4CD] rounded-xl bg-[#FFF2E5]-xl mb-4 ">Industry standard charts</p>
                <p className="text-[#F28B24] text-base font-normal py-4 pl-5 bg-[#FFF8F2] border-[1px] border-[#FAE4CD] rounded-xl mb-10">Real-time crypto prices</p>
                <button className="text-white text-[18px] font-medium py-3 px-6 bg-[#F28B24] rounded-lg">Explore now</button>
            </div>
            <img className="w-1/2 h-1/2" src="../../../public/explore-blockchain.png" alt="#" />
        </div>
    );
};

export default Explore;