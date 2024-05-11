const Slider = ({ each }) => {
    // console.log(each);
    //  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]
    return (
        <div className="w-full h-full rounded-lg flex flex-row-reverse items-center justify-evenly">
            <div className="space-y-4 w-[40%]">
                <h2 className="font-montserrat text-[#151515cd] font-bold text-5xl">{each.title}</h2>
                <h4 className="font-nunito text-[#15151590]">{each.description}</h4>
                <div className="py-6 flex flex-row justify-center items-center gap-4">
                    <button className="btn btn-primary">Discover More</button>
                    <button className="btn btn-outline">Latest Allocation</button>
                </div>
            </div>
            <img className="h-[50%] w-[40%] object-cover rounded-2xl" src={each.url} alt="bannerImages" />
        </div>
    );
};

export default Slider;