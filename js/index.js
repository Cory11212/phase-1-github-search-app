const form = document.getElementById('github-form')
const box = document.getElementById('search')
const contain1 = document.getElementById('user-list')
const contain2 = document.getElementById('repos-list')
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    //console.log(search.value)
    fetch('https://api.github.com/search/users?q=octocat')
        .then((response) => response.json())
        .then((json) => {
            json.items.forEach(element => {
                if(element.login === box.value){
                    p1 = document.createElement('p')
                    p1.innerText = `name: ${element.login}`
                    img = document.createElement('img')
                    img.addEventListener('click', ()=>{
                        fetch(`https://api.github.com/users/${element.login}/repos`)
                        .then((response) => response.json())
                        .then((json) => {
                            json.forEach(item =>{
                                console.log(item)
                                let an = document.createElement('a')
                                let li = document.createElement('li')
                                an.href = item.archive_url
                                an.innerText = item.full_name
                                li.appendChild(an)
                                contain2.appendChild(li)
                            })
                        })
                    })
                    img.src = element.avatar_url
                    anchor = document.createElement('a')
                    anchor.href = element.html_url
                    anchor.innerText = `visit ${element.login}\'s page here`
                    contain1.append(p1, img, anchor)
                    

                }
            });
        });
})