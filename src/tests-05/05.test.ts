import { manType } from "./05"

let people: Array<manType> = []

beforeEach(() => {
  people = [
    { name: "Andrey", lastname: "Ivanov", age: 33},
    { name: "Alexandr", lastname: "Petrov", age: 24},
    { name: "Dmitri", lastname: "Sidorov", age: 18},
    { name: "Vadim", lastname: "Bobov", age: 20},
  ]
})

test("should get array of greeting messages", () => {
  let messages = people.map(user => `Hello ${user.name}. Welcome to It-incubator course`)

  expect(messages.length).toBe(4)
  expect(messages[0]).toBe("Hello Andrey. Welcome to It-incubator course")
})
