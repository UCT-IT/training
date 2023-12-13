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
    },
    footer: {
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt aliqua.`,
      ourCompany: {
        title: `Our Company`,
        navigations: [
          "Home",
          "About Us",
          "Contact",
          "Careers",
          "Privacy Policy",
          "Terms & Conditions",
        ],
      },
      ourServices: {
        title: `Our Services`,
        navigations: [
          "Computer Training",
          "Digital Marketing",
          "Web-Design & Development",
          "Video Editing",
          "Networking Services",
          "ERP Software",
          "Computer & Laptop Servicing",
        ],
      },
      ourOffice: {
        title: `Our office`,
        address: `House 37 (3rd Floor), Road 7,
        Sector 3, Uttara,
        Dhaka-1230, Bangladesh.`,
      },
      copyRight: `Copyright © Educationic X`,
    },
  },
});
