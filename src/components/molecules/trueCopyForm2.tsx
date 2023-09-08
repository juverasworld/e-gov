"use client";
import React,{ useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Upload ,message} from 'antd';
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { Dragger } = Upload;

interface TrueCopySecondFormProps  {
    surveyPlans:string
    affidavit:string
    taxClearanceCertificate:string
    CertificateOfIncorporation:string
    publicationNotice:string
    clearanceFromTheTownUnionPresident:string
    clearanceFromTheIgwe:string
    updateFields: (fields: Partial<TrueCopySecondFormProps>) => void
  }

function TrueCopyForm2 ({
  
    updateFields}:TrueCopySecondFormProps) {
    const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />
    const [uploadedProofOfPayment, setUploadedProofOfPayment] = useState(null);
    const [uploadedSurveyPlan, setUploadedSurveyPlan] = useState(null);
    const [uploadedAffidavit, setUploadedAffidavit] = useState(null);
    const [uploadedtaxCert, setUploadedtaxCert] = useState(null);
  const [uploadedCertOfIncorporation, setUploadedCertOfIncorporation] = useState(null);
  const [uploadedPublicNotice, setUploadedPublicNotice] = useState(null);
  const [uploadedClearanceFromTownUnion, setUploadedClearanceFromTownUnion] = useState(null);
  const [uploadedClearanceFromIgwe, setUploadedClearanceFromIgwe] = useState(null);
    
    const [uploadedProofOfPaymentInput, setUploadedProofOfPaymentInput] = useState(null);
    const [surveyPlans, setSurveyPlans] = useState(null);
    const [affidavit, setAffidavit] = useState(null);
    const [taxClearanceCertificate, setTaxClearanceCertificate] = useState(null);
    const [CertificateOfIncorporation, setCertificateOfIncorporation] = useState(null);
    const [publicationNotice, setPublicationNotice] = useState(null);
    const [clearanceFromTheTownUnionPresident, setClearanceFromTheTownUnionPresident] = useState(null);
    const [clearanceFromTheIgwe, setClearanceFromTheIgwe] = useState(null);

    const handleFileRemove = () => {
     
    };
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
  

      const  handleSurveyPlan= (file: any) => {
        setUploadedSurveyPlan(file);
      
        if (file.file.status === 'done') {
          const response = file.file.response;
      
          if (response && response.success) {
            message.success(`${file.file.name} file uploaded successfully`);
            toast.success('file uploaded successfully');

            console.log('Response data:', response.data);
            console.log(surveyPlans);
      
            const uploadedFileId = response.data[0].id;
            setSurveyPlans(uploadedFileId);
            updateFields({ surveyPlans: response.data[0].id });
          } else {
            message.error(`${file.file.name} file upload failed.`);
            toast.error('file upload failed');

          }
        }
      };

      const  handleAffidavit= (file: any) => {
        setUploadedAffidavit(file);
      
        if (file.file.status === 'done') {
          const response = file.file.response;
      
          if (response && response.success) {
            message.success(`${file.file.name} file uploaded successfully`);
            toast.success('file uploaded successfully');

            console.log('Response data:', response.data);
            console.log(affidavit);
      
            const uploadedFileId = response.data[0].id;
            setAffidavit(uploadedFileId);
            updateFields({ affidavit: response.data[0].id });
          } else {
            message.error(`${file.file.name} file upload failed.`);
            toast.error('file upload failed');

          }
        }
      };
      const handleTaxCertificate = (file: any) => {
        setUploadedtaxCert(file);
      
        if (file.file.status === 'done') {
          const response = file.file.response;
      
          if (response && response.success) {
            message.success(`${file.file.name} file uploaded successfully`);
            toast.success('file uploaded successfully');

            console.log('Response data:', response.data);
            console.log(taxClearanceCertificate);
            
            const uploadedFileId = response.data[0].id;
            setTaxClearanceCertificate(uploadedFileId);
            updateFields({ taxClearanceCertificate: response.data[0].id });
          } else {
            message.error(`${file.file.name} file upload failed.`);
            toast.error('file upload failed');

          }
        }
      };
      const  handleCertOfIncorporation = (file: any) => {
        setUploadedCertOfIncorporation(file);
      
        if (file.file.status === 'done') {
          const response = file.file.response;
      
          if (response && response.success) {
            message.success(`${file.file.name} file uploaded successfully`);
            toast.success('file uploaded successfully');

            console.log('Response data:', response.data);
            console.log(CertificateOfIncorporation);
      
            const uploadedFileId = response.data[0].id;
            setCertificateOfIncorporation(uploadedFileId);
            updateFields({ CertificateOfIncorporation: response.data[0].id });
          } else {
            message.error(`${file.file.name} file upload failed.`);
            toast.error('file upload failed');

          }
        }
      };
      const  handlePublicNotice = (file: any) => {
        setUploadedPublicNotice(file);
      
        if (file.file.status === 'done') {
          const response = file.file.response;
      
          if (response && response.success) {
            message.success(`${file.file.name} file uploaded successfully`);
            toast.success('file uploaded successfully');

            console.log('Response data:', response.data);
            console.log(publicationNotice);
      
            const uploadedFileId = response.data[0].id;
            setPublicationNotice(uploadedFileId);
            updateFields({ publicationNotice: response.data[0].id });
          } else {
            message.error(`${file.file.name} file upload failed.`);
            toast.error('file upload failed');

          }
        }
      };
      const  handleClearanceFromTownUnion = (file: any) => {
        setUploadedClearanceFromTownUnion(file);
      
        if (file.file.status === 'done') {
          const response = file.file.response;
      
          if (response && response.success) {
            message.success(`${file.file.name} file uploaded successfully`);
            toast.success('file uploaded successfully');

            console.log('Response data:', response.data);
            console.log(clearanceFromTheTownUnionPresident);
      
            const uploadedFileId = response.data[0].id;
            setClearanceFromTheTownUnionPresident(uploadedFileId);
            updateFields({ clearanceFromTheTownUnionPresident: response.data[0].id });
          } else {
            message.error(`${file.file.name} file upload failed.`);
            toast.error('file upload failed');

          }
        }
      };
      const  handleClearanceFromIgwe = (file: any) => {
        setUploadedClearanceFromIgwe(file);
      
        if (file.file.status === 'done') {
          const response = file.file.response;
      
          if (response && response.success) {
            message.success(`${file.file.name} file uploaded successfully`);
            toast.success('file uploaded successfully');

            console.log('Response data:', response.data);
            console.log(clearanceFromTheIgwe);
      
            const uploadedFileId = response.data[0].id;
            setClearanceFromTheIgwe(uploadedFileId);
            updateFields({ clearanceFromTheIgwe: response.data[0].id });
          } else {
            message.error(`${file.file.name} file upload failed.`);
            toast.error('file upload failed');

          }
        }
      };

  
    const surveyPlan = {
      name: 'file',
      maxCount:1,
      headers: {
        authorization: `Bearer ${userToken}`, // If needed
      },
      action: 'https://govservicesgeneral.onrender.com/v1/api/bucket/upload',
      onRemove:handleFileRemove,
      onChange: handleSurveyPlan,
      onDrop(e: any) {
      },
     
    };
    const affidavitFile = {
      name: 'file',
      maxCount:1,
      headers: {
        authorization: `Bearer ${userToken}`, // If needed
      },
      action: 'https://govservicesgeneral.onrender.com/v1/api/bucket/upload',
      onRemove:handleFileRemove,
      onChange: handleAffidavit,
      onDrop(e: any) {
      },

     
    };
    const taxCertificate = {
      name: 'file',
      maxCount:1,
      headers: {
        authorization: `Bearer ${userToken}`, // If needed
      },
      action: 'https://govservicesgeneral.onrender.com/v1/api/bucket/upload',
      onRemove:handleFileRemove,
      onChange: handleTaxCertificate,
      onDrop(e: any) {
      },  
    };
    const certOfIcorporation = {
      name: 'file',
      maxCount:1,
      headers: {
        authorization: `Bearer ${userToken}`, // If needed
      },
      action: 'https://govservicesgeneral.onrender.com/v1/api/bucket/upload',
      onRemove:handleFileRemove,
      onChange: handleCertOfIncorporation,
      onDrop(e: any) {
      },
    };
    const publicNotice = {
      name: 'file',
      maxCount:1,
      headers: {
        authorization: `Bearer ${userToken}`, // If needed
      },
      action: 'https://govservicesgeneral.onrender.com/v1/api/bucket/upload',
      onRemove:handleFileRemove,
      onChange: handlePublicNotice,
      onDrop(e: any) {
      },
    };
    const clearanceFromTownUnion = {
      name: 'file',
      maxCount:1,
      headers: {
        authorization: `Bearer ${userToken}`, // If needed
      },
      action: 'https://govservicesgeneral.onrender.com/v1/api/bucket/upload',
      onRemove:handleFileRemove,
      onChange: handleClearanceFromTownUnion,
      onDrop(e: any) {
      },
    };
    const clearanceFromIgwe = {
      name: 'file',
      maxCount:1,
      headers: {
        authorization: `Bearer ${userToken}`, // If needed
      },
      action: 'https://govservicesgeneral.onrender.com/v1/api/bucket/upload',
      onRemove:handleFileRemove,
      onChange: handleClearanceFromIgwe,
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
            Survey Plans
          </label>
          <Dragger {...surveyPlan} className='import-contact-dragger'>
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
            Affidavit
          </label>
          <Dragger {...affidavitFile} className='import-contact-dragger'>
          {uploadedAffidavit ? (
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
            Tax Clearance Certificate
          </label>
          <Dragger {...taxCertificate} className='import-contact-dragger'>
          {uploadedtaxCert ? (
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
            Certificate Of Incorporation
          </label>
          <Dragger {...certOfIcorporation} className='import-contact-dragger'>
          {uploadedCertOfIncorporation ? (
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
            Publication Notice
          </label>
          <Dragger {...publicNotice} className='import-contact-dragger'>
          {uploadedPublicNotice ? (
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
            Clearance From the Town Union president 
          </label>
          <Dragger {...clearanceFromTownUnion} className='import-contact-dragger'>
          {uploadedClearanceFromTownUnion ? (
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
            Clearance from the Igwe
          </label>
          <Dragger {...clearanceFromIgwe} className='import-contact-dragger'>
          {uploadedClearanceFromIgwe ? (
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

  )
}

export default TrueCopyForm2;