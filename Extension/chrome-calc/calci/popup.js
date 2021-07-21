document.getElementById("clear").addEventListener("click", clear)
document.getElementById("find").addEventListener("click", find)
document.getElementById("one").addEventListener("click", () => (insert(1)))
document.getElementById("two").addEventListener("click", () => (insert(2)))
document.getElementById("three").addEventListener("click", () => (insert(3)))
document.getElementById("four").addEventListener("click", () => (insert(4)))
document.getElementById("five").addEventListener("click", () => (insert(5)))
document.getElementById("six").addEventListener("click", () => (insert(6)))
document.getElementById("seven").addEventListener("click", () => (insert(7)))
document.getElementById("eight").addEventListener("click", () => (insert(8)))
document.getElementById("nine").addEventListener("click", () => (insert(9)))
document.getElementById("zero").addEventListener("click", () => (insert(0)))
document.getElementById("add").addEventListener("click", () => (insert("+")))
document.getElementById("divide").addEventListener("click", () => (insert("/")))
document.getElementById("min").addEventListener("click", () => (insert("-")))
document.getElementById("mult").addEventListener("click", () => (insert("*")))

function find(){
    var input = document.getElementById("textField").value
    const value = eval(input)
    document.getElementById("textField").value=value
}
function clear(){
    document.getElementById("textField").value=""
}
function insert(val){

    document.getElementById("textField").value+=val
}