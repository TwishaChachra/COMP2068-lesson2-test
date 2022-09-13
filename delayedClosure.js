function parent(){
    let message = 'Hello World'

    function child(){
        console.log(message)

    }
    return child //omit the brackets so it doesn't execute yet
}

// instantiate 
let childFunction = parent()

//run
childFunction()
//this structure allows us multiple execution - in previous one i would have to run it 100 times it will get stored in memory 100 times whereas here I would just have to call it once and get the result as many times as I want it will repeat the reult for me