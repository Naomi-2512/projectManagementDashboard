let projectName = document.querySelector('.myInput')
let myButton = document.querySelector('.create')
let Error = document.querySelector('.inputError') 
let element5 = document.querySelector('.projectLists')
let deleteButton = document.querySelector('.deleteButton')
let viewProject = document.querySelector('.viewProject')
let viewProjects = document.querySelector('.viewProjects')


myArray = [];
let buttonClicked = false;
let buttonClick;

myButton.addEventListener('click', () =>{
    myProject = projectName.value.trim ();
    if(myProject === ''){
       Error.textContent = "Enter your project";
       Error.style.color = "black" 
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

    if (buttonClick) {
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
    
            element4.addEventListener('click', ()=>{
                let position = index;
                if (position !== '') {
                    myArray.splice(position , 1);
                    localStorage.setItem('db', JSON.stringify(myArray))
                }
                myLists();
            })
    
        })
    }
    else if (buttonClicked) {
        anotherArray.forEach((element, index) => {
            console.log (element);
    
            element1 = element.holder;
            
            if (element1 == projectName.value) {
                
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
    
            element4.addEventListener('click', ()=>{
                let position = index;
                if (position !== '') {
                    myArray.splice(position , 1);
                    localStorage.setItem('db', JSON.stringify(myArray))
                }
                myLists();
            })
        }
    
    })
}
}


viewProject.addEventListener('click',()=>{
    buttonClicked = true;
    myLists();  
})

viewProjects.addEventListener('click', ()=>{
    buttonClick = true;
    myLists();
    buttonClick = false;
})