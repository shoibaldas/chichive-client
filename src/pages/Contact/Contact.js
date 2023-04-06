import React from "react";

const Contact = () => {
  return (
    <div className="h-screen">
      <div className="flex items-center justify-center h-[14rem] md:h-[18.6rem] mb-12 bg-fixed bg-center bg-cover custom-img">
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-[39.2rem] md:bottom-[40.5rem] bg-black/70 z-[2]" />
        <div className="text-white z-[2]">
          <h2 className="text-3xl font-semibold">Home / Contact</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
