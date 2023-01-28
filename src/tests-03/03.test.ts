import { addSkills } from './03';

export type cityType = {
  title: string
  countryTitle: string
}

export type addressType = {
  streetTitle: string
  city: cityType
}

export type techType = {
  id: number
  title: string
}

export type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: addressType
  technologies: Array<techType>
}

let student: StudentType;
beforeEach(() => {
  student = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {streetTitle: "Surganova 2", city: {title: "Minsk", countryTitle: "Belarus"}},
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
})

test("new tech skill should be added to student", () => {
  addSkills(student, "React");
  expect(student.technologies[3].title).toBe('React');
  expect(student.technologies[3].id).toBeDefined();
})
