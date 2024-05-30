import { useRef } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const FeedBack = ({ setShowModal }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // console.log('I am in send email');

        // Swal.fire({
        //     position: "center",
        //     icon: "success",
        //     title: "Your FeedBack Sent Successfully!!",
        //     showConfirmButton: false,
        //     timer: 1500
        // });
        
        emailjs
        .sendForm('service_jj4ls1f', 'template_zoknedi', form.current, {
            publicKey: 'Rf-wl7heCegLW0Ykq',
            })
            .then(
                () => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your FeedBack Sent Successfully!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    console.log('SUCCESS!');
                },
                (error) => {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Your FeedBack isn't sent!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    console.log('FAILED...', error.text);
                },
            );
        setShowModal(false);
        // e.reset();
    };

    return (
        <>
            <div>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm"
                >
                    <div className="relative w-[70%] my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    Submit Your FeedBack Here
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            {/* <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input type="text" name="user_name" />
                                <label>Email</label>
                                <input type="email" name="user_email" />
                                <label>Message</label>
                                <textarea name="message" />
                                <input type="submit" value="Send" />
                            </form> */}
                            <div className='min-h-[50vh] px-[5%] pb-[4%]'>
                                <form onSubmit={sendEmail} className='flex flex-col justify-center items-start gap-2'>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Your Name</span>
                                        </div>
                                        <input type="text" placeholder="Type here" name="user_name" className="input input-bordered w-full" />
                                    </label>

                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Your Email</span>
                                        </div>
                                        <input type="text" placeholder="Type here" name="user_email" className="input input-bordered w-full" />
                                    </label>
                                    <label className="form-control w-full pb-4">
                                        <div className="label">
                                            <span className="label-text">Your Feedback</span>
                                        </div>
                                        <textarea placeholder="Place Your FeedBack here" name="message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                                    </label>
                                    <input type="submit" value={'Submit feedback'} className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
        </>
    );
};

export default FeedBack;