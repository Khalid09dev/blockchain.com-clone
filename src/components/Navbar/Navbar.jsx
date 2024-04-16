
const Navbar = () => {
    return (
        <div className="flex items-center justify-evenly bg-[#121D33] pt-6 pb-7">
            <img src="https://i.postimg.cc/ncy7jpLk/logo.png" alt="logo" />
            <ul className="flex items-center text-[#CCD2DE] font-medium text-base gap-10">
                <li><a href="#">Wallet</a></li>
                <li><a href="#">Exchange</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Pay</a></li>
                <li><a href="#">Institutional</a></li>
            </ul>
            <div className="flex items-center gap-5">
                <img className="bg-[#FFFFFF1A] px-3 py-3 rounded-full" src="https://i.postimg.cc/d34zD5vM/search-icon.png" alt="#" />
                <button className="text-white text-[14px] font-medium py-3 px-4 border-[2px] border-white rounded-lg">Log In</button>
                <button className="text-[#121D33] font-medium text-[14px] py-3 px-4 bg-white rounded-lg">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;