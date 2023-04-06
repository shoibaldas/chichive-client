import React, { useState } from "react";
import Swal from "sweetalert2";
import { AiOutlineMail } from "react-icons/ai";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email address',
      });
    } else {
      setEmail('');
      Swal.fire({
        icon: 'success',
        title: 'Thank you!',
        text: 'You have successfully subscribed to our newsletter',
      });
    }
  };

  return (
    <section className="py-20 px-3 md:px-3 lg:px-3 xl:px-0">
      <div className="max-w-6xl mx-auto rounded-md overflow-hidden shadow-md ">
        <div className="bg-gray-800 px-5 py-8 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex w-full lg:w-8/12 mb-10 md:mb-0">
            <div>
              <AiOutlineMail className="text-3xl text-purple-700 me-2"></AiOutlineMail>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-200">Stay Tuned</h2>
              <div>
                <p className="w-full md:w-8/12 text-gray-300">
                  Stay in the loop with our latest fashion trends, exclusive
                  sales, and insider tips. Subscribe to our newsletter for all
                  the exciting updates straight to your inbox. Sign up now and
                  stay tuned!
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-6/12">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative ">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full py-2 pl-3 pr-10 text-gray-900 placeholder-gray-500 border-2 border-gray-300 rounded-full focus:outline-none focus:border-purple-700"
                />
                <button
                  type="submit"
                  onClick={handleSubscribe}
                  className="absolute top-0 right-0 px-4 py-3 text-sm font-medium text-gray-200 bg-purple-700 rounded-full hover:bg-purple-800 focus:outline-none focus:bg-purple-800"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
