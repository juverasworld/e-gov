"use client";
import React, { useState } from "react";


 const   OccupancyFirstForm = ({userData, updateFields }:any) => {
  
  const [formFields, setFormFields] = useState({
    nationality: userData.nationality || "",
    postalAddress: userData.postalAddress || "",
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
        <div className="md:w-[50%] w-full flex flex-col gap-3">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Nationality
          </label>
          <input
            required
            value={formFields.nationality}
            name="nationality"
            type="text"
            // onChange={e => updateFields({ nationality: e.target.value })}
            onChange={handleFieldChange}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        </div>
        <div className="md:w-[50%] w-full flex flex-col gap-3">
        <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Postal Address
          </label>
          <input
            required
            value={formFields.postalAddress}
            name="postalAddress"
            type="text"
            // onChange={e => updateFields({ postalAddress: e.target.value })}
            onChange={handleFieldChange}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        
        </div>
      </div>
   
    </div>
  )
}

export default OccupancyFirstForm
