import { StudentType } from './03.test';


const student: StudentType = {
  id: 1,
  name: "Dimych",
  age: 32,
  isActive: false,
  address: {
    streetTitle: "Surganova 2",
    city: {
      title: "Minsk",
      countryTitle: "Belarus"
    }
  },
  technologies: [
    {
      id: 1,
      title: "HTML"
    },
    {
      id: 2,
      title: "CSS"
    },
    {
      id: 3,
      title: "JavaScript"
    },
  ]
}


export const addSkills = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill
  });
}
