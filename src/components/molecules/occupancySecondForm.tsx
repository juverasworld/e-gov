"use client";
import React, { useState } from "react";


const  OccupancySecondForm = ({userData, updateFields }:any) => {


  const [formFields, setFormFields] = useState({
    occupation: userData?.occupation || "",
    typeOfOccupation: userData?.typeOfOccupation || "",
    purposeForGrant: userData?.purposeForGrant || "",
    town: userData?.town || "",
    landOwnerName: userData?.landOwnerName || "",
    landOwnerAddress: userData?.landOwnerAddress || "",
    LandDescription: userData?.LandDescription || "",
  });

  const handleFieldChange = (e: any) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
    updateFields({ [name]: value });
  };
  
  
  return (
    <div className="w-full h-fit flex flex-col gap-4">
      <div className="w-full h-fit flex gap-4 flex-col md:flex-row">
        <div className="md:w-[50%] w-full flex flex-col gap-3 mb-5">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Occupation
          </label>
          <input
          name="occupation"
          value={formFields.occupation}
            type="text"
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
            required
            onChange={handleFieldChange}

          />
        </div>
        <div className="md:w-[50%] w-full flex flex-col gap-3 mb-5">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Type of occupancy
          </label>
          <select
          value={formFields.typeOfOccupation}
          onChange={handleFieldChange}
            className="w-full h-[50px] border-[1.5px] bg-[#E8E8E8] rounded px-5 outline-none"
          >
            <option value="">Choose Type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
      </div>
      <div className="w-full h-fit flex gap-4">
        <div className="md:w-[50%] w-full flex flex-col gap-3 mb-5">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Purpose for which the land was Granted
          </label>
          <select
             value={formFields.purposeForGrant}
             onChange={handleFieldChange}
            className="w-full h-[50px] border-[1.5px] bg-[#E8E8E8] rounded px-5 outline-none"
          >
            <option value="">Choose Type</option>
            <option value="residential">Rent</option>
            <option value="commercial">Sale</option>
          </select>
        </div>
       
      </div>
      <div className="w-full h-fit flex gap-4">
        <div className="w-full flex flex-col gap-3 mb-5">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Town or layout applied for
          </label>
          <input
            type="text"
            name="town"
            value={formFields.town}
            onChange={handleFieldChange}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
            required
          />
        </div>
      </div>
      <div className="w-full h-fit flex gap-4">
        <div className="w-full flex flex-col gap-3 mb-5">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Vendors/guarantors initial land owmers Name
          </label>
          <input
            type="text"
            name="landOwnerName"
            value={formFields.landOwnerName}
            onChange={handleFieldChange}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
            required
          />
        </div>
      </div>
      <div className="w-full h-fit flex gap-4">
        <div className="w-full flex flex-col gap-3 mb-5">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Vendors/guarantors initial land owmers Address
          </label>
          <input
            type="text"
            name="landOwnerAddress"
            value={formFields.landOwnerAddress}
            onChange={handleFieldChange}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
            required
          />
        </div>
      </div>
      <div className="w-full h-fit flex gap-4">
        <div className="w-full flex flex-col gap-3 ">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Description of the land for easy identificationee supported with
            Survey Plan
          </label>
          <textarea
            name="LandDescription"
            value={formFields.LandDescription}
            onChange={handleFieldChange}
            placeholder="Text field"
            className="w-full h-[150px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
            required
          />
        </div>
      </div>
    
    </div>
  );
};

export default OccupancySecondForm;
