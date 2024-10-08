import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ImageSection from "@/components/ImageSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeAid",
  description: "This is Home for CodeAid",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <ImageSection />
      <Brands />
      <AboutSectionOne />
      <Testimonials />
      <Blog />
    </>
  );
}
