const FAQ = ({faq}) => {
    return (
        <div>
            <div className="p-8 bg-gray-100 rounded-lg">
                <button className="flex items-center justify-between w-full">
                    <h1 className="font-semibold text-gray-700">{faq.question}</h1>

                    <span className="text-gray-400 bg-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                        </svg>
                    </span>
                </button>

                <p className="mt-6 text-sm text-gray-500">
                    {faq.answer}
                </p>
            </div>
            {/* <div className="p-8 bg-gray-100 rounded-lg">
                <button className="flex items-center justify-between w-full">
                    <h1 className="font-semibold text-gray-700">Is the cost of the appoinment covered by private health insurance?</h1>

                    <span className="text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
                </button>

                <p className="mt-6 text-sm text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
            </div> */}
        </div>
    );
};

export default FAQ;