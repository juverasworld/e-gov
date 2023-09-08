"use client";
import React from 'react'




interface TrueCopyFirstFormProps  {
  postalAddress: string;
  nationality: string;
  occupation:string;
  typeOfOccupation:string;
  purposeForGrant:string;
  town:string;
  landOwnerName:string;
  landOwnerAddress:string;
  LandDescription:string
    updateFields: (fields: Partial<TrueCopyFirstFormProps>) => void
  }
function trueCopyForm1({
  postalAddress,
  nationality,
  occupation,
  typeOfOccupation,
  purposeForGrant,
  town,
  landOwnerName,
  landOwnerAddress,
  LandDescription,
    updateFields
}:TrueCopyFirstFormProps) {
  return (
    <div className="w-full h-fit flex flex-col gap-4">
      <div className="w-full h-fit flex gap-4 md:flex-row flex-col">
        <div className="md:w-[50%] w-full flex flex-col gap-3" >
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Postal Address
          </label>
          <input
            required
            value={postalAddress}
            name="postalAddress"
            type="text"
            onChange={e => updateFields({ postalAddress: e.target.value})}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        </div>
        <div className="md:w-[50%] w-full flex flex-col gap-3" >
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Nationality
          </label>
          <input
            required
            value={nationality}
            name="dateOfBirth"
            type="text"
            onChange={e => updateFields({ nationality: e.target.value})}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        </div>
      </div>
      <div className="w-full h-fit flex gap-4 md:flex-row flex-col">
        <div className="md:w-[50%] w-full flex flex-col gap-3" >
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Occupation
          </label>
          <input
            required
            value={occupation}
            name="occupation"
            type="text"
            onChange={e => updateFields({ occupation: e.target.value})}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        </div>
        <div className="md:w-[50%] w-full flex flex-col gap-3" >
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Type Of Occupation
          </label>
          <input
            required
            value={typeOfOccupation}
            name="typeOfOccupation"
            type="text"
            onChange={e => updateFields({ typeOfOccupation: e.target.value})}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        </div>
      </div>
      <div className="w-full h-fit flex gap-4 md:flex-row flex-col">
        <div className="md:w-[50%] w-full flex flex-col gap-3" >
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Purpose For Grant
          </label>
          <input
            required
            value={purposeForGrant}
            name="purposeForGrant"
            type="text"
            onChange={e => updateFields({ purposeForGrant: e.target.value})}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        </div>
        <div className="md:w-[50%] w-full flex flex-col gap-3" >
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Town
          </label>
          <input
            required
            value={town}
            name="town"
            type="text"
            onChange={e => updateFields({ town: e.target.value})}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        </div>
      </div>
      <div className="w-full h-fit flex gap-4 md:flex-row flex-col">
        <div className="md:w-[50%] w-full flex flex-col gap-3" >
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Land Owner Name
          </label>
          <input
            required
            value={landOwnerName}
            name="landOwnerName"
            type="text"
            onChange={e => updateFields({ landOwnerName: e.target.value})}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        </div>
        <div className="md:w-[50%] w-full flex flex-col gap-3" >
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Land Owner Address
          </label>
          <input
            required
            value={landOwnerAddress}
            name="landOwnerAddress"
            type="text"
            onChange={e => updateFields({ landOwnerAddress: e.target.value})}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        </div>
      </div>
      <div className="w-full h-fit flex gap-4 mt-5">
        <div className="w-full flex flex-col gap-3">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Land Description
          </label>
          <input
            required
            value={LandDescription}
            name="LandDescription"
            type="text"
            onChange={e => updateFields({ LandDescription: e.target.value })}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        </div>
        
      </div>
    
    </div>
  )
}

export default trueCopyForm1