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
        altAuthorImg: "author image",
        btn: "Explore All Courses"
      },
      review: {
        title: "What our students say about us",
        altTextAuthor: "author image",
        altTextArrow: "arrow",
        number: [
          {
            count: "100,000+",
            text: "Students worldwide",
          },
          {
            count: "200,00+",
            text: "Total course views",
          },
          {
            count: "5,000+",
            text: "Five-star course reviews",
          },
          {
            count: "75,000+",
            text: "Students community",
          },
        ],
        btn: "Explore Courses"
      }
    },
  },
});
