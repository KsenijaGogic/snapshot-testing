// Here we'll write a function that will determine whether what's passed is a hexCode
export const isHexCode = (hexCode) => {
  let isMatch = false
  const firstCharacter = hexCode.split("")[0]
  const regexPattern = /^#(?:[0-9a-fA-F]{3}){1,2}$/

  if (firstCharacter === "#") {
    isMatch = true
  }

  return isMatch
}
