import AboutUs from "@/components/about-us";
import HomePage from "@/components/homepage";
import OurWork from "@/components/our-work";
import Services from "@/components/services";
import Testimonial from "@/components/testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HomePage />
      <OurWork />
      <Services />
      <AboutUs />
      <Testimonial />
      
    </main>
  );
}
