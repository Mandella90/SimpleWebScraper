const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:7777/results')
.then(response => response.json())
.then(data => {
    data.forEach(article => {
        const title = '<a href=' + article.url + '><h3>' + article.title + '</h3></a>'
        feedDisplay.insertAdjacentHTML("beforeend", title)
    })
})