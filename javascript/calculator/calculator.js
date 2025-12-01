function getValue(e) {
    // console.log(e.target.value);
    data=e.target.value
    // document.getElementById("result").value+=data
    result.value+=data
    

}
function findResult(){
    exp=document.getElementById("result").value
    res=eval(exp)
    document.getElementById("result").value=res

}
function dataclear() {
    document.getElementById("result").value=""
}