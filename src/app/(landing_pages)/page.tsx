'use client'

import {
  GetInTouch,
  HomeHeroSection,
  Mandate,
  Newsletter,
  Opportunities,
  Services,
  WhoWeAre,
  UrbanDevelopment,
  DepartmentAndUnits
} from "@/components/templates";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    let token = searchParams.get('token');

    if (token) {
      try {
        localStorage.setItem('token', token);
      } catch (error) {
        console.error(error);
      }

      router.replace(pathname);
    }
  }, [])

  return (
    <div className="overflow-x-clip">
      <HomeHeroSection />
      <WhoWeAre />
      <UrbanDevelopment/>
      <Mandate />
      <Services />
      <DepartmentAndUnits/>
      <Opportunities />
      <GetInTouch />
      <Newsletter />
    </div>
  );
}
