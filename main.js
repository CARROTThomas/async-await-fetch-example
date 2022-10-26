/*
fetch('https://api.chucknorris.io/jokes/random')

    .then(uneReponse=>uneReponse.json())
    .then(trucDésérialisé=>{

    console.log(trucDésérialisé)
    })
 */


async function getAJoke(category=null){
    //if else
    let reponse = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)

    let donnees = await reponse.json()

    return donnees

}

function createJokeElement(joke){
    let template =
        `        
        <li class="list-group-item">${joke}
        <button class="btn btn-danger suppr">
                <i class="bi bi-trash"></i>
        </button></li>
        `

    document.querySelector("#jokesList").innerHTML+=template
}



async function getACategory(){
    let data = await fetch('https://api.chucknorris.io/jokes/categories')
    let category= await data.json()
    console.log(category)
    return category
}

function createBtnCategory(category){
    let template =
        `
        <button id="${category}" class="btn btn-success col-2 add">${category}</button>
        `
    document.querySelector("#btnList").innerHTML+=template
}



getACategory().then(category=>{
    category.forEach(categorie=>{
        createBtnCategory(categorie)
    })
    let btnsAdd = document.querySelectorAll('.add')
    btnsAdd.forEach(btnAdd=>{
        btnAdd.addEventListener('click', ()=>{
            getAJoke(btnAdd.id).then(blague=>{
                createJokeElement(blague.value)

                let delButtons = document.querySelectorAll('.suppr')
                delButtons.forEach(delButton=>{
                    delButton.addEventListener('click', ()=>{
                        delButton.parentElement.remove()
                    })
                })
            })
        })
    })

})




/*
document.querySelector(".add").addEventListener('click',()=>{

    getAJoke().then(blague=>{
        createJokeElement(blague.value)
    })
})

*/







