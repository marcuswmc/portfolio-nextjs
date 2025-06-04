import Social from "@/components/social";
// import { Button } from "../components/ui/button";
// import { FiDownload } from "react-icons/fi";
import Photo from "@/components/heroPhoto";
import Stats from "@/components/stats";
// import Link from "next/link";

// const cvPdfUrl = "/marcus-vinicius-cv-en.pdf";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row lg:flex-row items-center justify-between xl:pt-8 xl:pb-8">
          {/* text */}
          <div className="text-center xl:text-left lg:text-left order-2 xl:order-none lg:order-none">
            <span className="text-xl">Full Stack Web Developer</span>
            <h1 className="h1 mb-6">
              Hello, <br /> I&apos;m <span className="text-accent">Marcus</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I create modern interfaces and scalable solutions with a focus on
              the React ecosystem and UX/UI.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row lg:flex-row items-center gap-8">
              {/* <Link href={cvPdfUrl}>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link> */}
              <div className="mb-8 xl:mb-0 lg:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent texte-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none lg:order-none mb-8 xl:mb-0 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
