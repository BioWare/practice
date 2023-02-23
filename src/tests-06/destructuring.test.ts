import { ManType } from "./Destructuring";

let props: ManType

beforeEach(() => {
  props = {
    name: "Dimych",
    age: 32,
    lessons: [{title: '1'}, {title: '2'}],
    address: {
      street: {
        title: "Navoi street"
      }
    }
  }
})

test('', () => {
  const { age, lessons } = props

  expect(age).toBe(32)
  expect(lessons.length).toBe(2)
})
