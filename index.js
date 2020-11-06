// Your code here
const mapToNegativize = (sourceArray) => {
  const results = [...sourceArray]
  for (let i = 0; i < results.length; i++) {
    results[i] = results[i] * -1
  }
  return results
} 

const mapToNoChange =  (sourceArray) => {
  const results = [...sourceArray]
  for (let i = 0; i < results.length; i++) {
    results[i] = results[i]
  }
  return results
}

const mapToDouble = (sourceArray) => {
  const results = [...sourceArray]
  for (let i = 0; i < results.length; i++) {
    results[i] = results[i] * 2
  }
  return results
}

const mapToSquare = (sourceArray) => {
  const results = [...sourceArray]
  for (let i = 0; i < results.length; i++) {
    results[i] = results[i] * results[i]
  }
  return results
}