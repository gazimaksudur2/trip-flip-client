const FAQ = ({ faq, tracker, setTracker }) => {
    const showAble = (tracker===faq.answer.slice(0,20));
    // console.log(showAble);
    return (
        <div>
            <div className="md:p-8 p-3 bg-gray-100 rounded-lg">
                <button className="flex items-center justify-between w-full">
                    <h1 className="font-semibold text-gray-700">{faq.question}</h1>

                    <div>
                        <span className="text-gray-400">
                            <svg onClick={()=>setTracker('')} xmlns="http://www.w3.org/2000/svg" className={showAble?"w-6 h-6 bg-gray-300 rounded-full":'hidden'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                            </svg>
                        </span>
                        <span className="text-white rounded-full">
                            <svg onClick={()=>setTracker(faq.answer.slice(0,20))} xmlns="http://www.w3.org/2000/svg" className={showAble?'hidden':"w-6 h-6 bg-blue-500 rounded-full"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </span>
                    </div>
                </button>

                <p className={showAble?"mt-6 text-sm text-gray-500":'hidden'}>
                    {faq.answer}
                </p>
            </div>
            {/* <div className="p-8 bg-gray-100 rounded-lg">
                <button className="flex items-center justify-between w-full">
                    <h1 className="font-semibold text-gray-700">Is the cost of the appoinment covered by private health insurance?</h1>


                </button>

                <p className="mt-6 text-sm text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
            </div> */}
        </div>
    );
};

export default FAQ;