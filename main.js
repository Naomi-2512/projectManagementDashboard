let projectName = document.querySelector('.myInput')
let myButton = document.querySelector('.create')
let Error = document.querySelector('.inputError') 
let element5 = document.querySelector('.projectLists')
let deleteButton = document.querySelector('.deleteButton')

myArray = [];

myButton.addEventListener('click', () =>{
    myProject = projectName.value.trim ();
    if(myProject === ''){
       Error.textContent = "Enter your project";
       Error.style.color = "brown" 
       setTimeout( ()=>{
        Error.textContent = ''
       },1000)
    }
    else {
        myObject = {
            holder:myProject
        }
        myArray.push(myObject)
        console.log(myArray);
        localStorage.setItem('db', JSON.stringify (myArray));
        myLists();
    }
})

function myLists(){
    jsonFile = localStorage.getItem('db');
    anotherArray = JSON.parse(jsonFile);

    let selected = document.querySelectorAll('.projectLists .inputDiv')
    selected.forEach(product => {
        product.remove()
    })

    anotherArray.forEach((element, index) => {
        console.log (element);

        element1 = element.holder;
        console.log(element1);

        let element2 = document.createElement('div');
        element2.className = "inputDiv"

        let element3 = document.createElement('p');
        element3.textContent = element1;

        let element4 = document.createElement('button');
        element4.className = 'deleteButton'
        element4.textContent = 'Delete'

        element2.appendChild(element3)
        element2.appendChild(element4)
        element5.appendChild(element2)

        deleteButton.addEventListener('click', ()=>{
            anotherArray.splice()
        })

    })
}