
let peopleList;

async function getData(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const list = await response.json()
        // console.log(list)
        peopleList = [...list]
        createList(list)
    } catch(err) {
        console.log(err);
    }
    

    
}

// CONTAINER LISTA NOMI
const listPeopleContainer = document.getElementById("list_container");

// SELEZIONE DROPDOWN
const choiceImput = document.getElementById("select_search");

// IMPUT DI RICERCA
const imputSearch = document.getElementById("imput_search");

// BOTTONE DI RICERCA
const btnSearch = document.getElementById("btn_search");

// CREO LA LISTA DA MANDARE SUL DOM



function createList(data){
    peopleList = data;
 
    peopleList.forEach(element => {
        let person = document.createElement("div");
        person.classList.add("row")
        person.innerHTML = '<div class="col d-flex"><p class="col-4">'+element.name+'</p><p class="col-4">'+element.username+'</p><p class="col-4">'+element.email+'</p></div>';
        listPeopleContainer.appendChild(person);
    });

}

// FUNZIONE PER LA RICERCA

console.log(choiceImput.value);

btnSearch.addEventListener("click", () =>{
    const risultati = peopleList.filter((item) =>{
        switch (item) {
            case item.name.include(imputSearch.value):
                console.log("name");
                break;
        
            default:
                break;
        }
        console.log(item);
    })
    // printResult(risultati);
})



getData();