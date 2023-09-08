"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { BsGlobe } from "react-icons/bs";
import { MdKeyboardArrowDown, MdOutlineArrowBackIosNew } from "react-icons/md";
import { useState } from "react";
import { RxTwitterLogo } from "react-icons/rx";
import { BiLogoInstagram } from "react-icons/bi";
import { AiOutlineBehance, AiOutlineDribbble } from "react-icons/ai";
import { PiFacebookLogo } from "react-icons/pi";
import { Spin, Upload ,message} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import SuccessfulSubmissionModal from "@/components/molecules/notificationModal/notification";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import ProtectedRoute from "@/components/templates/protectedRoutes";
import 'react-toastify/dist/ReactToastify.css';

const { Dragger } = Upload;





const PreCertificateOfOccupancy = (file:any) => {
  const [uploadResponse, setUploadResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFileLoading, setIsFileLoading] = useState(false);

  const [uploadAttempted, setUploadAttempted] = useState(false);
 const [isModalVisible, setIsModalVisible] = useState(false);
  const [uploadedPropertySearchForm, setUploadedPropertySearchForm] = useState(null);
  const [uploadedPropertySearchFormInput, setUploadedPropertySearchFormInput] = useState("");
  const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />
  const [icons] = useState<any[]>([
    {
      icon: <PiFacebookLogo />,
      link: "https://enugustate.gov.ng",
    },
    {
      icon: <RxTwitterLogo />,
      link: "https://enugustate.gov.ng",
    },
    {
      icon: <BiLogoInstagram />,
      link: "https://enugustate.gov.ng",
    },
    {
      icon: <AiOutlineDribbble />,
      link: "https://enugustate.gov.ng",
    },
    {
      icon: <AiOutlineBehance />,
      link: "https://enugustate.gov.ng",
    },
  ]);

  const [footerLinks] = useState<any[]>([
    {
      title: "Privacy Policy",
      route: "",
    },
    {
      title: "Terms of Use",
      route: "",
    },
  ]);

  const router = useRouter();
  
const surveyPlan = "/images/airport.png";
const surveyPlanDummyDocument = (url:any) => {
const fileName = url.split("/").pop();
const aTag = document.createElement("a");
aTag.href = url;
aTag.setAttribute("download",fileName);
document.body.appendChild(aTag);
aTag.click();
aTag.remove();
}
const deedOfAssignment = "/images/credit.png";
const deedOfAssignmentDummyDocument = (url:any) => {
const fileName = url.split("/").pop();
const aTag = document.createElement("a");
aTag.href = url;
aTag.setAttribute("download",fileName);
document.body.appendChild(aTag);
aTag.click();
aTag.remove();
}

  const [uploadedFileName, setUploadedFileName] = useState('');

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

  const handleFormSubmit = async (e: React.FormEvent) => {
    if (uploadedPropertySearchFormInput === '') {
      setUploadAttempted(true);
    } else {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://govland.onrender.com/v1/api/client/land_record', 
        {
         
            survey_plans_url: uploadedPropertySearchFormInput,
          
        
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success('Form submitted successfully');
        setIsModalVisible(true);
      } else {
        toast.error('Form submission failed');
      }
    } catch (error) {
      toast.error('An error occurred while submitting the form');
    }finally {
      setIsLoading(false); 
    }
  }

  };
   const closeModal = () => {
    setIsModalVisible(false); 
    router.push('/')
  };

    const handleApplicationForm = (file: any) => {
      setUploadedPropertySearchForm(file);
    
      if (file.file.status === 'done') {
        const response = file.file.response;
    
        if (response && response.success) {
          message.success(`${file.file.name} file uploaded successfully`);
          setUploadResponse(response);
          toast.success('file uploaded successfully');
          setUploadedFileName(file.file.name)
          setIsFileLoading(false);
          const uploadedFileId = response.data[0].id;
          setUploadedPropertySearchFormInput(uploadedFileId);
        } else {
          const errorMessage = response ? response.message : 'Unknown error';
          toast.error(`File upload failed: ${errorMessage}`);
          message.error(`${file.file.name} file upload failed.`);
          setUploadResponse(response);
          setIsFileLoading(false);
        }
      }else if (file.file.status === 'uploading') {
        setIsFileLoading(true);
      }
     
    };
  const propertySearch = {
      name: 'file',
      maxCount:1,
      headers: {
          authorization: `Bearer ${userToken}`, 
        },
      action: 'https://govservicesgeneral.onrender.com/v1/api/bucket/upload',
      onChange: handleApplicationForm,
      onDrop(e: any) {
      },
      
     
    };

  const handleBack = () => {
    router.back(); 
  };
  return (
   <ProtectedRoute>
    <div className="w-full min-h-[100vh] bg-[#F3F3F3] flex flex-col gap-6 justify-between items-center absolute z-[9999999]">
      <div className="w-full h-fit bg-[#073131]">
        <nav
          className={`w-[95%] mx-auto h-[70px] py-[12px] text-[#fff] flex justify-between items-center`}
        >
          <Link href="/" className={`lg:block hidden`}>
            <h3 className="text-[#fff] text-[1.5rem] lg:block hidden font-semibold">
              enugustate.gov.ng
            </h3>
          </Link>

          <div className="w-fit h-fit flex items-center">
            <div className="text-[#fff] flex flex-row items-center">
              <p>EN </p>
              <span>
                <MdKeyboardArrowDown color="#fff" />
              </span>
            </div>
            <BsGlobe color="#fff" className="m-2" />
          </div>
        </nav>
      </div>
      <div className="w-full h-fit flex flex-col gap-6 px-[8%]">
        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            className="p-3 border-[2px] border-[#08080C80] rounded-[50%]"
          >
            <MdOutlineArrowBackIosNew color="#08080C80" />
          </button>
          <button className="py-3 px-6 rounded-3xl bg-[#CF8900] flex justify-center items-center">
            <p className="text-[#fff] font-nunito">Save Draft</p>
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center bg-[#fff] rounded-t-2xl px-7 py-5">
            <div className="flex items-center justify-center">
                <Image src="/images/officeIcon.svg" width="66" height="66" alt=""  />
              
              <h2 className="font-bold font-cabinet text-xl ml-3">
                Office of the Surveyor General
              </h2>
            </div>
           
          </div>
          <div className="flex flex-col items-center gap-3 bg-[#fff] rounded-b-2xl px-7 py-5">
            <h3 className="text-[#12B97D] font-bold font-cabinet text-2xl text-center">
              Requirement Document
            </h3>
    <ToastContainer position="top-right" />
            
              <div className="w-full flex flex-col gap-3 mb-[2rem]">
                <label
                  htmlFor="dob"
                  className="text-[#434344] font-nunito font-medium text-center"
                >
                  Upload Survey Plans Or Deed Of Assignment
                </label>
                <form>
                  <Dragger {...propertySearch} className='relative border-none'>
          {uploadedPropertySearchForm ? (
            <>
            <div className="justify-between flex flex-row px-5 py-5">
              <span className='text-[24px] font-[400] text-center' >
              {isFileLoading ? (
                  <span>Uploading...</span>
                ) : (
                  <span className="flex flex-row gap-4"><Image src="/images/gallery.svg" width="32" height="32" alt="" />{uploadedFileName}</span>
                )}
              </span>
              
              <input
                type="hidden"
                name="uploadedLeaseAgreementInput"
                value={uploadedPropertySearchFormInput}
                onChange={(e) => ({ uploadedPropertySearchFormInput: e.target.value })} // Set the uploaded file ID here
              />
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
                  Pictures must be less than 2mb
                  </p>
                  <p className="ant-upload-hint">
                  in size
                  </p>
                  {uploadAttempted && (
                <p className="text-red-500">Please upload a file</p>
              )}
              </div>
              <div className="flex justify-center items-center relative">
                  <div className="bg-[#12B97D] py-3 px-7 rounded-full flex justify-center items-center absolute top-0">
                    <p className="text-[#fafafa]">Upload</p>
                  </div>
              </div>
            </>
          )}
            </Dragger>
            {uploadedPropertySearchForm ? (
           <div></div>
                   ) : (
                    <div className="flex flex-col gap-3 md:mt-8 mt-16">
                    <h5 className="font-bold font-nunito text-base text-[#073131] ml-3 text-center px-5 md:px-0">
                      Download Sample Document as a Guide
                    </h5>
                    <div className="w-full h-fit p-8 bg-[#eaf3f3] flex md:flex-row flex-col justify-between items-center rounded-3xl">
                      <div className="flex md:flex-row flex-col items-center">
                        <Image src="/images/gallery.svg" width="32" height="32" alt=""  />
                        <p className="font-bold font-nunito text-xl text-[#073131] ml-3 text-center">
                          Survey Plan Dummy Document
                        </p>
                      </div>
                      
                        <button onClick={() => {surveyPlanDummyDocument(surveyPlan)}} className="p-3 px-7 flex justify-center items-center bg-[#12B97D] text-[#fff] rounded-full">
                          <p>Download</p>
                        </button>
                   
                    </div>
                    <div className="w-full h-fit p-8 bg-[#eaf3f3] flex flex-col md:flex-row justify-between items-center rounded-3xl">
                      <div className="flex items-center md:flex-row flex-col">
                        <Image src="/images/gallery.svg" width="32" height="32" alt="" />
                        <p className="font-bold font-nunito text-xl text-[#073131] ml-3 text-center">
                          Deed Of Assignment Dummy Document
                        </p>
                      </div>
                        <button onClick={() => {deedOfAssignmentDummyDocument(deedOfAssignment)}} className="p-3 px-7 flex justify-center items-center bg-[#12B97D] text-[#fff] rounded-full">
                          <p>Download</p>
                        </button>
                     
                    </div>
                  </div>
                )}
            <button
              type="button"
              disabled={isLoading}
              onClick={handleFormSubmit}
              className="w-full py-[16px] bg-[#08080C80] rounded-3xl mt-10"
              >
              <p className="text-[#fff]">{isLoading ? "Processing..." : "Submit" }</p>
            </button>
            </form>
            <SuccessfulSubmissionModal visible={isModalVisible} onClose={closeModal} />
                
          </div>
        </div>
      </div>
      </div>
      <div className="w-full h-fit py-5 px-[7%] flex flex-col justify-center items-center bg-[#073131]">
        <section
          className={`flex flex-wrap w-full justify-center lg:justify-between items-center`}
        >
          <div className={`flex flex-col items-center justify-center`}>
            <Image
              width="10"
              height="10"
              src="/images/EnuguStateCoat.svg"
              alt="footer logo"
              className={`w-20`}
            />
            <h2
              className={`font-nunito text-2xl lg:max-w-[10rem] text-center text-[#FFFFF0]`}
            >
              Enugu State Government
            </h2>
          </div>

          <div className={`flex py-4`}>
            {icons.map((icon, index) => (
              <a
                key={index}
                href={icon.link}
                className={`mx-2 text-2xl font-bold text-[#FFFFF0]`}
              >
                {icon.icon}
              </a>
            ))}
          </div>
        </section>

        <div className={`bg-[#FFFFF0] h-[1px] my-7 w-full`}></div>

        <section
          className={`flex flex-wrap lg:flex-row flex-col justify-center items-center w-fit font-poppins text-xs`}
        >
          <p className={`lg:mr-2 text-[#FFFFF0]`}>
            Copyright &copy; 2021 U18 LLC. All rights reserved
          </p>

          <div className={`flex lg:py-0 py-2`}>
            {footerLinks.map((footerLink, index) => (
              <Link href={footerLink.route} key={index} className={`mx-3`}>
                <p className={`font-bold text-[#FFFFF0]`}>{footerLink.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default PreCertificateOfOccupancy;


