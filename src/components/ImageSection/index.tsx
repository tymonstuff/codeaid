"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const ImageSection = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Community Driven"
          paragraph="We thrive on a community-focused approach driven by our volunteers. Our events are led by those who are passionate about sharing knowledge and learning together."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div
              className="relative mx-auto overflow-hidden rounded-md"
              style={{ maxWidth: "770px", width: "100%" }} // Original width is kept
              data-wow-delay=".15s"
            >
              <div className="relative w-full" style={{ height: "auto" }}>
                <Image
                  src="/images/video/community.jpg"
                  alt="community image"
                  width={1024}
                  height={768}
                  layout="responsive" // Maintain the image's aspect ratio
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
                </div>
              </div>
              {/* Subtext under the image */}
              <p className="mt-4 text-center text-sm text-gray-500">
                CodeAid at{" "}
                <Link
                  className="text-primary underline underline-offset-2"
                  href="https://gdg.community.dev/events/details/google-gdg-london-presents-women-techmakers-international-womens-day-daretobe/"
                >
                  Google Women Techmakers
                </Link>{" "}
                - International Women&apos;s Day #DareToBe
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default ImageSection;
