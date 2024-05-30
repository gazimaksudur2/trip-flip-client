import { useEffect, useState } from "react";
import FAQ from "./FAQ";

const Faqs = () => {
    const [faqInfo, setFaqInfo] = useState([]);
    const [tracker, setTracker] = useState();

    useEffect(()=>{
        fetch('faqInfo.json')
        .then(res=>res.json())
        .then(data=>{
            setFaqInfo(data);
        })
    },[]);
    // console.log(faqInfo);

    return (
        <div>
            <section className="w-[96%] md:w-[90%] mx-auto my-3">
                <div className="container px-2 md:px-6 py-4 md:py-12 mx-auto">
                    <h1 className="text-center text-2xl font-semibold text-gray-800 lg:text-3xl">Frequently asked questions</h1>

                    <div className="mt-8 space-y-4 md:space-y-8 lg:mt-12">
                        {
                            faqInfo && faqInfo.map((faq, idx)=>(<FAQ key={idx} tracker={tracker} setTracker={setTracker} faq={faq}/>))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faqs;