import data from "../../../../public/data/data.json";

const getNumberOfCoursesByCategory = (category: string) => {
  const course = data.courses.filter((course) => course.category === category);
  return course.length;
};

export default getNumberOfCoursesByCategory;