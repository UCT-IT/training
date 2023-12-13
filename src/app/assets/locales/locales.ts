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
        url: "#",
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
  },
});
