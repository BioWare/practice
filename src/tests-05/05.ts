export type manType = {
  name: string
  lastname: string
  age: number
}

let people: Array<manType> = [
  { name: "Andrey", lastname: "Ivanov", age: 33},
  { name: "Alexandr", lastname: "Petrov", age: 24},
  { name: "Dmitri", lastname: "Sidorov", age: 18},
  { name: "Vadim", lastname: "Bobov", age: 20},
]

const transform = (man: manType) => {
  return {
    stack: ["css", "html", "JS", "NodeJs", "git"],
    firstName: man.name,
    lastName: man.lastname,
    age: man.age
  }
}

const devs = people.map(transform)
