import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="sm:h-[50vh] h-[60vh]  w-screen bg-blue-600 text-white flex flex-col items-center justify-center  "
    >
      <section className="flex flex-col gap-5">
        <p className="sm:text-[20px] font-[600] text-[14px] text-center sm:text-start tracking-[8px] sm:tracking-[10px] ">
          35,000+ already joined
        </p>
        <h2 className="font-[650] text-center sm:w-[400px] w-[90%] text-[25px] sm:text-[35px] ">
          Stay up-to-date with what we’re doing
        </h2>
      </section>
      <section>
        <Form />
      </section>
    </div>
  );
}

const Form = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center sm:items-start justify-center mt-10 gap-5">
      <div className="h-[70px] rounded-[3px] bg-red-600 ">
        <input
          className="outline-none text-black px-2 rounded-[4px] border-none bg-white h-[60px] w-[270px]  "
          type="text"
          name=""
          id=""
        />
      </div>
      <button className="px-4 py-4 text-black font-[600] text-[16px] bg-white rounded-[3px]">
        Contact Us
      </button>
    </div>
  );
};

export default Contact;
