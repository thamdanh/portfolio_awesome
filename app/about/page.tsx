import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import { getTimeOfDayGreeting } from "app/lib/utils";
import React from "react";
import { CurrentlyPlayingBento } from "@/app/components/CurrentlyPlayingBento";
import { ConnectionsBento } from "@/app/components/ConnectionsBento";
import { ScrapbookBento } from "@/app/components/ScrapbookBento";
import { ShadowBox } from "@/app/components/ShadowBox";
import { Resume } from "app/components/Resume";
import { StatsBento } from "@/app/components/StatsBento";
import { CurrentlyReadingBento } from "@/app/components/CurrentlyReadingBento";
import { GridWrapper } from "@/app/components/GridWrapper";
import { AboutTrackPattern } from "@/app/components/AboutTrackPattern";
import { Photo } from "@/app/components/Photo";

export default function AboutPage() {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <div className="relative mt-14">
      <title>About | Tilly Danh</title>
      <div className="relative space-y-10 md:space-y-16">
        {/* Title */}
        <GridWrapper className="space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:px-24">
            <div className="order-2 mx-auto max-w-lg lg:order-1 lg:m-0 lg:max-w-3xl lg:pr-12">
              <div className="text-center text-sm font-medium text-indigo-600 lg:text-left">
                <span>{timeOfDayGreeting}</span>
              </div>
               <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl lg:text-left lg:text-6xl lg:leading-[64px]">
                I&apos;m Tilly, a QA engineer passionate about clean, reliable software.
              </h1>
            </div>
            <div className="order-1 my-12 flex-shrink-0 lg:order-2 lg:my-0">
              <div className="relative mx-auto w-full max-w-[400px]">
                <div className="relative grid grid-cols-3">
                  <div className="relative z-20 -translate-y-2">
                    <Photo
                      width={140}
                      height={140}
                      src="/tillydanh_headshot_2.png"
                      alt="Tilly Danh"
                      direction="left"
                    />
                  </div>
                  <div className="relative z-30">
                    <Photo
                      width={140}
                      height={140}
                      src="/tillydanh_headshot_1.png"
                      alt="Tilly Danh"
                      direction="right"
                    />
                  </div>
                  <div className="relative z-20 translate-y-4">
                    <Photo
                      width={140}
                      height={140}
                      src="/tillydanh_headshot_3.png"
                      alt="Tilly Danh"
                      direction="left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>

        <span className="absolute left-1/2 top-40 -translate-y-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        {/* About */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                Here&apos;s a glimpse into my journey and what quality means to me.
              </h2>
            </GridWrapper>
          </div>
          <div className="relative h-fit w-full overflow-hidden">
            <div className="absolute left-0 top-0 w-full md:left-4 lg:left-[355px] xl:left-[455px]">
              <AboutTrackPattern />
            </div>

            {/* Section 1 */}
            <div className="grid grid-cols-1 gap-8 py-12 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pb-20 xl:py-32">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/knights_kwest.jpeg"
                      alt="A headshot"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  My QA origins
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                I started my QA journey over 12 years ago, initially driven by a curiosity for how things break. That curiosity quickly evolved into a passion for maintaining product quality and creating seamless user experiences.
              </p>
              <p className="mb-6 text-base leading-8 text-text-secondary">
                From manual testing to implementing automation suites, I’ve worked closely with engineers, designers, and product managers to ship reliable releases.
              </p>
              </div>
              <div className="hidden lg:order-1 lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/tillydanh_headshot_4.png"
                    alt="A headshot"
                  />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 gap-8 py-24 lg:grid-cols-2 lg:items-center lg:justify-between lg:pl-12">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/tilly_danh_wild_jungle.png"
                      alt="Speaking at C3 Conf!"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                Philosophy on Quality
              </h2>
              <p className="mb-6 text-base leading-8 text-text-secondary">
                Quality is more than just finding bugs—it&apos;s about empathy, clear communication, and building trust in every interaction. I believe QA plays a vital role in shaping the user experience.
              </p>
              <p className="mb-6 text-base leading-8 text-text-secondary">
                I focus on the end-to-end journey: from early test planning and risk analysis to post-release verification and automation.
              </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/tillydanh_headshot_3.png"
                    alt="Speaking at C3 Conf!"
                  />
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid grid-cols-1 gap-8 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between xl:py-24">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/family_dalat.png"
                      alt="A headshot"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">Life Beyond the Screen</h2>
<p className="mb-6 text-base leading-8 text-text-secondary">
Quality assurance is all about understanding complexity — something life has also taught me in its own way. Along my journey, I&apos;ve shared life with three partners, each chapter shaping the person I am today.
</p>

              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/family_dalat.png"
                    alt="A headshot"
                  />
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pl-12 xl:py-24">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/tillydanh_headshot_2.png"
                      alt="A headshot"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Today
                </h2>
                 <p className="mb-6 text-base leading-8 text-text-secondary">
                Currently, I’m working on enterprise-scale quality frameworks and mentoring the next generation of QA engineers. My focus is automation, performance testing, and improving feedback loops.
              </p>
              <p className="mb-6 text-base leading-8 text-text-secondary">
                Outside work, I enjoy reading, journaling, and exploring nature with my kids.
              </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/tillydanh_headshot_2.png"
                    alt="A headshot"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Experience</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                My work history and achievements timeline.
              </h2>
            </GridWrapper>
          </div>
        </div>
        <div className="space-y-16">
          <GridWrapper>
            <Resume />
          </GridWrapper>
          {/* <div className="flex justify-center">
            <Button variant="secondary">Download Resume</Button>
          </div> */}
        </div>

        <section className="relative space-y-16">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>More</span>
              </div>
            </GridWrapper>

            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary">
                Here&apos;s what sets me apart and makes me unique
              </h2>
            </GridWrapper>
          </div>

          {/* About Grid */}
          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
              <div className="lg:col-span-3 lg:row-span-6">
                <CurrentlyPlayingBento />
              </div>
              <div className="hidden lg:col-span-7 lg:row-span-5 lg:block">
                <ScrapbookBento />
              </div>
              <div className="hidden lg:col-span-2 lg:col-start-11 lg:row-span-10 lg:block lg:min-h-[50px]">
                <CurrentlyReadingBento />
              </div>
              <div className="lg:col-span-7 lg:row-span-8">
                <ConnectionsBento linkTo="/connections" />
              </div>

              <div className="lg:col-span-3 lg:row-span-4">
                <StatsBento />
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* Newsletter */}
        <NewsletterSignUp />
      </div>
    </div>
  );
}