


const courses = [
    {
        id: 1,
        title: "Frontend Development Course",
        shortDescription: "Learn the fundamentals of frontend development using HTML, CSS, and JavaScript.",
        fullDescription: "This comprehensive course covers everything you need to start your career in frontend development. You'll learn HTML for page structure, CSS for styling and layout, and JavaScript for adding interactivity.",
        lessonsCount: 30,
        duration: "15h 00m",
        level: "Intermediate",
        language: "English",
        price: 299.99
    },
    {
        id: 2,
        title: "Backend Development with Node.js",
        shortDescription: "Master building servers and backend applications using Node.js and Express.",
        fullDescription: "In this course, you'll learn how to build powerful and scalable backend applications using Node.js and Express. Topics include routing, databases, authentication, and deployment.",
        lessonsCount: 45,
        level: "Advanced",
        duration: "20h 00m",
        language: "Franch",
        price: 499.99
    },
    {
        id: 3,
        title: "UI/UX Design Course",
        shortDescription: "Fundamentals of user interface and user experience design for beginners.",
        fullDescription: "A comprehensive course covering design principles, design tools like Figma, and creating interactive prototypes. You'll learn how to analyze user needs and create effective, attractive designs.",
        lessonsCount: 25,
        level: "Beginner",
        duration: "17h 00m",
        language: "Arabic",
        price: 199.99
    },
    {
        id: 4,
        title: "Advanced React Course",
        shortDescription: "Master React with hooks, context, and best practices.",
        fullDescription: "This course covers advanced topics in React such as Hooks (useState, useEffect, useContext), advanced state management, and API integration. Also includes a complete project.",
        lessonsCount: 40,
        level: "Advanced",
        duration: "15h 00m",
        language: "German",
        price: 449.99
    },
    {
        id: 5,
        title: "Python for Beginners",
        shortDescription: "Learn programming fundamentals with Python.",
        fullDescription: "An ideal course to start in the world of programming. Covers Python basics, data structures, object-oriented programming, and writing simple programs. Includes practical exercises and small projects.",
        lessonsCount: 35,
        level: "Beginner",
        duration: "12h 00m",
        language: "Spanish",
        price: 249.99
    },
    {
        id: 6,
        title: "Frontend Development Course",
        shortDescription: "Learn the fundamentals of frontend development using HTML, CSS, and JavaScript.",
        fullDescription: "This comprehensive course covers everything you need to start your career in frontend development. You'll learn HTML for page structure, CSS for styling and layout, and JavaScript for adding interactivity.",
        lessonsCount: 30,
        duration: "15h 00m",
        level: "Intermediate",
        language: "English",
        price: 299.99
    },
    {
        id: 7,
        title: "Backend Development with Node.js",
        shortDescription: "Master building servers and backend applications using Node.js and Express.",
        fullDescription: "In this course, you'll learn how to build powerful and scalable backend applications using Node.js and Express. Topics include routing, databases, authentication, and deployment.",
        lessonsCount: 45,
        level: "Advanced",
        duration: "20h 00m",
        language: "Franch",
        price: 499.99
    },
    {
        id: 8,
        title: "UI/UX Design Course",
        shortDescription: "Fundamentals of user interface and user experience design for beginners.",
        fullDescription: "A comprehensive course covering design principles, design tools like Figma, and creating interactive prototypes. You'll learn how to analyze user needs and create effective, attractive designs.",
        lessonsCount: 25,
        level: "Beginner",
        duration: "17h 00m",
        language: "Arabic",
        price: 199.99
    },
    {
        id: 9,
        title: "Advanced React Course",
        shortDescription: "Master React with hooks, context, and best practices.",
        fullDescription: "This course covers advanced topics in React such as Hooks (useState, useEffect, useContext), advanced state management, and API integration. Also includes a complete project.",
        lessonsCount: 40,
        level: "Advanced",
        duration: "15h 00m",
        language: "German",
        price: 449.99
    },
    {
        id: 10,
        title: "Python for Beginners",
        shortDescription: "Learn programming fundamentals with Python.",
        fullDescription: "An ideal course to start in the world of programming. Covers Python basics, data structures, object-oriented programming, and writing simple programs. Includes practical exercises and small projects.",
        lessonsCount: 35,
        level: "Beginner",
        duration: "12h 00m",
        language: "Spanish",
        price: 249.99
    },
    {
        id: 11,
        title: "Frontend Development Course",
        shortDescription: "Learn the fundamentals of frontend development using HTML, CSS, and JavaScript.",
        fullDescription: "This comprehensive course covers everything you need to start your career in frontend development. You'll learn HTML for page structure, CSS for styling and layout, and JavaScript for adding interactivity.",
        lessonsCount: 30,
        duration: "15h 00m",
        level: "Intermediate",
        language: "English",
        price: 299.99
    },
    {
        id: 12,
        title: "Backend Development with Node.js",
        shortDescription: "Master building servers and backend applications using Node.js and Express.",
        fullDescription: "In this course, you'll learn how to build powerful and scalable backend applications using Node.js and Express. Topics include routing, databases, authentication, and deployment.",
        lessonsCount: 45,
        level: "Advanced",
        duration: "20h 00m",
        language: "Franch",
        price: 499.99
    },
    {
        id: 13,
        title: "UI/UX Design Course",
        shortDescription: "Fundamentals of user interface and user experience design for beginners.",
        fullDescription: "A comprehensive course covering design principles, design tools like Figma, and creating interactive prototypes. You'll learn how to analyze user needs and create effective, attractive designs.",
        lessonsCount: 25,
        level: "Beginner",
        duration: "17h 00m",
        language: "Arabic",
        price: 199.99
    },
    {
        id: 14,
        title: "Advanced React Course",
        shortDescription: "Master React with hooks, context, and best practices.",
        fullDescription: "This course covers advanced topics in React such as Hooks (useState, useEffect, useContext), advanced state management, and API integration. Also includes a complete project.",
        lessonsCount: 40,
        level: "Advanced",
        duration: "15h 00m",
        language: "German",
        price: 449.99
    },
    {
        id: 15,
        title: "Python for Beginners",
        shortDescription: "Learn programming fundamentals with Python.",
        fullDescription: "An ideal course to start in the world of programming. Covers Python basics, data structures, object-oriented programming, and writing simple programs. Includes practical exercises and small projects.",
        lessonsCount: 35,
        level: "Beginner",
        duration: "12h 00m",
        language: "Spanish",
        price: 249.99
    },
    {
        id: 16,
        title: "Frontend Development Course",
        shortDescription: "Learn the fundamentals of frontend development using HTML, CSS, and JavaScript.",
        fullDescription: "This comprehensive course covers everything you need to start your career in frontend development. You'll learn HTML for page structure, CSS for styling and layout, and JavaScript for adding interactivity.",
        lessonsCount: 30,
        duration: "15h 00m",
        level: "Intermediate",
        language: "English",
        price: 299.99
    },
    {
        id: 17,
        title: "Backend Development with Node.js",
        shortDescription: "Master building servers and backend applications using Node.js and Express.",
        fullDescription: "In this course, you'll learn how to build powerful and scalable backend applications using Node.js and Express. Topics include routing, databases, authentication, and deployment.",
        lessonsCount: 45,
        level: "Advanced",
        duration: "20h 00m",
        language: "Franch",
        price: 499.99
    },
    {
        id: 18,
        title: "UI/UX Design Course",
        shortDescription: "Fundamentals of user interface and user experience design for beginners.",
        fullDescription: "A comprehensive course covering design principles, design tools like Figma, and creating interactive prototypes. You'll learn how to analyze user needs and create effective, attractive designs.",
        lessonsCount: 25,
        level: "Beginner",
        duration: "17h 00m",
        language: "Arabic",
        price: 199.99
    },
    // {
    //     id: 19,
    //     title: "Advanced React Course",
    //     shortDescription: "Master React with hooks, context, and best practices.",
    //     fullDescription: "This course covers advanced topics in React such as Hooks (useState, useEffect, useContext), advanced state management, and API integration. Also includes a complete project.",
    //     lessonsCount: 40,
    //     level: "Advanced",
    //     duration: "15h 00m",
    //     language: "German",
    //     price: 449.99
    // },
    // {
    //     id: 20,
    //     title: "Python for Beginners",
    //     shortDescription: "Learn programming fundamentals with Python.",
    //     fullDescription: "An ideal course to start in the world of programming. Covers Python basics, data structures, object-oriented programming, and writing simple programs. Includes practical exercises and small projects.",
    //     lessonsCount: 35,
    //     level: "Beginner",
    //     duration: "12h 00m",
    //     language: "Spanish",
    //     price: 249.99
    // }

];
export default courses