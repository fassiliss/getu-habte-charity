import cimg1 from "/images/campaign/1.jpg";
import cimg2 from "/images/campaign/2.jpg";
import cimg3 from "/images/campaign/3.jpg";

import cimgSingle from "/images/cause-single/1.jpg";
import cimgSingle2 from "/images/cause-single/2.jpg";
import cimgSingle3 from "/images/cause-single/3.jpg";

import author from "/images/campaign/1.png";

const Causes = [
  {
    id: "1",
    cImg: cimg1,
    cImgSingle: cimgSingle,
    process: "75",
    thumb: "Education",
    cTitle: "School Supplies & Uniforms for Pre-K and KG Students",
    slug: "School-Supplies",
    Goal: "5,000.00",
    Raised: "3,750.00",
    authorImg: author,
    authorName: "Getuhabte",
    description:
      "Providing backpacks, pens, notebooks, learning materials, and uniforms to Pre-K and Kindergarten students in Webe Wachile district. Every child deserves the tools to learn.",
  },
  {
    id: "2",
    cImg: cimg2,
    cImgSingle: cimgSingle2,
    process: "100",
    thumb: "Housing",
    cTitle: "Girls Hostel Furnishing Near Moyale",
    slug: "Girls-Hostel",
    Goal: "10,000.00",
    Raised: "10,000.00",
    authorImg: author,
    authorName: "Getuhabte",
    description:
      "In 2025, we furnished the high school girls hostel near Moyale with beds, mattresses, and bed sheets for 42 young women. A safe place to live, study, and pursue their education.",
  },
  {
    id: "3",
    cImg: cimg3,
    cImgSingle: cimgSingle3,
    process: "60",
    thumb: "Classroom",
    cTitle: "Build New Classrooms for 100+ Students",
    slug: "Build-Classrooms",
    Goal: "15,000.00",
    Raised: "9,000.00",
    authorImg: author,
    authorName: "Getuhabte",
    description:
      "Help us build new classrooms to accommodate the growing number of students. Currently over 100 children attend each year, but we need more space for them to learn and thrive.",
  },
];

export default Causes;
