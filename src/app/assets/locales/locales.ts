import LocalizedStrings from "react-localization";

export let strings = new LocalizedStrings({
  en: {
    metadata: {
      layout: {
        title: "UCT IT - Welcome",
        description:
          "UCT IT aims to nurture skilled IT professionals through top-tier training, fostering industry growth in Bangladesh. Our focus extends to preparing individuals for the local and global IT sectors. Additionally, we provide premier IT solutions and services.",
      },
      aboutPage: {
        title: "About UCT IT - Empowering IT Excellence",
        description:
          "Learn about UCT IT's mission to nurture skilled IT professionals, contribute to industry growth in Bangladesh, and provide premier IT solutions and services. Discover our commitment to preparing individuals for the local and global IT sectors.",
      },
      coursesPage: {
        title: "Explore UCT IT Courses - Advance Your IT Career",
        description:
          "Discover a range of UCT IT courses designed to enhance your IT skills and propel your career. Explore our diverse curriculum offering comprehensive training for both beginners and experienced professionals.",
      },
    },
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
        title: `UCTIT BD: Empower Your Journey`,
        description: `Discover comprehensive IT courses tailored for skill enhancement.
        Explore UCTIT BD today.`,
        btnText1: `Browse Courses`,
        btnText2: `Discover More`,
        altText: `Empower Your Learning Image`,
      },
      homeCarousel: {
        title: "Discover Top-Rated Courses",
        altCourseImg: "Course Image",
        altAuthorImg: "Author Image",
        btn: "Explore All Courses",
      },
      aboutSection: {
        title: `About Education`,
        description: `Explore our dedication to fostering excellence 
        in education and skill development.`,
        aboutDetails: {
          altText: `About Section Image`,
          iconAltText: `About Section Icon`,
          detailOne: {
            title: `Industry Expert Instructors`,
            description: `Our courses are led by seasoned industry experts committed
            to your success.`,
          },
          detailTwo: {
            title: `Up-to-date Course Content`,
            description: `Stay abreast of industry trends with our continuously updated
            course content.`,
          },
          detailThree: {
            title: `Thriving Student Community`,
            description: `Join a vibrant learning community fostering mutual growth
            and support.`,
          },
        },
        btnText: `Learn More About Education`,
      },
      Category: {
        title: "Explore Courses by Category",
        imageAltText: "Course Category Image",
        imageAltVideoText: "Video Category Logo",
      },
      review: {
        title: "What our students say about us",
        altTextAuthor: "author image",
        altTextArrow: "arrow icon",
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
        ],
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
        title: `Our Commitment to
        Educational Excellence`,
        description: `Discover our dedication to fostering learning
        environments that inspire and empower.
        Join us in shaping brighter futures.`,
        btnText: `JOIN US NOW`,
      },
      banner: {
        title: `A few numbers that we 
      are proud of`,
        number: [
          {
            count: "100,000+",
            text: "Satisfied Students",
            desc: `Join a thriving community of satisfied
            learners achieving their goals.`,
          },
          {
            count: "5,000+",
            text: "Five-Star Ratings",
            desc: `Explore courses loved by thousands,
            evidenced by our stellar ratings.`,
          },
          {
            count: "75,000+",
            text: "Engaged Learners",
            desc: `Be part of an engaged student community
            fueling learning and growth.`,
          },
        ],
      },
      values: {
        title: "Our work values",
        description:
          "Discover our foundational principles driving excellence in education and service.",
        altText: "Values Image",
        cards: [
          {
            number: "01",
            title: "Commitment",
            description: `We are dedicated to delivering
            outstanding education, fostering growth.`,
          },
          {
            number: "02",
            title: "Accessibility",
            description: `Ensuring accessible education
            for every learner, anywhere.`,
          },
          {
            number: "03",
            title: "Openness",
            description: `An open and inclusive environment
            encouraging diverse perspectives.`,
          },
          {
            number: "04",
            title: "Innovation",
            description: `Constantly evolving and innovating
            to meet emerging needs.`,
          },
        ],
      },
      history: {
        title: "Our Journey Through Time",
        description:
          "Embark on Academy's transformative journey, empowering you with future-ready skills.",
        button: "Explore Opportunities",
        details: [
          {
            year: 2023,
            title: "500th Course Launched",
            description:
              "Celebrating a milestone - Academy introduces its 500th specialized course.",
          },
          {
            year: 2022,
            title: "Growth to 100+ Team Members",
            description:
              "Academy expands its team, gathering over 100 passionate individuals.",
          },
          {
            year: 2021,
            title: "Inaugural Course Launch",
            description:
              "A journey begins - Academy marks its inception by launching its inaugural course.",
          },
          {
            year: 2020,
            title: "Foundation of Academy",
            description:
              "The genesis - Academy is founded with a vision to revolutionize education.",
          },
        ],
      },
    },
    courses: {
      heroSection: {
        title: `Discover Our Courses`,
        description: `Explore a diverse range of courses tailored
        to enhance your skills and knowledge.`,
      },
      allCourses: {
        Category: {text: "all", url: "/pages/courses"},
        title: "All Courses",
      }
      featuredCourse: {
        heading: `Featured Course`,
        altTextThumbnail: `Featured Course Thumbnail`,
        altTextInstructorImage: `Instructor Profile Image`,
        altTextArrowImage: `Arrow Icon`,
      },
    },
    errorPage: {
      title: `Page not found`,
      description: `The page you are looking
      for doesn't exist or has
      been moved.`,
      btnText1: `EXPLORE COURSES`,
      btnText2: `GO HOME`,
      errorCode: `404`,
    },
    footer: {
      description: `Explore our diverse range of courses designed to fuel
      your learning journey and unlock your potential.`,
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
      copyRight: `Copyright © UCTIT BD`,
    },
  },
});
