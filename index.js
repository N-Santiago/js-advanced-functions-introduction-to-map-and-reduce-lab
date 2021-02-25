// Your code here
function mapToNegativize(sourceArray) {
    const newArray = []

    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * -1)
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    const newArray = []

    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i])
    }
    return newArray
}

function mapToDouble(sourceArray) {
    const newArray = []

    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * 2)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    const newArray = []

    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * sourceArray[i])
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint) {
    let counter = startingPoint ? startingPoint : 0

    for (let i = 0; i < sourceArray.length; i++) {
        counter += sourceArray[i]
    }
    return counter
}

function reduceToAllTrue(sourceArray) {

    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) {
            return false 
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray) {

    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            return true 
        }
    }
    return false
}
