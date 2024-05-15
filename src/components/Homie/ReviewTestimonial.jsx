import { Rating } from "@mui/material";

const ReviewTestimonial = ({ each }) => {
    return (
        <section className="min-h-full flex flex-col justify-center items-center">
            <div className="px-6 max-w-6xl mx-auto">
                <div className="w-full ">
                    <div className="py-3 flex flex-row-reverse items-center justify-center gap-4">
                        <h2 className="text-xl font-bold font-jakarta mb-2 text-[#151515cd]">{each.roomTitle}</h2>
                        <img
                            src={each.roomImg}
                            className="w-16 h-12 rounded-lg shadow-lg"
                            alt="Avatar" />
                    </div>
                    <p className="flex items-center justify-center text-center text-gray-500 lg:mx-8">
                        {each.review}
                    </p>
                    <div className="flex flex-col items-center justify-center mt-8">
                        <Rating name="half-rating-read" value={each.rating} precision={0.5} readOnly />
                        <img className="object-cover rounded-full w-14 h-14" src={each.clientPhoto} alt="" />

                        <div className="mt-4 text-center">
                            <h1 className="font-semibold text-gray-800 ">{each.client}</h1>
                            <span className="text-sm text-gray-500">{each?.clientEmail ? each.clientEmail : "Email didn't Provided!!"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewTestimonial;