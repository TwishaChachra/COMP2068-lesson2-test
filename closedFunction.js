function closedFunction(){
    let counter = 0
    let increment = () => { //lamba expression and anonymous function
        counter++
        console.log(counter)
    }
    return increment
} 
//set up('instantiate') function
let myCountFunction = closedFunction()

//execute twice
myCountFunction()
myCountFunction()
