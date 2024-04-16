import CryptoPrice from "../CryptoPrice/CryptoPrice";

const Banner = () => {
    return (
        <div className="bg-[#121D33] pt-40 ">
            <h1 className="text-white text-[48px] font-semibold text-center">Be earyly to the future of finance</h1>
            <p className="text-white text-[24px] font-medium flex justify-center pr-5 py-5 text-left ">Buy Bitcoin, Ethereum, and other leading cryptocurrencies on a <br />platform trusted by millions.</p>
            <div className="flex justify-center pr-64 gap-4">
                <input className="py-3 pl-4 pr-32 bg-[#FFFFFF1A] text-white text-base font-normal rounded-lg placeholder:text-white" type="email" placeholder="Your email address"/>
                <button className="py-3 px-6 bg-[#ECF5FE] rounded-lg text-[#0C6CF2] text--[14px] font-medium">Sign Up</button>
            </div>

            <CryptoPrice></CryptoPrice>
        </div>
    );
};

export default Banner;