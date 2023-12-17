import LocalizedStrings from "react-localization";

export let strings = new LocalizedStrings({
  en: {
    nav: [
      {
        text: "Home",
        url: "#",
      },
      {
        text: "About",
        url: "/pages/about",
      },
      {
        text: "Courses",
        url: "#",
      },
    ],
    home: {
      heroSection: {
        title: `Educationic X Webflow 
            Template`,
        description: `Presenting Educationic X, the ultimate Education Webflow Template`,
        btnText1: `Explore Courses`,
        btnText2: `Learn More`,
        altText: `Hero Section Image`,
      },
      aboutSection: {
        title: `About Education`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt.`,
        aboutDetails: {
          altText: `About Section Image`,
          iconAltText: `About Section Icon`,
          detailOne: {
            title: `Industry expert teachers`,
            description: `Lorem ipsum dolor sit amet, consectetur dolorili
            adipiscing elit. Felis donec massa aliquam id dolor .`,
          },
          detailTwo: {
            title: `Up-to-date course content`,
            description: `Lorem ipsum dolor sit amet, consectetur dolorili
            adipiscing elit. Felis donec massa aliquam id dolor .`,
          },
          detailThree: {
            title: `Students community`,
            description: `Lorem ipsum dolor sit amet, consectetur dolorili
            adipiscing elit. Felis donec massa aliquam id dolor .`,
          },
        },
        btnText: `ABOUT EDUCATION`,
      },
    },
    about: {
      history: {
        title: "Our company history",
        description:
          "Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for tomorrow.",
        button: "Join our team",
        details: [
          {
            year: 2023,
            title: "Launched course #500",
            description: "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor ."
          },
          {
            year: 2022,
            title: "Reached 100 team members",
            description: "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor ."
          },
          {
            year: 2021,
            title: "Launched first course",
            description: "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor ."
          },
          {
            year: 2020,
            title: "Education founded",
            description: "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor ."
          },
        ]
      },
    },
  },
});
