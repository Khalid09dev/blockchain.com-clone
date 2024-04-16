
const Exchange = () => {
    return (
        <div className="flex gap-36 justify-center bg-[#ECF5FE80] py-20 mx-20 rounded-3xl mt-14">
            <img draggable={false} className="select-none " src="../../../public/currency-exchange.png" alt="#" />
            <div>
                <div className="py-4 flex justify-center items-center gap-3 bg-[#ECF5FE] w-[158px] h-[64px] rounded-2xl">
                    <img src="../../../public/exchange.png" alt="#" />
                    <p className="text-[#3D89F5] text-[18px] font-medium">Exchange</p>
                </div>
                <p className="text-[#0C6CF2] text-[40px] font-semibold pt-5 leading-10">Lightning-fast crypto <br /> trading</p>
                <p className="bg-[#ECF5FE] border-[1px] border-[#D8EBFD] py-5 pl-4 rounded-xl pr-10 mb-4 mt-7">Trade in 3 fiat currencies <span>The Exchange supports USD, EUR, and GBP.</span></p>
                <p className="bg-[#F5FAFE] border-[1px] border-[#D8EBFD] py-5 pl-4 rounded-xl mb-4">A matching engine that can keep up with you</p>
                <p className="bg-[#F5FAFE] border-[1px] border-[#D8EBFD] py-5 pl-4 rounded-xl mb-4">24/7 live chat support</p>
                <p className="bg-[#F5FAFE] border-[1px] border-[#D8EBFD] py-5 pl-4 rounded-xl mb-10">Margin Trading</p>
                <button className="text-white text-[18px] font-medium py-3 px-6 rounded-lg bg-[#0C6CF2]">Trade Now</button>
            </div>
        </div>
    );
};

export default Exchange;