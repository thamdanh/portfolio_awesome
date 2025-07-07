import Image from 'next/image';
import type { Metadata } from "next";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import { GridWrapper } from "@/app/components/GridWrapper";

type Connection = {
  name: string;
  profile_picture: string;
  socialLink: string;
  isConnected: boolean;
  connectedDate?: Date;
};

export const metadata: Metadata = {
  title: "Connections | Your App Name",
  description: "Manage your connections and network",
};

const connections: Connection[] = [
  {
    name: "Jack Bray",
    profile_picture: "/linkedin/jack-gray.jpeg",
    // connectedDate: new Date("1/30/2021"),
    socialLink: "https://www.linkedin.com/in/jack-bray/",
    isConnected: true,
  },
  {
    name: "Dang Khoa",
    profile_picture: "/linkedin/dang-khoa.jpeg",
    // connectedDate: new Date("11/23/2022"),
    socialLink: "https://www.linkedin.com/in/danghodangkhoa/",
    isConnected: true,
  },
  {
    name: "Ly Phuc Nguyen",
    profile_picture: "/linkedin/ly_phuc_nguyen1220.jpeg",
    // connectedDate: new Date("11/23/22"),
    socialLink: "https://www.linkedin.com/in/ly-phuc-nguyen-8b48a1220/",
    isConnected: true,
  },
  {
    name: "Telvin Nguyen",
    profile_picture: "/linkedin/telvin-nguyen.jpeg",
    // connectedDate: new Date("02/13/2016"),
    socialLink: "https://www.linkedin.com/in/telvin-nguyen-547176121/",
    isConnected: true,
  },
  {
    name: "Tammy Nguyen",
    profile_picture: "/linkedin/tammy-nguyen.jpeg",
    // connectedDate: new Date("01/15/2023"),
    socialLink: "https://www.linkedin.com/in/tamvtnguyen/",
    isConnected: true,
  },
  {
    name: "María Gmez",
    profile_picture: "/linkedin/maria-gomez.jpeg",
    // connectedDate: new Date("01/15/2023"),
    socialLink: "https://www.linkedin.com/in/mar%C3%ADa-g%C3%B3mez-20706585/",
    isConnected: true,
  },
  {
    name: "Benita Dadson",
    profile_picture: "/linkedin/benita-dadson.jpeg",
    // connectedDate: new Date("01/15/2023"),
    socialLink: "https://www.linkedin.com/in/benita-dadson-76719b161/",
    isConnected: true,
  },
  {
    name: "Moganti Nehanth",
    profile_picture: "/linkedin/moganti-nehanth.jpeg",
    // connectedDate: new Date("01/15/2023"),
    socialLink: "https://www.linkedin.com/in/moganti-nehanth-3494a6201/",
    isConnected: true,
  },
  {
    name: "Syed Rehan Alam",
    profile_picture: "/linkedin/syed-rehan-alam.jpeg",
    // connectedDate: new Date("01/15/2023"),
    socialLink: "https://www.linkedin.com/in/syed-rehan-alam/",
    isConnected: true,
  },
  {
    name: "Ravi B.",
    profile_picture: "/linkedin/ravi-b-dot.jpeg",
    // connectedDate: new Date("01/15/2023"),
    socialLink: "https://www.linkedin.com/in/ravitrb/",
    isConnected: true,
  },
  {
    name: "Jazmine Green",
    profile_picture: "/linkedin/jazmine-green.jpeg",
    // connectedDate: new Date("01/15/2023"),
    socialLink: "https://www.linkedin.com/in/jazmine-green-063714141/",
    isConnected: true,
  },
  {
    name: "Tonya (Latonya) Cox",
    profile_picture: "/linkedin/latonyacox15.jpeg",
    // connectedDate: new Date("01/15/2023"),
    socialLink: "https://www.linkedin.com/in/latonyacox15/",
    isConnected: true,
  },
  {
    name: "Tatyana Beasley",
    profile_picture: "/linkedin/tatyana-beasley.jpeg",
    // connectedDate: new Date("01/30/2024"),
    socialLink: "https://www.linkedin.com/in/tatyana-beasley-59a443230/",
    isConnected: true,
  },
  {
    name: "Oliver Richard",
    profile_picture: "/linkedin/oliver-richard.jpeg",
    // connectedDate: new Date("01/30/2024"),
    socialLink: "https://www.linkedin.com/in/olivier-richard-b359761/",
    isConnected: true,
  },
  {
    name: "Kelly Parker",
    profile_picture: "/linkedin/kelly-parker.jpeg",
    // connectedDate: new Date("01/30/2024"),
    socialLink: "https://www.linkedin.com/in/kelly-parker-38164931/",
    isConnected: true,
  },
  {
    name: "Aurianne BEC",
    profile_picture: "/linkedin/aurianne-bec.jpeg",
    // connectedDate: new Date("01/29/2024"),
    socialLink: "https://www.linkedin.com/in/aurianne-bec/",
    isConnected: true,
  },
  {
    name: "Jean-Marie Caoudal",
    profile_picture: "/linkedin/jean-marie-caoudal.jpeg",
    // connectedDate: new Date("01/29/2024"),
    socialLink: "https://www.linkedin.com/in/jean-marie-caoudal/",
    isConnected: true,
  },
  {
    name: "Nicolas Berger",
    profile_picture: "/linkedin/nicolas-berger.jpeg",
    // connectedDate: new Date("01/29/2024"),
    socialLink: "https://www.linkedin.com/in/nicolas-berger-b3b704306/",
    isConnected: true,
  },
  {
    name: "Laura Wolf",
    profile_picture: "/linkedin/laura-wolf.jpeg",
    // connectedDate: new Date("12/05/24"),
    socialLink: "https://www.linkedin.com/in/laurawolf2/",
    isConnected: true,
  },
  {
    name: "Boris Chaikin",
    profile_picture: "/linkedin/boris-chaikin.jpeg",
    // connectedDate: new Date("12/05/24"),
    socialLink: "https://www.linkedin.com/in/boris-chaikin/",
    isConnected: true,
  },
  {
    name: "Maxim Vinnikov",
    profile_picture: "/linkedin/maxim-vinnikov.jpeg",
    // connectedDate: new Date("12/04/24"),
    socialLink: "https://www.linkedin.com/in/maxim-vinnikov/",
    isConnected: true,
  },
  {
    name: "Evgeniy G",
    profile_picture: "/linkedin/evgeniy-g.jpeg",
    socialLink: "https://www.linkedin.com/in/evgeniy-g-496a0b113/",
    isConnected: true,
  },
  {
    name: "Max Potomkin",
    profile_picture: "/linkedin/potyomkin.jpeg",
    socialLink: "https://www.linkedin.com/in/potyomkin/",
    isConnected: true,
    // connectedDate: new Date("03/26/2025"),
  },
  {
    name: "Maks Pastukh",
    profile_picture: "/linkedin/maks-pastukh.jpeg",
    socialLink: "https://www.linkedin.com/in/maks-pastukh-892b90121/",
    isConnected: true,
  },
  {
    name: "Bahram Salimov",
    profile_picture: "/linkedin/bahram-salimov.jpeg",
    socialLink: "https://www.linkedin.com/in/bahram-salimov-1304b015a/",
    isConnected: true,
  },
  {
    name: "Aly Wilhelm",
    profile_picture: "/linkedin/aly-wilhelm.jpeg",
    socialLink: "https://www.linkedin.com/in/aly-wilhelm-95b299114/",
    isConnected: true,
  },
  {
    name: "Robert Bonner",
    profile_picture: "/linkedin/robert_bonner.jpeg",
    socialLink: "https://www.linkedin.com/in/robert-bonner-09b4a0b2/",
    isConnected: true,
  },
  {
    name: "Artem Hvozdov",
    profile_picture: "/linkedin/artem_hovozdov.jpeg",
    socialLink: "https://www.linkedin.com/in/artem-hvozdov-552716187/",
    isConnected: true,
  },
  {
    name: "Michelle Shiller",
    profile_picture: "/linkedin/michelle-shiller.jpeg",
    socialLink: "https://www.linkedin.com/in/michelle-shiller-59782650/",
    isConnected: true,
  },
  {
    name: "Kendra Lawson",
    profile_picture: "/linkedin/kendra-lawson.jpeg",
    socialLink: "https://www.linkedin.com/in/kendra-lawson-7085487/",
    isConnected: true,
  },
  {
    name: "Exaucee Bokanya",
    profile_picture: "/linkedin/exaucee-bokanya.jpeg",
    socialLink: "https://www.linkedin.com/in/exaucee-bokanya/",
    isConnected: true,
  },
  {
    name: "Andrew Alexander",
    profile_picture: "/linkedin/andrew-alexander.jpeg",
    socialLink: "https://www.linkedin.com/in/andrewa26/",
    isConnected: true,
  },
  {
    name: "Sergey Grigorenko",
    profile_picture: "/linkedin/sergey-grigorenko.jpeg",
    socialLink: "https://www.linkedin.com/in/sergeygrigorenko/",
    isConnected: true,
  },
  {
    name: "Mariia Omelchenko",
    profile_picture: "/linkedin/mariia-omelchenko.jpeg",
    socialLink: "https://www.linkedin.com/in/mariia-omelchenko-963b95170/",
    isConnected: true,
  },
  {
    name: "Tatsiana Rysevets",
    profile_picture: "/linkedin/tatsiana-rysevets.jpeg",
    socialLink: "https://www.linkedin.com/in/tatsiana-rysevets-956438204/",
    isConnected: true,
  },
  {
    name: "Jay Shoumaker",
    profile_picture: "/linkedin/jay-shoumaker.jpeg",
    socialLink: "https://www.linkedin.com/in/jay-shoumaker-b60124187/",
    isConnected: true,
  },
  {
    name: "Grace Lam",
    profile_picture: "/linkedin/grace-t-lam.jpeg",
    socialLink: "https://www.linkedin.com/in/grace-t-lam/",
    isConnected: true,
  },
  {
    name: "Christine Doan",
    profile_picture: "/linkedin/christinedoan.jpeg",
    socialLink: "https://www.linkedin.com/in/christinedoan/",
    isConnected: true,
  },
  {
    name: "Christy Nguyen",
    profile_picture: "/linkedin/christynguyenn.jpeg",
    socialLink: "https://www.linkedin.com/in/christynguyenn/",
    isConnected: true,
  },
  {
    name: "Iryna Ashyrova",
    profile_picture: "/linkedin/irynaashyrova.jpeg",
    socialLink: "https://www.linkedin.com/in/irynaashyrova/",
    isConnected: true,
  },
  {
    name: "Tatiana Ventsko",
    profile_picture: "/linkedin/tatiana-ventsko.jpeg",
    socialLink: "https://www.linkedin.com/in/tatiana-ventsko/",
    isConnected: true,
  },
  {
    name: "Natalia Melnyk",
    profile_picture: "/linkedin/natalia-melnyk.jpeg",
    socialLink: "https://www.linkedin.com/in/natalia-melnyk-427353115/",
    isConnected: true,
  },
  {
    name: "Garry Harris",
    profile_picture: "/linkedin/garry-harris.jpeg",
    socialLink: "https://www.linkedin.com/in/garry-harris-88609a11a/",
    isConnected: true,
  },
  {
    name: "Alexios Kechagias",
    profile_picture: "/linkedin/alexios-kechagias.jpeg",
    socialLink: "https://www.linkedin.com/in/alexios-kechagias-1590911ab/",
    isConnected: true,
  },
  {
    name: "Samantha Sullivan",
    profile_picture: "/linkedin/samantha-sullivan.jpeg",
    socialLink: "https://www.linkedin.com/in/samantha-sullivan-aa206658/",
    isConnected: true,
  },
  {
    name: "Colm Whelan",
    profile_picture: "/linkedin/whelancolm.jpeg",
    socialLink: "https://www.linkedin.com/in/whelancolm/",
    isConnected: true,
  },
  {
    name: "Daniel Bennett",
    profile_picture: "/linkedin/daniel-bennett.jpeg",
    socialLink: "https://www.linkedin.com/in/daniel-bennett-ba647165/",
    isConnected: true,
  },
  {
    name: "Arvin M.",
    profile_picture: "/linkedin/arvin-mahmoudi.jpeg",
    socialLink: "https://www.linkedin.com/in/arvin-mahmoudi/",
    isConnected: true,
    // connectedDate: new Date("03/24/2025"),
  },
  {
    name: "Jarmaine Hassan Morrow",
    profile_picture: "/linkedin/jarmaine-hassan-morrow.jpeg",
    socialLink: "https://www.linkedin.com/in/jarmaine-hassan-morrow-a198a9115/",
    isConnected: true,
    // connectedDate: new Date("03/24/2025"),
  },
  {
    name: "Kavonte Pitts",
    profile_picture: "/linkedin/kavonte-pitts.jpeg",
    socialLink: "https://www.linkedin.com/in/kavonte-pitts/",
    isConnected: true,
    // connectedDate: new Date("03/26/2025"),
  },
  {
    name: "Juan Camilo Gil",
    profile_picture: "/linkedin/juan-camilo-gil.jpeg",
    socialLink: "https://www.linkedin.com/in/juan-camilo-gil-207614204/",
    isConnected: true,
  },
  {
    name: "Heilin Buitrago",
    profile_picture: "/linkedin/heilin-buitrago.jpeg",
    socialLink: "https://www.linkedin.com/in/heilin-buitrago-aa6705197/",
    isConnected: true,
  },
  {
    name: "Julieth Herrera",
    profile_picture: "/linkedin/julieth-herrera-sanchez.jpeg",
    socialLink: "https://www.linkedin.com/in/julieth-herrera-sanchez-14733a1b2/",
    isConnected: true,
  },
  {
    name: "Julian David Ruda Giraldo",
    profile_picture: "/linkedin/julian-david-ruda-giraldo.jpeg",
    socialLink: "https://www.linkedin.com/in/julian-david-ruda-giraldo-b4325a200/",
    isConnected: true,
  },
  {
    name: "Sterling Johnson",
    profile_picture: "/linkedin/johnsonsterling.jpeg",
    socialLink: "https://www.linkedin.com/in/johnsonsterling/",
    isConnected: true,
  },
  {
    name: "Caroline Redd",
    profile_picture: "/linkedin/caroline-redd.jpeg",
    socialLink: "https://www.linkedin.com/in/caroline-redd-68802a10a/",
    isConnected: true,
  },
  {
    name: "Robyn Bussey",
    profile_picture: "/linkedin/robyn-bussey.jpeg",
    socialLink: "https://www.linkedin.com/in/robyn-bussey-91b27622/",
    isConnected: true,
  },
  {
    name: "Bhumika Bhandari",
    profile_picture: "/linkedin/bhumika-bhandari.jpeg",
    socialLink: "https://www.linkedin.com/in/bhumika-bhandari/",
    isConnected: true,
  },
  {
    name: "Yeshwant Dawson",
    profile_picture: "/linkedin/yeshwant-dawson.jpeg",
    socialLink: "https://www.linkedin.com/in/yeshwant-dawson/",
    isConnected: true,
  },
  {
    name: "Emily C.",
    profile_picture: "/linkedin/chan-emily.jpeg",
    socialLink: "https://www.linkedin.com/in/chan-emily6096/",
    isConnected: true,
  },
  {
    name: "Matthew Lu",
    profile_picture: "/linkedin/mattlu1.jpeg",
    socialLink: "https://www.linkedin.com/in/mattlu1/",
    isConnected: true,
  },
  {
    name: "Brendan Lo",
    profile_picture: "/linkedin/brendan-lo.jpeg",
    socialLink: "https://www.linkedin.com/in/brendan-lo/",
    isConnected: true,
  },
  {
    name: "Kanisha Ahmed",
    profile_picture: "/linkedin/kanisha-ahmed.jpeg",
    socialLink: "https://www.linkedin.com/in/kanisha-ahmed-7688ba1b2/",
    isConnected: true,
  },
  {
    name: "Ethan Knight-Scott",
    profile_picture: "/linkedin/ethan-knight-scott.jpeg",
    socialLink: "https://www.linkedin.com/in/ethan-knight-scott-3036bb17b/",
    isConnected: true,
  },
  {
    name: "Juan David Bedoya Correa",
    profile_picture: "/linkedin/juan-david-bedoya.jpeg",
    socialLink: "https://www.linkedin.com/in/juan-david-bedoya-correa-10a264138/",
    isConnected: true,
  },
  {
    name: "Lorena Osorio",
    profile_picture: "/linkedin/lorena-osorio.jpeg",
    socialLink: "https://www.linkedin.com/in/lorena-osorio-35422620a/",
    isConnected: true,
  },
  {
    name: "Andury Leon",
    profile_picture: "/linkedin/andury-leon.jpeg",
    socialLink: "https://www.linkedin.com/in/andury-leon-9683ab19b/",
    isConnected: true,
  },
  {
    name: "Danielle Wright",
    profile_picture: "/linkedin/danielle-wright1.jpeg",
    socialLink: "https://www.linkedin.com/in/danielle-wright1/",
    isConnected: true,
  },
  {
    name: "William Montealegre",
    profile_picture: "/linkedin/william-montealegre.jpeg",
    socialLink: "https://www.linkedin.com/in/william-montealegre-b642a1123/",
    isConnected: true,
  },
  {
    name: "John Hidalgo",
    profile_picture: "/linkedin/john-hidalgo.jpeg",
    socialLink: "https://www.linkedin.com/in/john-hidalgo-7574031b1/",
    isConnected: true,
  },
  {
    name: "Cheng Shi",
    profile_picture: "/linkedin/ivychengshi.jpeg",
    socialLink: "https://www.linkedin.com/in/ivychengshi/",
    isConnected: true,
  },
  {
    name: "Jiacheng (Ray) Zhang",
    profile_picture: "/linkedin/jiacheng-zhang.jpeg",
    socialLink: "https://www.linkedin.com/in/jiacheng-zhang-/",
    isConnected: true,
  },
  {
    name: "Janell Baucom",
    profile_picture: "/linkedin/janell-baucom.jpeg",
    socialLink: "https://www.linkedin.com/in/janell-baucom-0b9a3049/",
    isConnected: true,
  },
  {
    name: "Amy Marie Frost",
    profile_picture: "/linkedin/frostedamy.jpeg",
    socialLink: "https://www.linkedin.com/in/frostedamy/",
    isConnected: true,
  },
  {
    name: "Jennifer Morrison",
    profile_picture: "/linkedin/jennifer-morrison.jpeg",
    socialLink: "https://www.linkedin.com/in/jennifer-morrison-5407b719/",
    isConnected: true,
  },
  {
    name: "Neal Konzen",
    profile_picture: "/linkedin/neal-konzen.jpeg",
    socialLink: "https://www.linkedin.com/in/neal-konzen-45801868/",
    isConnected: true,
  },
  {
    name: "Michael Holton",
    profile_picture: "/linkedin/mrmichaelholton.jpeg",
    socialLink: "https://www.linkedin.com/in/mrmichaelholton/",
    isConnected: true,
  },
  {
    name: "Veronika Vovk",
    profile_picture: "/linkedin/veronika-vovk.jpeg",
    socialLink: "https://www.linkedin.com/in/veronika-vovk-a09952245/",
    isConnected: true,
    // connectedDate: new Date("03/25/2025"),
  },
  {
    name: "Alina S.",
    profile_picture: "/linkedin/alina-s-3893a8240.jpeg",
    socialLink: "https://www.linkedin.com/in/alina-s-3893a8240/",
    isConnected: true,
  },
  {
    name: "Ann Ford",
    profile_picture: "/linkedin/ann-ford-87851328.jpeg",
    socialLink: "https://www.linkedin.com/in/ann-ford-87851328/",
    isConnected: true,
  },
  {
    name: "Chris Frankowski",
    profile_picture: "/linkedin/chris-frankowski.jpeg",
    socialLink: "https://www.linkedin.com/in/chris-frankowski-1152a083/",
    isConnected: true,
  },
  {
    name: "Andy Parker",
    profile_picture: "/linkedin/andy-parker.jpeg",
    socialLink: "https://www.linkedin.com/in/andy-parker-b1508414/",
    isConnected: true,
  },
  {
    name: "Helen Trenner",
    profile_picture: "/linkedin/helen-trenner.jpeg",
    socialLink: "https://www.linkedin.com/in/helen-trenner-13632715a/",
    isConnected: true,
  },
  {
    name: "Sean McNamara",
    profile_picture: "/linkedin/sean-mcnamara.jpeg",
    socialLink: "https://www.linkedin.com/in/sean-mcnamara-49a3414a/",
    isConnected: true,
  },
  {
    name: "Jo Cornish",
    profile_picture: "/linkedin/jo-cornish-fclip.jpeg",
    socialLink: "https://www.linkedin.com/in/jo-cornish-fclip-7017a0171/",
    isConnected: true,
  },
  {
    name: "Bobby Seagull",
    profile_picture: "/linkedin/bobby-seagull.jpeg",
    socialLink: "https://www.linkedin.com/in/bobby-seagull-77880157/",
    isConnected: true,
  },
  {
    name: "Chris Bongers",
    profile_picture: "/linkedin/lucywangyuxin.jpeg",
    socialLink: "https://www.linkedin.com/in/lucywangyuxin/",
    isConnected: true,
  },
  {
    name: "Max Gill",
    profile_picture: "/linkedin/max-gill.jpeg",
    socialLink: "https://www.linkedin.com/in/max-gill-013a21163/",
    isConnected: true,
  },
  {
    name: "Anna Caffrey",
    profile_picture: "/linkedin/anna-caffrey.jpeg",
    socialLink: "https://www.linkedin.com/in/anna-caffrey-79238014b/",
    isConnected: true,
  },
  {
    name: "Yoshinao (Nao) S.",
    profile_picture: "/linkedin/yoshinao-satake.jpeg",
    socialLink: "https://www.linkedin.com/in/yoshinao-satake/",
    isConnected: true,
  },
];

export default function ConnectionsPage() {
  const sortedConnections = [...connections].sort((a, b) => {
    if (a.isConnected === b.isConnected) {
      return a.name.localeCompare(b.name);
    }
    return a.isConnected ? -1 : 1;
  });

  return (
    <div className="relative space-y-16">
      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          An evolving list of people I&apos;ve met and those I wish to meet.
        </h1>
      </GridWrapper>

      <div className="relative">
        <div className="relative mb-12 grid auto-rows-auto grid-cols-3 place-items-center justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          <span className="absolute top-0">
            <HorizontalLine />
          </span>
          {sortedConnections.map((person) => (
            <div
              key={person.name}
              className="group no-underline transition-all duration-500"
            >
              <div className="group inline-block text-center">
                <div
                  className={`relative h-28 w-28 rounded-[20px] border border-border-primary bg-bg-primary p-2 transition-all duration-300 ${
                    person.isConnected
                      ? "group-hover:-translate-y-3 group-hover:border-indigo-400"
                      : ""
                  }`}
                >
                  {person.isConnected && person.connectedDate ? (
                    <div className="absolute -bottom-2 left-1/2 w-full -translate-x-1/2 text-nowrap rounded-full bg-indigo-400 px-1.5 py-1 text-center text-xs text-white">
                      <span>
                        Met on{" "}
                        <time>
                          {person.connectedDate.toLocaleDateString("en-US", {
                            month: "numeric",
                            day: "numeric",
                            year: "2-digit",
                          })}
                        </time>
                      </span>
                    </div>
                  ) : null}
                  <div
                    className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                    style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                  >
                    <img
                      width={56} height={56}
                      className={`h-14 w-14 rounded transition-all duration-300 ${
                        !person.isConnected ? "grayscale" : ""
                      }`}
                      alt={person.name}
                      src={person.profile_picture}
                    />
                  </div>
                </div>
                {person.name && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">{person.name}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
          <span className="absolute bottom-0">
            <HorizontalLine />
          </span>
        </div>
      </div>
    </div>
  );
}