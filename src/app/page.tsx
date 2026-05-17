import type { Metadata } from "next";

import Navbar from "@/components/organism/Navbar";
import HeroSection from "@/components/organism/HeroSection";
import ProjectsSection from "@/components/organism/ProjectsSection";

import PageTemplate from "@/components/layouts/PageTemplate";

export const metadata: Metadata = {
  title: "Home - Portofolio Faturrahman Putra",
};

export default function Home() {
  return (
    <PageTemplate>
      <HeroSection />
      <ProjectsSection />
    </PageTemplate>
  );
}
