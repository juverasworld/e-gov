import React from 'react';
import Image from 'next/image';

const SuccessfulSubmissionModal = ({ visible, onClose }:any) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${visible ? 'visible' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg shadow-md z-10 flex flex-col w-[684px] h-[442px]">
      
        <div className="items-left justify-start" onClick={onClose}>
          <Image alt="" src="/images/closeModal.svg" width="56" height="56" />
        </div>
        <div className="mx-auto">
          <Image alt="" src="/images/successIcon.svg" width="105" height="105" />
        </div>
    
        <h2 className="text-[24px]  mb-4 text-[#12B97D] text-center mt-10">SUCCESS</h2>
        
          <p className='text-[18px] px-32 text-center items-center justify-center flex flex-col' >Your request has been received,  please note that it will take on or before 24 hours to be processed.</p>
     
      </div>
    </div>
  );
};

export default SuccessfulSubmissionModal;
