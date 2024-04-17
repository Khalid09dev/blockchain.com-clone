
const Institutional = () => {
    return (
        <div className="bg-[#F0F2F7] rounded-3xl py-52 mx-20 my-20 pl-24">
            <div className="p-4 flex justify-center items-center h-[64px] w-[164px] gap-2 rounded-2xl bg-[#DFE3EB]">
                <img src="https://i.postimg.cc/zv82KNKt/institution.png" alt="#" />
                <p className="text-[#677185] text-[18px] font-medium">Institutional</p>
            </div>
            <p className="pt-5 pb-5 text-[#121D33] text-[40px] font-semibold leading-10">High-touch crypto <br /> solutions for institutions</p>
            <p className="text-[#121D33] text-base font-normal pb-5">Spot OTC, derivatives, structured products, and margin lending.</p>
            <button className="py-3 px-6 bg-[#677185] text-white text-[18px] font-medium rounded-lg">Become a client</button>
        </div>
    );
};

export default Institutional;