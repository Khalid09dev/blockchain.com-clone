
const Footer = () => {
    return (
        <div>
            <div className="flex justify-center gap-5 bg-[#353F52] py-8 mt-10 items-center">
                <h3 className="text-[40px] font-semibold text-white">Let us take you from zero to crypto</h3>
                <button className="text-[#0C6CF2] text-[14px] font-medium py-3 px-3 bg-white rounded-lg">Get started</button>
            </div>


            <div className="flex justify-center mt-20 gap-36">
                <ul className="text-[#121D33] text-base font-medium">
                    <img src="../../../public/blockchain-icon.png" alt="#" />
                    <div className="flex mt-5 gap-3"><img src="https://i.postimg.cc/3rjxTZRY/twitter.png" alt="#" /><a href="#">Twitter</a></div>
                    <div className="flex gap-3 pt-2"><img src="https://i.postimg.cc/t4n0XX5W/instagram.png" alt="#" /><a href="#">Instagram</a></div>
                    <div className="flex gap-3 pt-2"><img src="https://i.postimg.cc/Y0CVTk04/medium.png" alt="#" /><a href="#">Medium</a></div>
                </ul>

                <div className="flex gap-20">
                <ul className="text-[#121D33] text-base font-medium">
                    <li className="font-semibold text-[20px] pb-5"><a href="#">Products</a></li>
                    <li><a href="#">Wallet</a></li>
                    <li className="pt-2"><a href="#">Exchange</a></li>
                    <li className="pt-2"><a href="#">Explorer</a></li>
                    <li className="pt-2"><a href="#">Pay</a></li>
                    <li className="pt-2"><a href="#">Institutional</a></li>
                    <li className="pt-2"><a href="#">Earn</a></li>
                    <li className="pt-2"><a href="#">Card</a></li>
                    <li className="pt-2"><a href="#">Learn</a></li>
                    <li className="pt-2"><a href="#">Prices</a></li>
                    <li className="pt-2"><a href="#">Charts</a></li>
                    <li className="pt-2"><a href="#">NFT</a></li>
                </ul>

                <ul className="text-[#121D33] text-base font-medium">
                    <li className="font-semibold text-[20px] pb-5"><a href="#">Resources</a></li>
                    <li className="pt-2"><a href="#">APIs</a></li>
                    <li className="pt-2"><a href="#">Status</a></li>
                    <li className="pt-2"><a href="#">Open Source</a></li>
                    <li className="pt-2"><a href="#">Research</a></li>
                    <li className="pt-2"><a href="#">Legal and Privacy</a></li>
                    <li className="pt-2"><a href="#">Wallet Support</a></li>
                    <li className="pt-2"><a href="#">Exchange Support</a></li>
                    <li className="pt-2"><a href="#">Blog</a></li>
                    <li className="pt-2"><a href="#">Security</a></li>
                    <li className="pt-2"><a href="#">Podcast</a></li>
                </ul>

                <ul className="text-[#121D33] text-base font-medium">
                    <li className="font-semibold text-[20px] pb-5"><a href="#">Company</a></li>
                    <li className="pt-2"><a href="#">About</a></li>
                    <li className="pt-2"><a href="#">Carrers <span>hiring</span></a></li>
                    <li className="pt-2"><a href="#">Press Center</a></li>
                    <li className="pt-2"><a href="#">Prime</a></li>
                    <li className="pt-2"><a href="#">Ventures</a></li>
                </ul>
                </div>
            </div>

            <div className="flex justify-center gap-7 mt-10 items-center">
                <div className="text-[#121D33] text-base font-medium">
                    <div className="flex gap-2">
                        <img src="https://i.postimg.cc/TwwJ6PjX/internet.png" alt="#" />
                        <p>English</p>
                    </div>
                    <div className="flex gap-2 pt-3 pb-3">
                        <img src="https://i.postimg.cc/0j7ftBd6/copyright.png" alt="#" />
                        <p>Blockchain.com</p>
                    </div>
                    <span className="text-[#000000] text-base font-normal">Blockchain.com, Inc. NMLS ID# 2024031 |</span><span className="text-[#0C6CF2] pl-1 text-base font-medium">NMLS Consumer Access</span>
                </div>

                <div className="flex items-center gap-3 mt-11">
                    <img src="https://i.postimg.cc/T1cb5MJc/playstore.png" alt="#" />
                    <img src="https://i.postimg.cc/xdbbybP8/appstore.png" alt="#" />
                </div>
            </div>
        </div>
    );
};

export default Footer;