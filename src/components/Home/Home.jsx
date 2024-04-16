import Banner from "../Banner/Banner";
import Exchange from "../Exchange/Exchange";
import Explore from "../Explore/Explore";
import Institutional from "../Institutional/Institutional";
import Wallet from "../Wallet/Wallet";

const Home = () => {
    return (
        <div className="bg-gray-100">
            <Banner></Banner>
            <Wallet></Wallet>
            <Exchange></Exchange>
            <Institutional></Institutional>
            <Explore></Explore>
        </div>
    );
};

export default Home;