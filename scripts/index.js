
// var addBtn = document.getElementById('addBtn');

// addBtn.addEventListener('click', add);

function add(){
    
    var result = document.getElementById("addResult");
    var a = parseInt(document.getElementById("AddNo1").value);
    var b = parseInt(document.getElementById("AddNo2").value);

    var add = a + b;

    result.innerHTML = add;

}


function subtract() {

    var result = document.getElementById("subtractResult");
    var a = document.getElementById("SubNo1").value;
    var b = document.getElementById("SubNo2").value;
    
    result.innerHTML = a - b;
    
}