"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {  Upload,message,Progress } from 'antd';
import { AnyAaaaRecord } from "dns";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import {SERVER_BASEURL_SERVICES} from '../../config/keys'
import { UserUtils } from "@/utils/user";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Dragger } = Upload;


interface OccupancyThirdFormProps  {
  surveyPlans:string
  CertificateOfIncorporation:string
  taxClearanceCertificate:string
  Affidavit:string
  leaseAgreement:string
  updateFields: (fields: Partial<OccupancyThirdFormProps>) => void
}

function OccupancyThirdForm  ({
  updateFields
}:OccupancyThirdFormProps) {


  const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />
  const [uploadedSurveyPlan, setUploadedSurveyPlan] = useState(null);
  const [uploadedLeaseAgreement, setUploadedLeaseAgreement] = useState(null);
  const [uploadedOwnershipProperty, setUploadedOwnershipProperty] = useState(null);
  const [uploadedClearanceCertificate, setUploadedClearanceCertificate] = useState(null);
  const [uploadedIncorporationCertificate, setUploadedIncorporationCertificate] = useState(null);
  const [leaseAgreement, setUploadedLeaseAgreementInput] = useState("");
  const [Affidavit, setUploadedOwnershipPropertyInput] = useState("");
  const [taxClearanceCertificate, setUploadedClearanceCertificateInput] = useState("");
  const [CertificateOfIncorporation, setUploadedIncorporationCertificateInput] = useState("");
  const [surveyPlans, setUuploadedSurveyPlanInput] = useState<string[]>([]);
 
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

  const handleLeaseAgreementUpload = (file: any) => {
    setUploadedLeaseAgreement(file);
  
    if (file.file.status === 'done') {
      const response = file.file.response;
  
      if (response && response.success) {
        message.success(`${file.file.name} file uploaded successfully`);
        console.log('Response data:', response.data);
        toast.success('file uploaded successfully');

        console.log(leaseAgreement);
  
        const uploadedFileId = response.data[0].id;
        setUploadedLeaseAgreementInput(uploadedFileId);
        updateFields({ leaseAgreement: response.data[0].id });
      } else {
        message.error(`${file.file.name} file upload failed.`);
        toast.error('file upload failed');

      }
    }
  };
  const handleOwnershipPropertyUpload = (file: any) => {
    setUploadedOwnershipProperty(file);
  
    if (file.file.status === 'done') {
      const response = file.file.response;
  
      if (response && response.success) {
        message.success(`${file.file.name} file uploaded successfully`);
        toast.success('file uploaded successfully');
        
        console.log('Response data:', response.data);
        console.log(Affidavit);
  
        const uploadedFileId = response.data[0].id;
        setUploadedOwnershipPropertyInput(uploadedFileId);
        updateFields({ Affidavit: response.data[0].id });
      } else {
        message.error(`${file.file.name} file upload failed.`);
        toast.error('file upload failed');

      }
    }
  };
  const handleClearanceCertificate = (file: any) => {
    setUploadedClearanceCertificate(file);
  
    if (file.file.status === 'done') {
      const response = file.file.response;
  
      if (response && response.success) {
        message.success(`${file.file.name} file uploaded successfully`);
        console.log('Response data:', response.data);
        console.log(taxClearanceCertificate);
  
        const uploadedFileId = response.data[0].id;
        setUploadedClearanceCertificateInput(uploadedFileId);
        updateFields({ taxClearanceCertificate: response.data[0].id });
      } else {
        message.error(`${file.file.name} file upload failed.`);
        toast.error('file upload failed');

      }
    }
  };
  const handleIncorporationCertificate = (file: any) => {
    setUploadedIncorporationCertificate(file);
  
    if (file.file.status === 'done') {
      const response = file.file.response;
  
      if (response && response.success) {
        message.success(`${file.file.name} file uploaded successfully`);
        toast.success('file uploaded successfully');

        console.log('Response data:', response.data);
        console.log(CertificateOfIncorporation);
  
        const uploadedFileId = response.data[0].id;
        setUploadedIncorporationCertificateInput(uploadedFileId);
        updateFields({ CertificateOfIncorporation: response.data[0].id });
      } else {
        message.error(`${file.file.name} file upload failed.`);
        toast.error('file upload failed');

      }
    }
  };
  const handleSurveyPlan = (file: any) => {
    setUploadedSurveyPlan(file);
  
    if (file.file.status === 'done') {
      const response = file.file.response;
  
      if (response && response.success) {
        message.success(`${file.file.name} file uploaded successfully`);
        toast.success('file uploaded successfully');

        console.log('Response data:', response.data);
        console.log(surveyPlans);
  
        const uploadedFileId = response.data[0].id;
        setUuploadedSurveyPlanInput(prevIds => [...prevIds, uploadedFileId]);
        updateFields({ surveyPlans: uploadedFileId});
        console.log('hello',uploadedFileId)
      } else {
        message.error(`${file.file.name} file upload failed.`);
        toast.error('file upload failed');

      }
    }
  };
  const handleFileRemove = () => {
    setUploadedLeaseAgreement(null);
  };
  const leaseAgreementFile = {
    name: 'file',
    maxCount:1,
    headers: {
      authorization: `Bearer ${userToken}`, // If needed
    },
action: `https://govservicesgeneral.onrender.com/v1/api/bucket/upload`,
    onRemove:handleFileRemove,
    onChange: handleLeaseAgreementUpload,
    onDrop(e: any) {
    },
   
   
  };
  const surveyPlanFile = {
    name: 'file',
    maxCount:3,
    headers: {
      authorization: `Bearer ${userToken}`, // If needed
    },
    action: `https://govservicesgeneral.onrender.com/v1/api/bucket/upload`,
    onRemove:handleFileRemove,
    onChange: handleSurveyPlan,
    onDrop(e: any) {
    },
   
  };
  const ownershipProperty = {
    name: 'file',
    maxCount:1,
    headers: {
      authorization: `Bearer ${userToken}`, // If needed
    },
    action: `https://govservicesgeneral.onrender.com/v1/api/bucket/upload`,
    onRemove:handleFileRemove,
    onChange: handleOwnershipPropertyUpload,
    onDrop(e: any) {
    },
   
  };
  const clearanceCertificate = {
    name: 'file',
    maxCount:1,
    headers: {
      authorization: `Bearer ${userToken}`, // If needed
    },
    action: `https://govservicesgeneral.onrender.com/v1/api/bucket/upload`,
    onRemove:handleFileRemove,
    onChange: handleClearanceCertificate,
    onDrop(e: any) {
    },
   
  };
  const incorporationCertificate = {
    name: 'file',
    maxCount:1,
    headers: {
      authorization: `Bearer ${userToken}` // If needed
    },
    action: `https://govservicesgeneral.onrender.com/v1/api/bucket/upload`,
    onRemove:handleFileRemove,
    onChange: handleIncorporationCertificate,
    onDrop(e: any) {
    },
   
  };



  return (
    <>
    <ToastContainer/>
    <div className="w-full h-fit flex flex-col gap-4">
      <div className="w-full h-fit flex gap-4">
        <div className="w-full flex flex-col gap-3 mb-[2rem]">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Lease agreement
          </label>
          <Dragger {...leaseAgreementFile} className='relative border-none'>
          {uploadedLeaseAgreement ? (
            <>
            <div className="justify-between flex flex-row px-5 py-5">
              <span style={{fontFamily: 'Livvic',fontWeight: '400',fontSize: '14px',color:'#FF6767'}}  onClick={handleFileRemove}>
                Remove File
              </span>
              <Spin indicator={antIcon} />
            </div>
            <input
                required
                type="hidden"
                name="uploadedLeaseAgreementInput"
                value={leaseAgreement}
                onChange={(e) => updateFields({ leaseAgreement: e.target.value })} // Set the uploaded file ID here
              />
           
              
            </>
          ) : (
            <>
             <div className="text-center flex flex-col justify-center items-center mb-2">
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
              
               <input
               className="ml-24"
                required
                type="file"
                name="uploadedLeaseAgreementInput"
                value={leaseAgreement}
                onChange={(e) => updateFields({ leaseAgreement: e.target.value })} // Set the uploaded file ID here
              />
              <div className="flex justify-center items-center relative mt-5">
                  <div className="bg-[#12B97D] py-3 px-7 rounded-full flex justify-center items-center absolute top-0">
                    <p className="text-[#fafafa]">Upload</p>
                  </div>
              </div>
             
            </>
          )}
            </Dragger>

        </div>
      </div>
      <div className="w-full h-fit flex gap-4 mb-10">
        <div className="w-full flex flex-col gap-3 mb-20">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            3 Original copies of survey plan
          </label>
          <Dragger {...surveyPlanFile} className='import-contact-dragger'>
          {uploadedSurveyPlan ? (
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
              <p className="ant-upload-hint">
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
         
        </div>
      </div>
      <div className="w-full h-fit flex gap-4">
        <div className="w-full flex flex-col gap-3 mb-[2rem]">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Affidavit of ownership of property
          </label>
          <Dragger {...ownershipProperty} className='import-contact-dragger'>
          {uploadedOwnershipProperty ? (
            <>
             <div className="justify-between flex flex-row px-5 py-5">
             <span style={{fontFamily: 'Livvic',fontWeight: '400',fontSize: '14px',color:'#FF6767'}}  onClick={handleFileRemove}>
                Remove File
              </span>
              <Spin indicator={antIcon} />
              <input
                type="hidden"
                name="Affidavit"
                value={Affidavit}
                onChange={(e) => updateFields({ Affidavit: e.target.value })} // Set the uploaded file ID here
              />


             </div>
              
            </>
          ) : (
            <>
              <Image
                        src={"/icons/doc.svg"}
                        width={40}
                        height={40}
                        alt="doc icon"
                        className="mx-auto"

                      />
             
             <div className="text-center">
             <p className="ant-upload-hint">
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
          
        </div>
      </div>
      <div className="w-full h-fit flex gap-4">
        <div className="w-full flex flex-col gap-3 mb-[2rem]">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            3 years tax clearance certificate
          </label>
          <Dragger {...clearanceCertificate} className='import-contact-dragger'>
          {uploadedClearanceCertificate ? (
            <>
             <div className="justify-between flex flex-row px-5 py-5">
             <span style={{fontFamily: 'Livvic',fontWeight: '400',fontSize: '14px',color:'#FF6767'}}  onClick={handleFileRemove}>
                Remove File
              </span>
              <Spin indicator={antIcon} />
              <input
                type="hidden"
                name="taxClearanceCertificate"
                value={taxClearanceCertificate}
                onChange={(e) => updateFields({ taxClearanceCertificate: e.target.value })} // Set the uploaded file ID here
              />


             </div>
              
            </>
          ) : (
            <>
              <Image
                        src={"/icons/doc.svg"}
                        width={40}
                        height={40}
                        alt="doc icon"
                        className="mx-auto"

                      />
             
             <div className="text-center">
             <p className="ant-upload-hint">
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
          
        </div>
      </div>
      <div className="w-full h-fit flex gap-4">
        <div className="w-full flex flex-col gap-3 mb-[2rem]">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            certificate of incorporation of a company
          </label>
          <Dragger {...incorporationCertificate} className='import-contact-dragger'>
          {uploadedIncorporationCertificate ? (
            <>
             <div className="justify-between flex flex-row px-5 py-5">
             <span style={{fontFamily: 'Livvic',fontWeight: '400',fontSize: '14px',color:'#FF6767'}}  onClick={handleFileRemove}>
                Remove File
              </span>
              <Spin indicator={antIcon} />
              <input
                type="hidden"
                name="CertificateOfIncorporation"
                value={CertificateOfIncorporation}
                onChange={(e) => updateFields({ CertificateOfIncorporation: e.target.value })} // Set the uploaded file ID here
              />


             </div>
             
            </>
          ) : (
            <>
              <Image
                        src={"/icons/doc.svg"}
                        width={40}
                        height={40}
                        alt="doc icon"
                        className="mx-auto"

                      />
             
             <div className="text-center">
             <p className="ant-upload-hint">
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
          
        </div>
      </div>
   
    </div>
    </>
  );
};

export default OccupancyThirdForm;
