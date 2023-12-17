import LocalizedStrings from "react-localization";

export let strings = new LocalizedStrings({
  en: {
    nav: [
      {
        text: "Home",
        url: "/",
      },
      {
        text: "About",
        url: "/pages/about",
      },
      {
        text: "Courses",
        url: "/pages/courses",
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
      heroSection: {
        title: `The big mission
        behind Educationic`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pretium pulvinar ac molestie cursus malesuada
        enim. Massa nec tellus, elit tellus, erat faucibus
        aenean. Nunc, lacus, dignissim nec sit.`,
        btnText: `JOIN OUR TEAM`,
      },
    },
  },
});
