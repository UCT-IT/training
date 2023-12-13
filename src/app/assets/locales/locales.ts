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
      homeCarousel: {
        title: "Browse our popular courses",
        altCourseImg: "course image",
        altAuthorImg: "author image"
      }
    },
  },
});
