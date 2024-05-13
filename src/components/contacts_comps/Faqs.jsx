import { useEffect, useState } from "react";
import FAQ from "./FAQ";

const Faqs = () => {
    const [faqInfo, setFaqInfo] = useState([]);

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
            <section className="w-[90%] mx-auto my-3">
                <div className="container px-6 py-12 mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl">Frequently asked questions</h1>

                    <div className="mt-8 space-y-8 lg:mt-12">
                        {
                            faqInfo && faqInfo.map((faq, idx)=>(<FAQ key={idx} faq={faq}/>))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faqs;