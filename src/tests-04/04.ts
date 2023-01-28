import { ageType, courseType } from "./04.test";

const ages: ageType = [1,20,19, 50, 49, 199, 90 ];

const predicate = (age: number) => {
  return age > 90
}

const courses = [
  {title: "JS", price: 200},
  {title: "QA", price: 100},
  {title: "Back-end", price: 250},
  {title: "React", price: 150},
]

const cheapPredicate = (course: courseType) => {
  return course.price < 160
}

const cheapCourses = []; // < 160
const oldAges = []; // > 90
