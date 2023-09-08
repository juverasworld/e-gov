"use client";
import React, { useState } from "react";
import { Form, Input, Button } from 'antd';


interface PlacingCaveatSecondFormProps  {
  nationality:string;
  postalAddress:string;
  updateFields: (fields: Partial<PlacingCaveatSecondFormProps>) => void
}




 function  PlacingCaveatSecondForm({
    nationality,
    postalAddress,
    updateFields,
  }:PlacingCaveatSecondFormProps) {
    
  return (
    <div className="w-full h-fit flex flex-col gap-4">
      <div className="w-full h-fit flex gap-4">
       
        
      </div>
      <div className="w-full h-fit flex gap-4">
        <div className="w-[50%] flex flex-col gap-3">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Nationality
          </label>
          <input
            required
            value={nationality}
            name="nationality"
            type="text"
            onChange={e => updateFields({ nationality: e.target.value })}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        </div>
        <div className="w-[50%] flex flex-col gap-3">
        
        </div>
      </div>
      <div className="w-full h-fit flex gap-4">
        <div className="w-[50%] flex flex-col gap-3">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Postal Address
          </label>
          <input
            required
            value={postalAddress}
            name="postAddress"
            type="text"
            onChange={e => updateFields({ postalAddress: e.target.value })}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        </div>
      </div>
    </div>
  )
}

export default PlacingCaveatSecondForm
