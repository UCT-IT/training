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
      Category: {
        title: "Browse our courses by category",
        imageAltText: "course image",
        imageAltVideoText: "video logo",
      },
      contactUsSection: {
        titleOne: `QUESTIONS?`,
        titleTwo: `COMMENTS?`,
        titleThree: `WE'D LOVE TO HEAR FROM YOU!`,
        description: `Get in touch with us to explore a world of educational opportunities!
        Whether you have inquiries about our courses, seek guidance on
        learning paths, or wish to collaborate, our dedicated team is here to
        support you. Reach out today to discover how we can empower your educational journey.`,
        addressTitle: `Our Mailing Address is:`,
        officeBd: `Bangladesh Office: `,
        officeBdAddress: `House-37(4th floor), Road-7, Sector-3, Uttara, Dhaka-1230.`,
        officeCn: `Canada Office: `,
        officeCnAddress: `107 7760 120 Street Surrey, BC, V3W1L1, Canada.`,
        email: `Email: `,
        emailAddress: `uctitbd@gmail.com`,
        hotline: `Hotline: `,
        hotlineNumber: `01996-399534`,
        sendMessageTitle: `SHARE YOUR THOUGHTS WITH US!`,
        btnText: `SEND MESSAGE`,
        placeholderText: {
          name: `Your Name`,
          email: `Your Email`,
          message: `Your Message Here`,
        },
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
      banner: {
        title: `A few numbers that we 
      are proud of`,
        number: [
          {
            count: "100,000+",
            text: "Students",
            desc: `Lorem ipsum dolor sit amet, 
          consectetur adipiscing.`,
          },
          {
            count: "5,000+",
            text: "Five-star reviews",
            desc: `Lorem ipsum dolor sit amet, 
          consectetur adipiscing.`,
          },
          {
            count: "75,000+",
            text: "Students community",
            desc: `Lorem ipsum dolor sit amet, 
          consectetur adipiscing.`,
          },
        ],
      },
      values: {
        title: "Our work values",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        altText: "values image",
        cards: [
          {
            image: "/images/about/values/img1.svg",
            number: "01",
            title: "Commitment",
            description: `Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Lacus egestas non consequat 
            pellentesque iaculis nunc, est, mollis. Nulla.`
          },
          {
            image: "/images/about/values/img2.svg",
            number: "02",
            title: "Accessibility",
            description: `Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Lacus egestas non consequat 
            pellentesque iaculis nunc, est, mollis. Nulla.`
          },
          {
            image: "/images/about/values/img3.svg",
            number: "03",
            title: "Openness",
            description: `Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Lacus egestas non consequat 
            pellentesque iaculis nunc, est, mollis. Nulla.`
          },
          {
            image: "/images/about/values/img4.svg",
            number: "04",
            title: "Innovation",
            description: `Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Lacus egestas non consequat 
            pellentesque iaculis nunc, est, mollis. Nulla.`
          },
        ]
      }
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
