import type { Metadata } from "next";

import HeroSection from "@/components/organism/HeroSection";
import ProjectsSection from "@/components/organism/ProjectsSection";
import PageTemplate from "@/components/layouts/PageTemplate";
import TechStackSection from "@/components/organism/TechStackSection";
import Image from "next/image";
import Link from "next/link";
import AboutSection from "@/components/organism/AboutSection";
import CTASection from "@/components/organism/CTASection";

export const metadata: Metadata = {
  title: "Home - Portofolio Faturrahman Putra",
};

export default function Home() {
  return (
    <PageTemplate>
      <HeroSection />
      <ProjectsSection />
      <TechStackSection />
      <AboutSection />
      <CTASection />
    </PageTemplate>
  );
}
