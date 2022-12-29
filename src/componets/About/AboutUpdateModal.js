import React from 'react';

const AboutUpdateModal = () => {

    const handleUpdate = data =>{
        // event.preventDefault();
        // const form = event.target;

    }
    // const about = {
    //     const name: name,
    //     const email: email,
    //     const university: university,
    //     const address: address
    // }


    return (
        <div>
            {/* The button to open modal */}
            

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="about-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="about-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <section className="p-6 dark:text-gray-100">
                        <form  noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow-lg text-black dark:bg-gray-100 ng-untouched ng-pristine ng-valid">
                            <div className=' flex justify-between'>
                                <h2 className="w-full sm:text-3xl text-lg font-bold leading-tight text-black">Now you can Update!</h2>
                                
                            </div>

                            <div>
                                <label  for="name" className="block mb-1 ml-1">Name</label>
                                <input name='name' id="name" type="name" placeholder="Your Name" required="" className="block w-full border p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-500 " />
                            </div>
                            <div>
                                <label for="email" className="block mb-1 ml-1">Email</label>
                                <input name='email' id="email" type="email" placeholder="Your email" required="" className="block w-full border p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-500 " />
                            </div>
                            <div>
                                <label for="university" className="block mb-1 ml-1">University</label>
                                <input name='university' id="university" type="text" placeholder="Your university" required="" className="block w-full border p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-500 " />
                            </div>
                            <div>
                                <label for="address" className="block mb-1 ml-1">Address</label>
                                <input name='address' id="address" type="address" placeholder="Your address" required="" className="block w-full border p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-500 " />
                            </div>
                            
                            <div>
                                <button onClick={handleUpdate} type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900">Update</button>
                            </div>
                        </form>
                        
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutUpdateModal;