let div = document.querySelector("div")
const prio = document.querySelector("#prioritet")
const date = document.querySelector("#datum")

//skapar globalt fält/array
let array = [];

function add(){

    let todo = {
        aktivitet: aktivitet.value,
        prio: prio.value,
        date: date.value,
    }

    //Så att man kan se i konsollen aktivtet, datum och viktighet
    console.log("ange aktivitet: ", todo);

    //Så att de printas ut på hemsidsidan.
    array.push(todo);

    div.innerHTML = "";
    for(let i = 0; i < array.length; i++){
        console.log("aktivitet "+( i )+ array[i].aktivitet);
        let p = document.createElement("p");
        p.textContent = " * " + array[i].aktivitet + ", " + array[i].prio + ", " + array[i].date
        div.appendChild(p);
    }

   
   //Local Storage
    aktivitet.value = "";
    prio.value = "";
    date.value = "";
    let array_text = JSON.stringify(array);
    window.localStorage.setItem("Aktiviteter", array_text);
}   

function sidan_laddas(){
    let array_text = JSON.stringify(array);
    div.innerHTML = "";
    for(let i = 0; i < array.length; i++){
        console.log("aktivitet "+( i+1 )+ array[i].aktivitet);
        let p = document.createElement("p");
        p.textContent = "Aktivitet: "+array[i].aktivitet;
        div.appendChild(p);
    }
}