// Because we're testing JUST a function here, we'll need to import that and nothing else
import { isHexCode } from './isHexCode'

// Here we'll start with out "it" block
it('should return if passed value is or isn\'t a hex code', () => {
  const validCode = "#FFFFFF"
  const invalidCode = "nope"

  expect(isHexCode(validCode)).toEqual(true)
})