import { curry } from 'ramda'
import { generateStyleObject } from './utils/generateStyleObject.js'

const createStyleHOF = curry((style, value) => {
  let newStyleObject = generateStyleObject(style, value)

  return (passedStyle) => ({
    ...passedStyle,
    ...newStyleObject
  })
})

export default createStyleHOF