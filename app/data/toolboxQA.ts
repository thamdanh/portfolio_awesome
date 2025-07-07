type HardwareDataItem = {
  title: string;
  description: string;
  link: string;
};

type SoftwareDataItem = {
  title: string;
  imgSrc: string;
  link: string;
};

const softwareData: SoftwareDataItem[] = [
  {
    title: "TestRail",
    imgSrc: "/testrail.svg",
    link: "https://www.gurock.com/testrail/",
  },
  {
    title: "Jira",
    imgSrc: "/jira.svg",
    link: "https://www.atlassian.com/software/jira",
  },
  {
    title: "Postman",
    imgSrc: "/postman.svg",
    link: "https://www.postman.com/",
  },
  {
    title: "BrowserStack",
    imgSrc: "/betterstack.svg",
    link: "https://www.browserstack.com/",
  },
  {
    title: "Selenium",
    imgSrc: "/selenium.svg",
    link: "https://www.selenium.dev/",
  },
  {
    title: "Cypress",
    imgSrc: "/cypress.svg",
    link: "https://www.cypress.io/",
  },
  {
    title: "Playwright",
    imgSrc: "/playwright.webp",
    link: "https://playwright.dev/",
  },
  {
    title: "Charles Proxy",
    imgSrc: "/charles.svg",
    link: "https://www.charlesproxy.com/",
  },
  {
    title: "Notion",
    imgSrc: "/notion_logo.png",
    link: "https://www.notion.so/",
  },
  {
    title: "Obsidian",
    imgSrc: "/obsidian_logo.png",
    link: "https://obsidian.md/",
  },
  {
    title: "Slack",
    imgSrc: "/slack_logo.svg",
    link: "https://slack.com/",
  },
  {
    title: "GitHub Actions",
    imgSrc: "/githubactions.svg",
    link: "https://github.com/features/actions",
  },
  {
    title: "Allure Report",
    imgSrc: "/allure_report.png",
    link: "https://docs.qameta.io/allure/",
  },
  {
    title: "Figma (for design review)",
    imgSrc: "/figma_logo.png",
    link: "https://www.figma.com/",
  },
  {
    title: "Trello",
    imgSrc: "/trello.svg",
    link: "https://trello.com/",
  },
  {
    title: "Zoom",
    imgSrc: "/zoom.svg",
    link: "https://zoom.us/",
  },
];
const hardwareData: HardwareDataItem[] = [
  {
    title: "MacBook Pro (14 inch), M2 Pro, 2023",
    description:
      "10-core CPU, 16-core GPU, 32GB memory – ideal for running heavy test environments and VMs.",
    link: "https://www.apple.com/macbook-pro/",
  },
  {
    title: "Logitech MX Master 3S",
    description:
      "Precision mouse with customizable buttons for fast navigation during test sessions.",
    link: "https://www.logitech.com/en-us/products/mice/mx-master-3s.910-006556.html",
  },
  {
    title: "Keychron Q1 Mechanical Keyboard",
    description:
      "Solid, customizable mechanical keyboard with tactile feedback for long test scripting hours.",
    link: "https://www.keychron.com/products/keychron-q1-qmk-custom-mechanical-keyboard",
  },
  {
    title: "Dell UltraSharp 27\" Monitor",
    description:
      "Color-accurate display with great real estate for testing UI across browsers and resolutions.",
    link: "https://www.dell.com/en-us/shop/dell-ultrasharp-27-monitor-u2723qe/",
  },
  {
    title: "Elgato Stream Deck",
    description:
      "Custom hotkeys for fast access to test scripts, logs, or automation pipelines.",
    link: "https://www.elgato.com/en/stream-deck",
  },
  {
    title: "Blue Yeti Nano Microphone",
    description:
      "Clear audio for remote QA reviews, daily standups, and walkthrough recordings.",
    link: "https://www.bluemic.com/en-us/products/yeti-nano/",
  },
  {
    title: "Autonomous ErgoChair Pro",
    description:
      "Ergonomic chair to support long bug bash or regression testing sessions comfortably.",
    link: "https://www.autonomous.ai/office-chairs/ergonomic-chair",
  },
  {
    title: "IKEA Bekant Standing Desk",
    description:
      "Spacious and height-adjustable, perfect for rotating between manual testing and automation coding.",
    link: "https://www.ikea.com/us/en/p/bekant-desk-sit-stand-white-s29022530/",
  },
];


export { hardwareData, softwareData };