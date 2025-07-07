import { ResumeData } from "../lib/resume/types";
import { Timeline } from "./Timeline";
import React from "react";

const resumeData: ResumeData = {
  experiences: [
    {
      company: "Leadership Phase",
      period: "(2021-Present)",
      positions: [
        {
          title: "Senior Tester, Team Lead",
          description: [
            `<div class="phase">

  <div class="project">
    <h3>LTI – Open University</h3>
    <div class="meta">
      Duration: Feb 2016 – Jan 2018<br>
      Tech: PHP, Moodle, Java, HTML, JavaScript<br>
      Link: <a href="https://learn2acct.open.ac.uk/" target="_blank">learn2acct.open.ac.uk</a>
    </div>
    <p>Description: Leading QA for university’s digital learning content tools.</p>
    <ul>
      <li>Created and reviewed test cases</li>
      <li>Led 4 QA members and handled sprint planning</li>
      <li>Tracked and reported status using TFS</li>
      <li>Raised risks and proposed improvements</li>
    </ul>
  </div>
</div>`,
          ],
        },
      ],
    },
    {
      company: "Growth Phase (2014–2016)\n",
      period: "2018–Present",
      positions: [
        {
          title: "QA Consultant / Senior QA / Test Lead",
          description: [
            `
    <div class="project">
      <h3>FuelCloud</h3>
      <div class="meta">Jan 2015 – Mar 2016 · QC, Project Prime · Drupal, Ecommerce, Mobile</div>
      <p>Smart fuel tracking and control system for mobile and iPad.</p>
      <ul>
        <li>Led QA cycle definition and timeline planning</li>
        <li>Tested mobile and web apps for functionality</li>
        <li>Prepared environments, reviewed team outputs</li>
      </ul>
    </div>
    <div class="project">
      <h3>Equilibrium</h3>
      <div class="meta">Jun 2015 – Oct 2016 · QC · Drupal, Magento</div>
      <p>Online healthcare scheduling and nutrition eCommerce app.</p>
      <ul>
        <li>Created and executed test cases</li>
        <li>Validated system behavior against requirements</li>
        <li>Reported test results and ensured quality</li>
      </ul>
    </div>
    <div class="project">
      <h3>Regal Art</h3>
      <div class="meta">Aug 2015 – Dec 2015 · QC · Magento ·
        <a href="https://www.regalgift.com/" target="_blank">regalgift.com</a>
      </div>
      <p>eCommerce site for home décor and gifts.</p>
      <ul>
        <li>Reviewed test outlines and tracked progress</li>
        <li>Reported status and managed bug triage</li>
      </ul>
    </div>

    <div class="project">
      <h3>VintageMagic</h3>
      <div class="meta">Apr 2015 – Aug 2015 · QC, Project Prime · Magento, WordPress ·
        <a href="http://www.vintagemagic.com/" target="_blank">vintagemagic.com</a>
      </div>
      <p>eCommerce and blog for magician tools and arts.</p>
      <ul>
        <li>Led meetings, testing, and checklist creation</li>
        <li>Tested across web, mobile, and desktop</li>
      </ul>
    </div>

    <div class="project">
      <h3>GalaSport</h3>
      <div class="meta">Oct 2014 – Mar 2015 · QC · Magento ·
        <a href="http://www.galasport.mx/catalogo" target="_blank">galasport.mx</a>
      </div>
      <p>Magento web application selling sports products.</p>
      <ul>
        <li>Wrote and executed test plans</li>
        <li>Logged bugs and tracked test results</li>
      </ul>
    </div>`,
          ],
        },
      ],
    },
    {
      company: "Foundation Phase",
      period: "(2012–2014)",
      positions: [
        {
          title: "QC",
          description: [
            `
<div class="project">
      <h3>Vinarex</h3>
      <div class="meta">Mar 2014 – Apr 2015 · QC · Web Application</div>
      <p>Money transfer platform licensed for European usage.</p>
      <ul>
        <li>Verified transactions and workflows</li>
        <li>Created test cycles and executed QA tests</li>
      </ul>
    </div>
    <div class="project">
      <h3>DDI</h3>
      <div class="meta">Mar 2014 – Jul 2014 · QC · Web Application</div>
      <p>Oil rig status reporting and technician support tool.</p>
      <ul>
        <li>Created module-specific test cases</li>
        <li>Logged bugs and handled Q&A flows</li>
      </ul>
    </div>
<div class="project">
      <h3>API CCTS</h3>
      <div class="meta">Jan 2012 – Oct 2014 · QC · Web Application ·
        <a href="https://app.apicorp.com/login.php" target="_blank">app.apicorp.com</a>
      </div>
      <p>Complaint resolution platform for multi-department task tracking.</p>
      <ul>
        <li>Designed test plans and reviewed test cases</li>
        <li>Reported status to team and stakeholders</li>
      </ul>
    </div>
    `,
          ],
        },
      ],
    },
    /*{
      company: "projekt202",
      period: "2018 - 2019",
      positions: [
        {
          title: "UI Developer",
          description: [
            ``,
          ],
        },
      ],
    },*/
  ],
  avatarUrl: "/tillydanh_headshot_1.png",
};

export function Resume() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map((experience) => (
              <div
                key={experience.company}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
              >
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.period}</p>
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div
                      key={`${experience.company}-${index}`}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold">
                        {position.title}
                      </h4>
                      <div className="space-y-3">
                        {position.description.map((desc, i) => (
                          <div key={i} dangerouslySetInnerHTML={{ __html: desc }} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)]">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}