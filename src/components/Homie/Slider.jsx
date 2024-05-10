const Slider = ({ each }) => {
    // console.log(each);
    //  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]
    return (
        <div className="w-full h-full px-20 pb-10 flex flex-row-reverse items-center justify-center">
            <img className="h-2/3 max-w-md" src={each.bgURL} alt="bannerImages" />
            <div className="space-y-4 w-[50%]">
                <h2 className="font-montserrat text-[#151515cd] font-bold text-5xl">{each.title}</h2>
                <h4 className="font-nunito text-[#15151590]">{each.description}</h4>
                <div className="flex flex-row justify-start items-center gap-4">
                    <button className="btn btn-secondary">Discover More</button>
                    <button className="btn btn-outline">Latest Project</button>
                </div>
            </div>
        </div>
    );
};

export default Slider;