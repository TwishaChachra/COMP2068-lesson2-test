// create a function so we can examine how var scope works
function parent() {
    let message = 'hello world'
    function child() {
        //let message = 'Hello world from child'
        //message = 'I am different now' //(we can update let)
        console.log(message)
    }
    child()
}
//call the parent function
parent()
