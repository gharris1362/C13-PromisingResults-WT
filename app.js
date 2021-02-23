$('document').ready(() => {


    let domIt = (math) => {
        let newH1 = $(`<h1>${math}</h1>`)
        $('#mathContainer').append(newH1)
    }

// const math = slowMath.add(6, 2)
// .then(a => {
//     console.log(a)
//     return slowMath.multiply(a, 2)
// }).then(b => {
//     console.log(b)
//     return slowMath.divide(b, 4)
// }).then(c => {
//     console.log(c)
//     return slowMath.subtract(c, 3)
// }).then(d => {
//     console.log(d)
//     return slowMath.add(d, 98)
// }).then(e => {
//     console.log(e)
//     return slowMath.remainder(e, 2)
// }).then(f => {
//     console.log(f)
//     return slowMath.multiply(f, 50)
// }).then(g => {
//     console.log(g)
//     return slowMath.remainder(g, 40)
// }).then(h => {
//     console.log(h)
//     return slowMath.add(h, 32)
// }).then(i => {
//     console.log(`The Final Result is ${i}`)
// }).catch(err => {throw err})




async function doMath(a, b) {
   try {
    let math = await slowMath.add(a, b)
    domIt(math)
    math = await slowMath.multiply(math, 2)
    domIt(math)
    math = await slowMath.divide(math, 4)
    domIt(math)
    math = await slowMath.subtract(math, 3)
    domIt(math)
    math = await slowMath.add(math, 98)
    domIt(math)
    math = await slowMath.remainder(math, 2)
    domIt(math)
    math = await slowMath.multiply(math, 50)
    domIt(math)
    math= await slowMath.remainder(math, 40)
    domIt(math)
    math = await slowMath.add(math, 32)
    domIt(math)
    domIt(`The final result is ${math}`)
   } catch(err) {
    console.error(err)
   }
}

doMath(6, 2)


})