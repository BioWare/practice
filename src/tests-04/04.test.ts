import { courses, tasks } from "./04"


export type courseType = {
  title: string
  price: number
}

test('Shoud retort user older than 90', () => {

  const ages = [1,20,19, 50, 49, 199, 90 ];

  const oldAges = ages.filter(age => age > 90)

  expect(oldAges.length).toBe(1)
  expect(oldAges[0]).toBe(199)
})

test('Shoud take courses cheaper than 160', () => {

  const cheapCourses = courses.filter(course => course.price < 160)

  expect(cheapCourses.length).toBe(2)
  expect(cheapCourses[0].price).toBe(100)
  expect(cheapCourses[0].title).toBe("QA")
  expect(cheapCourses[1].price).toBe(150)
})

test('get only compleated tasks', () => {

  const compleatedTasks = tasks.filter(task => task.isDone)

  expect(compleatedTasks.length).toBe(2)
  expect(compleatedTasks[0].title).toBe("Bread")
  expect(compleatedTasks[1].title).toBe("Solt")
})

test('get only uncompleated tasks', () => {

  const compleatedTasks = tasks.filter(task => !task.isDone)

  expect(compleatedTasks.length).toBe(2)
  expect(compleatedTasks[0].title).toBe("Milk")
  expect(compleatedTasks[1].title).toBe("Sugar")
})
