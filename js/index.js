import { posts } from "./post-datas.js";
import { renderDate, renderMenu } from "./utils.js"

// SIMULATION: no posts 
// posts.splice(0,posts.length)

const articleListEL = document.getElementById('article-listing')
const articleSpanListEL = document.getElementById('article-listing-more')

articleListEL.addEventListener('click', e => {
    if(e.target.id === "article-listing-more"){
        let postsShowed = 0
        posts.forEach( post => {
            post.isShowed ? postsShowed++ : null
        })
        render(postsShowed)
    }
})

function renderHeroPost(){
    const heroPostEl = document.getElementById('hero-post')

    let htmlList = ''
    htmlList += `<span>${posts[0].date.toUpperCase()}</span>
                <h1>${posts[0].title}</h1>
                <p>${posts[0].description}</p>`
    heroPostEl.querySelector('a').innerHTML = htmlList
}

function render(postsSh = 0){
    let htmlList = ''
    if (posts.length > 0) {
        posts.slice(postsSh,postsSh+3).forEach( post => {
        htmlList += `<div class="card" id="card-${post.id}">
                        <img src="./assets/images/${post.image}" alt="${post.alt}">
                        <span>${post.date.toUpperCase()}</span>
                        <h1>${post.title}</h1>
                        <p id="card-description-${post.id}">${post.description}</p>
                    </div>`
        post.isShowed = true
        })
        articleSpanListEL.insertAdjacentHTML("beforebegin", htmlList)

        let postsShowed = 0
        posts.forEach( post => {
            post.isShowed ? postsShowed++ : null
        })
        // console.log(postsShowed)
        postsShowed !== posts.length ? articleSpanListEL.style.display = 'inline' : articleSpanListEL.style.display = 'none'


        var text = document.getElementById("card-description-0").innerHTML;
        var truncated = text.substring(0, 300) + "...";
        document.getElementById("card-description-0").innerHTML = truncated;

    } else {
        articleSpanListEL.style.display = 'none'
        document.getElementById('article-listing').innerHTML = `<h1>Sorry, no posts published!</h1>`
    }
}

render()
renderDate()
renderHeroPost()
renderMenu()

// TODO: INDEX
//  -   render condizionale post principale

// TODO: POST-DATAS
//  -   aggiungi descrizione dettagliata per ogni post per post principlae

// TODO: POST
//  -   render condizionale post principale