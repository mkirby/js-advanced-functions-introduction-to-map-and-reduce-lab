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

const reduceToTotal = (sourceArray, startingPoint=0) => {
  let total = startingPoint
  for (let i = 0; i < sourceArray.length; i++) {
    total += sourceArray[i]
  }
  return total
}

const reduceToAllTrue = (sourceArray) => {
  for (let i = 0; i < sourceArray.length; i++ ) {
    if (!sourceArray[i]) {
      return false
    }
  }
  return true
}

const reduceToAnyTrue = (sourceArray) => {
  for (let i = 0; i < sourceArray.length; i++ ) {
    if (sourceArray[i]) {
      return true
    }
  }
  return false
}
