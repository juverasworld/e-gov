import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }:any) {
    const details = {
        name: "Ministry of Lands",
        url: "https://land.enugustate.gov.ng"
    }

    const getUserToken = () => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        return token;
      }
      return null;
    };
  
    const isAuthenticated = getUserToken();
  
  
    useEffect(() => {
        
      if (!isAuthenticated) {
        window.location.href = `https://e-gov-auth-fe.vercel.app/?auth=${btoa(JSON.stringify(details))}`;
      }
    }, []);
  
  
    return <>{children}</>;
  }