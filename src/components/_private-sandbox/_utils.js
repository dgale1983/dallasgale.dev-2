export const compareObjectKeys = (a, b) => {
  const stringA = a.node.name.toUpperCase()
  const stringB = b.node.name.toUpperCase()

  let comparison = 0

  if (stringA > stringB) comparison = 1
  else if (stringA < stringB) comparison = -1

  return comparison
}


export const convertKbsToMb = value => parseFloat(value / 1000).toFixed(2)


export const filterByFirstCharacter = (str, char) => str.toLowerCase().split().filter(item => item[0] === char)
