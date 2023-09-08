"use client";
import React, { useState } from 'react'





const RightOfOccupancyForm1 = ({userData, updateFields }:any) => {
  const [postalAddress, setPostalAddress] = useState(userData?.postalAddress || "");
  const [nationality, setNationality] = useState(userData?.nationality || "");
  const [occupation, setOccupation] = useState(userData?.occupation || "");
  const [typeOfOccupation, setTypeOfOccupation] = useState(userData?.typeOfOccupation || "");
  const [purposeForGrant, setPurposeForGrant] = useState(userData?.purposeForGrant || "");
  const [town, setTown] = useState(userData?.town || "");
  const [landOwnerName, setLandOwnerName] = useState(userData?.landOwnerName || "");
  const [landOwnerAddress, setLandOwnerAddress] = useState(userData?.landOwnerAddress || "");
  const [LandDescription, setLandDescription] = useState(userData?.LandDescription || "");


  const handlepostalAddressChange = (e:any) => {
    const value = e.target.value;
    setPostalAddress(value);
    updateFields({ postalAddress: value });
  };
  const handlenationalityChange = (e:any) => {
    const value = e.target.value;
    setNationality(value);
    updateFields({ nationality: value });
  };
  const handleoccupationChange = (e:any) => {
    const value = e.target.value;
    setOccupation(value);
    updateFields({ occupation: value });
  };
  const handletypeOfOccupationChange = (e:any) => {
    const value = e.target.value;
    setTypeOfOccupation(value);
    updateFields({ typeOfOccupation: value });
  };
  const handlepurposeForGrantChange = (e:any) => {
    const value = e.target.value;
    setPurposeForGrant(value);
    updateFields({ purposeForGrant: value });
  };
  const handletownChange = (e:any) => {
    const value = e.target.value;
    setTown(value);
    updateFields({ town: value });
  };
  const handlelandOwnerNameChange = (e:any) => {
    const value = e.target.value;
    setLandOwnerName(value);
    updateFields({ landOwnerName: value });
  };
  const handlelandOwnerAddressChange = (e:any) => {
    const value = e.target.value;
    setLandOwnerAddress(value);
    updateFields({ landOwnerAddress: value });
  };
  const handleLandDescriptionChange = (e:any) => {
    const value = e.target.value;
    setLandDescription(value);
    updateFields({ LandDescription: value });
  };
  return (
    <div className="w-full h-fit flex flex-col gap-4">
      <div className="w-full h-fit flex gap-4 flex-col md:flex-row">
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
            onChange={handlepostalAddressChange}
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
            onChange={handlenationalityChange}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        </div>
      </div>
      <div className="w-full h-fit flex gap-4 flex-col md:flex-row">
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
            onChange={handleoccupationChange}
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
            onChange={handletypeOfOccupationChange}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        </div>
      </div>
      <div className="w-full h-fit flex gap-4 flex-col md:flex-row">
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
            onChange={handlepurposeForGrantChange}
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
            onChange={handletownChange}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        </div>
      </div>
      <div className="w-full h-fit flex gap-4 flex-col md:flex-row">
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
            onChange={handlelandOwnerNameChange}
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
            onChange={handlelandOwnerAddressChange}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        </div>
      </div>
      <div className="w-full h-fit flex gap-4 mt-5 ">
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
            onChange={handleLandDescriptionChange}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
          />
        </div>
        
      </div>
    
    </div>
  )
}

export default RightOfOccupancyForm1