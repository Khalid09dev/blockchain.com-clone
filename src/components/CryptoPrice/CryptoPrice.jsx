
const CryptoPrice = () => {
    return (
        <div className="flex justify-center pt-20 gap-6 pb-10">
            <div className="bg-white p-5 rounded-lg">
                <div className="flex gap-12 pb-3 items-center">
                    <img src="https://i.postimg.cc/J0bZQWrg/bitcoin.png" alt="#" />
                    <div className="flex items-center text-[14px] gap-2  font-medium">
                        <p className="text-[#5322E5] px-2 bg-[#EFECFE] rounded">Buy</p>
                        <p className="text-[#00994C] px-2 bg-[#E6FAEC] rounded">Trade</p>
                    </div>
                </div>
                <div>
                    <p className="text-[#121D33] text-base font-medium">Bitcoin <span className="text-[#677185]">BTC</span></p>
                    <p className="text-[#121D33] text-base font-medium">$62,734.14 <span className="text-[#FF443A]">5.70%</span></p>
                </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg">
                <div className="flex gap-12 pb-3 items-center">
                    <img src="https://i.postimg.cc/kGtf3ZnF/etherium.png" alt="#" />
                    <div className="flex items-center text-[14px] gap-2  font-medium">
                        <p className="text-[#5322E5] px-2 bg-[#EFECFE] rounded">Buy</p>
                        <p className="text-[#00994C] px-2 bg-[#E6FAEC] rounded">Trade</p>
                    </div>
                </div>
                <div>
                    <p className="text-[#121D33] text-base font-medium">Ethereum<span className="text-[#677185] pl-1">ETH</span></p>
                    <p className="text-[#121D33] text-base font-medium">$62,734.14 <span className="text-[#FF443A]">5.70%</span></p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-lg">
                <div className="flex gap-12 pb-3 items-center">
                    <img src="https://i.postimg.cc/DwtGRZSD/steller.png" alt="#" />
                    <div className="flex items-center text-[14px] gap-2  font-medium">
                        <p className="text-[#5322E5] px-2 bg-[#EFECFE] rounded">Buy</p>
                        <p className="text-[#00994C] px-2 bg-[#E6FAEC] rounded">Trade</p>
                    </div>
                </div>
                <div>
                    <p className="text-[#121D33] text-base font-medium">Steller<span className="text-[#677185] pl-1">XLM</span></p>
                    <p className="text-[#121D33] text-base font-medium">$62,734.14 <span className="text-[#FF443A]">5.70%</span></p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-lg">
                <div className="flex gap-12 pb-3 items-center">
                    <img src="https://i.postimg.cc/VsB3601q/solana.png" alt="#" />
                    <div className="flex items-center text-[14px] gap-2  font-medium">
                        <p className="text-[#5322E5] px-2 bg-[#EFECFE] rounded">Buy</p>
                        <p className="text-[#00994C] px-2 bg-[#E6FAEC] rounded">Trade</p>
                    </div>
                </div>
                <div>
                    <p className="text-[#121D33] text-base font-medium">Solana<span className="text-[#677185] pl-1">SOL</span></p>
                    <p className="text-[#121D33] text-base font-medium">$62,734.14 <span className="text-[#FF443A]">5.70%</span></p>
                </div>
            </div>
        </div>
    );
};

export default CryptoPrice;