"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlinePaperClip } from "react-icons/ai";
import { GrDocument } from "react-icons/gr";

const GetInTouchForm = () => {
  const [isBookingAppointment, setIsBookingAppointment] =
    useState<boolean>(false);
  const [appointmentBooked, setAppointmentBooked] = useState<boolean>(false);

  type bookingDetailProps = {
    fullName: string;
    email: string;
    message: string;
  };

  const [bookingDetails, setBookingDetails] = useState<bookingDetailProps>({
    fullName: "",
    email: "",
    message: "",
  });
  return (
    <div>
      <div className="lg:w-[555px] min-h-[456px] bg-[#fff] rounded-[18px] p-[2%]">
        <div>
          <input
            type="text"
            name="fullName"
            id="fullName"
            onChange={(event) =>
              setBookingDetails({
                ...bookingDetails,
                fullName: event.target.value,
              })
            }
            placeholder="Full Name"
            className="w-full h-[57px] rounded border-[#D9D9D9] border-[1px] px-3 py-1 outline-none mb-3 font-nunito"
          />
          <input
            type="email"
            name="email"
            id="email"
            onChange={(event) =>
              setBookingDetails({
                ...bookingDetails,
                email: event.target.value,
              })
            }
            placeholder="Email"
            className="w-full h-[42px] rounded border-[#D9D9D9] border-[1px] px-3 py-1 outline-none mb-3 font-nunito"
          />
          <textarea
            name="message"
            id="message"
            onChange={(event) =>
              setBookingDetails({
                ...bookingDetails,
                message: event.target.value,
              })
            }
            placeholder="Additional Comment (Optional)"
            className="w-full h-[142px] rounded border-[#D9D9D9] border-[1px] px-3  py-2 outline-none mb-3 font-nunito"
          />

          <button
            onClick={() => setAppointmentBooked(true)}
            className="w-full py-3 flex justify-center items-center bg-[#12B97D] rounded"
          >
            <p className="text-lg font-nunito text-[#fff]">Submit</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchForm;
