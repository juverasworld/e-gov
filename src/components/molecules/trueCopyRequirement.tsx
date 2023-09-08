"use client";
import React,{useEffect, useState} from 'react';
import Image from "next/image";
import { LuImage } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin ,Upload,message} from 'antd';
import Airport from '../../../public/images/airport.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { Dragger } = Upload;


interface TrueCopyRequirementFormProps  {
  leaseAgreement:string
  updateFields: (fields: Partial<TrueCopyRequirementFormProps>) => void
}

function TrueCopyRequirement({
  
  updateFields
}:TrueCopyRequirementFormProps) {
    const [uploadedApplicationForm, setUploadedApplicationForm] = useState(null);
    const [leaseAgreement, setLeaseAgreement] = useState("");
    const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />
    useEffect(() => {
      const token: string | null  = localStorage.getItem('userToken');
      console.log('Token:', token);
    }, []);
    const getUserToken = () => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        return token;
      }
      return null;
    };
     const userToken = getUserToken()

    const handleFileRemove = () => {
      setUploadedApplicationForm(null);
      };
   
      const handleApplicationForm = (file: any) => {
        setUploadedApplicationForm(file);
      
        if (file.file.status === 'done') {
          const response = file.file.response;
      
          if (response && response.success) {
            message.success(`${file.file.name} file uploaded successfully`);
            toast.success('file uploaded successfully');
            console.log('Response data:', response.data);
            console.log(leaseAgreement);
      
            const uploadedFileId = response.data[0].id;
            setLeaseAgreement(uploadedFileId);
            updateFields({ leaseAgreement: response.data[0].id });
          } else {
            message.error(`${file.file.name} file upload failed.`);
              toast.error('file upload failed');

          }
        }
      };
    const applicationLetter = {
        name: 'file',
        maxCount:1,
        headers: {
            authorization: `Bearer ${userToken}`, // If needed
          },
        action: 'https://govservicesgeneral.onrender.com/v1/api/bucket/upload',
        onRemove:handleFileRemove,
        onChange: handleApplicationForm,
        onDrop(e: any) {
        },
       
       
      };

      const certifiedTrueCopy = "/images/credit.png";
      const certifiedTrueCopyDummyDocument = (url:any) => {
      const fileName = url.split("/").pop();
      const aTag = document.createElement("a");
      aTag.href = url;
      aTag.setAttribute("download",fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
      }
      
      
  return (
    <>
    <ToastContainer/>
    <div className="flex flex-col items-center gap-3 bg-[#fff] rounded-b-2xl  py-5">
            <div className="w-full flex flex-col items-center gap-5 bg-[#fff] rounded-b-2xl">
              <h3 className="text-[#008080] font-bold font-cabinet text-2xl">
                   Requirement Document
              </h3>
                <div className="w-full flex flex-col gap-3 mb-[2rem]">
                  <label
                    htmlFor="dob"
                    className="text-[#7474b6] font-[18] font-nunito"
                  >
                    Application Letter
                  </label>
                  <Dragger {...applicationLetter} className='relative border-none'>
          {uploadedApplicationForm ? (
            <>
            <div className="justify-between flex flex-row px-5 py-5">
              <span style={{fontFamily: 'Livvic',fontWeight: '400',fontSize: '14px',color:'#FF6767'}}  onClick={handleFileRemove}>
                Remove File
              </span>
              <Spin indicator={antIcon} />
            </div>
            </>
          ) : (
            <>
             <div className="text-center flex flex-col justify-center mb-5">
                <Image
                          src={"/icons/doc.svg"}
                          width={40}
                          height={40}
                          alt="doc icon"
                          className="mx-auto"

                        />
                <p className="ant-upload-hint mb-3">
                    Upload pictures
                  </p>
                  <p className="ant-upload-hint">
                    Videos must be less than 30mb
                  </p>
                  <p className="ant-upload-hint">
                  Pictures must be less than 30mb
                  </p>
                  <p className="ant-upload-hint">
                  in size
                  </p>
              </div>
              <div className="flex justify-center items-center relative">
                  <div className="bg-[#12B97D] py-3 px-7 rounded-full flex justify-center items-center absolute top-0">
                    <p className="text-[#fafafa]">Upload</p>
                  </div>
              </div>
            </>
          )}
            </Dragger>
                  <div className="flex flex-col gap-3 mt-7">
                    <h5 className="font-bold font-nunito md:text-base text-sm text-[#073131] ml-3 mt-5 md:mt-0">
                      Download Sample Document as a Guide
                    </h5>
                    <div className="w-full h-fit p-8 bg-[#eaf3f3] flex justify-between items-center rounded-3xl flex-col md:flex-row">
                      <div className="flex items-center flex-col md:flex-row">
                        <Image src="/images/gallery.svg" width="32" height="32" alt="" />
                        <p className="font-bold font-nunito md:text-xl text-lg text-[#073131] ml-3 text-center">
                          Document Information
                        </p>
                      </div>
                      
                        <span onClick={() => {certifiedTrueCopyDummyDocument(certifiedTrueCopy)}} className="p-3 px-7 flex justify-center items-center bg-[#12B97D] text-[#fff] rounded-full">
                          <p>Download</p>
                        </span>
                      
                     
                    </div>
                  </div>
               
                </div>
         
            </div>
          </div>
    </>

        
  )
}

export default TrueCopyRequirement