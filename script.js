function done(){
    let name = document.getElementById("name").value
    console.log(name)
    let wel= document.getElementById("w").innerText
    wel='Welcome'+" " +name
    console.log(wel)
    document.getElementById('w').innerText=wel
    let card= document.getElementById("card").style="display:block";
    document.getElementById("user").style="display:none";


}