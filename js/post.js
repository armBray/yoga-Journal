import { posts } from "./post-datas.js";
import { renderDate, renderMenu } from "./utils.js"

// no posts simulation
// posts.splice(0,posts.length)

// const articleListEL = document.getElementById('article-listing')
const articleListEL = document.getElementById('article-listing-recent')

function renderHeroPost(){
    const heroPostEl = document.getElementById('hero-post-article')

    let htmlList = ''
    htmlList += `<span>${posts[0].date.toUpperCase()}</span>
                <h1>${posts[0].title}</h1>
                <p>${posts[0].description}</p>
                <img src="../assets/images/${posts[0].image}" alt="${posts[0].alt}">`
    posts[0].article.forEach( sub => {
        htmlList += `<div class="paragraph">
                        <h3>${sub.subTitle}</h3>
                        <p>${sub.paragraph}</p>
                    </div>`
    })
    heroPostEl.innerHTML = htmlList
}

function render(){
    let htmlList = ''
    if (posts.length > 0) {
        console.log(posts.slice(posts.length-3,posts.length+3));
        
        posts.slice(posts.length-3,posts.length+3).forEach( post => {
        htmlList += `<div class="card" id="card-${post.id}">
                        <img src="../assets/images/${post.image}" alt="${post.alt}">
                        <span>${post.date.toUpperCase()}</span>
                        <h1>${post.title}</h1>
                        <p>${post.description}</p>
                    </div>`
        })
        // console.log(htmlList);
        articleListEL.insertAdjacentHTML("afterend", htmlList)

    } else {
        document.getElementById('article-listing').innerHTML = `<h1>Sorry, no posts published!</h1>`
    }
}

render()
renderDate()
renderHeroPost()
renderMenu()