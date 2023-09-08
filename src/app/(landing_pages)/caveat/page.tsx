"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGlobe, BsMoonFill } from "react-icons/bs";
import { MdKeyboardArrowDown, MdOutlineArrowBackIosNew } from "react-icons/md";
import { useState } from "react";
import { RxTwitterLogo } from "react-icons/rx";
import { BiLogoInstagram } from "react-icons/bi";
import { AiOutlineBehance, AiOutlineDribbble } from "react-icons/ai";
import { PiFacebookLogo } from "react-icons/pi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { Spin, Upload ,message} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';
import Notification from "@/components/molecules/notificationModal/notification";
import { Button, Modal } from 'antd';
import SuccessfulSubmissionModal from "@/components/molecules/notificationModal/notification";
import { useRouter } from 'next/navigation';




const { Dragger } = Upload;


const Caveat = () => {
  const [uploadAttempted, setUploadAttempted] = useState(false);
 const [isModalVisible, setIsModalVisible] = useState(false);
  const [uploadedApplicationForm, setUploadedApplicationForm] = useState(null);
  const [uploadedDeedOfAssignmentInput, setUploadedApplicationFormInput] = useState("");
  const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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

  const [formStages, setFormStages] = useState(0);

  const nextForm = () => {
    if (formStages < 2) {
      setFormStages(formStages + 1);
    }
  };

  const previousForm = () => {
    if (formStages > 0) {
      setFormStages(formStages - 1);
    }
  };


  const handleFormSubmit = async (e: React.FormEvent) => {
    if (uploadedDeedOfAssignmentInput === '') {
      setUploadAttempted(true);
    } else {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://land-api.enugustate.gov.ng/v1/api/client/property_search', // Replace with the appropriate endpoint
        {
          documents:{
               propertySearchDocument: uploadedDeedOfAssignmentInput,
          }
          // Other form data if needed
        },
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDk3NGFiZWRiODFhOGMxMDQ5YTY3MCIsInVzZXJuYW1lIjoidGVzdGVyMSIsImVtYWlsIjoidGVzdDFAdmludG9tYXBlci5jb20iLCJpYXQiOjE2OTI3MDk0MjIsImV4cCI6MTY5NTM4NzgyMn0.DZ96Cq3tWRAwIOvvo0DqeMhYMwroZQGCCx4A-E6aAmg', // Replace with your actual token
            // Other headers if needed
          },
        
        }
      );

      if (response.status === 200) {
        console.log('Form submitted successfully:', response.data);
      } else {
        console.log('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
     
    }
  }
  };
  const closeModal = () => {
    setIsModalVisible(false); 
    router.push('/')
  };
  
    const handleApplicationForm = (file: any) => {
      setUploadedApplicationForm(file);
    
      if (file.file.status === 'done') {
        const response = file.file.response;
    
        if (response && response.success) {
          message.success(`${file.file.name} file uploaded successfully`);
          console.log('Response data:', response.data);
          console.log(uploadedDeedOfAssignmentInput);
    
          const uploadedFileId = response.data[0].id;
          setUploadedApplicationFormInput(uploadedFileId);
          // updateFields({ uploadedApplicationFormInput: response.data[0].id });
        } else {
          message.error(`${file.file.name} file upload failed.`);
        }
      }
    };
  const deedOfAssignment = {
      name: 'file',
      maxCount:1,
      headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUxNDZlMzEyOTBmY2UyN2ExOWRhMTAiLCJ1c2VybmFtZSI6InRlc3RlcjEiLCJlbWFpbCI6InRlc3QxQHZpbnRvbWFwZXIuY29tIiwiaWF0IjoxNjkyNDg1Mzc5LCJleHAiOjE2OTUxNjM3Nzl9.FWK8B2jwH9SVFG377-DVPn8TRUzS1kNrNCRxgzjAoBA`, // If needed
        },
      action: 'https://services-api.enugustate.gov.ng/v1/api/bucket/upload',
      // onRemove:handleFileRemove,
      onChange: handleApplicationForm,
      onDrop(e: any) {
      },
      showUploadList:false
     
    };
  return (
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
            onClick={previousForm}
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
              <div className="p-3 bg-[#D5E4E480] rounded-[50%]">
                <HiOutlineOfficeBuilding color="#12B97D" size={32} />
              </div>
              <h2 className="font-bold font-cabinet text-xl ml-3">
                Ministry of Land
              </h2>
            </div>
          </div>
            <div className="flex flex-col items-center gap-3 bg-[#fff] rounded-b-2xl px-7 py-5">
            <div className="w-full flex flex-col items-center gap-5 bg-[#fff] rounded-b-2xl  py-5">
              <h3 className="text-[#12B97D] font-bold font-cabinet text-2xl">
                   Requirement Document
              </h3>
                <div className="w-full flex flex-col gap-3 mb-[2rem]">
                  <label
                    htmlFor="dob"
                    className="text-[#7474b6] font-nunito font-medium"
                  >
                    Application Letter
                  </label>
              <form>
                  <Dragger {...deedOfAssignment} className='relative border-none'>
          {uploadedApplicationForm ? (
            <>
            <div className="justify-between flex flex-row px-5 py-5">
              <span style={{fontFamily: 'Livvic',fontWeight: '400',fontSize: '14px',color:'#FF6767'}}  >
                Remove File
              </span>
              {/* <Spin indicator={antIcon} /> */}
              <input
                type="hidden"
                name="uploadedLeaseAgreementInput"
                value={uploadedDeedOfAssignmentInput}
                onChange={(e) => ({ uploadedDeedOfAssignmentInput: e.target.value })} // Set the uploaded file ID here
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
                  Pictures must be less than 30mb
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
            <button
              type="button"
              
              onClick={handleFormSubmit}
              className="w-full py-[16px] bg-[#08080C80] rounded-3xl mt-10"
              >
              <p className="text-[#fff]">Submit</p>
            </button>
            </form>
            <SuccessfulSubmissionModal visible={isModalVisible} onClose={closeModal} />
                </div>
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
  );
};

export default Caveat;
