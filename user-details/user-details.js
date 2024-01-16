
let url = new URL(location.href);
console.log(location.href);
let wrapper = document.getElementsByClassName('wrapper')[0];

let user = JSON.parse(url.searchParams.get('user'));
console.log(user);
//використовуємо функцію з  рекурсєію
function getInfo(object,father,tag) {
    // object: об'єкт ітерації,
    // father: вибір батьківського елементу для appendChild,
    // tag: назва тегу для виводу інфо. (ul,li)
    for (let key in object) {
        // console.log(key);
        // console.log(typeof object[key] !== 'object');
        if (typeof object[key] !== 'object'){
            let place = document.createElement(tag);
            father.appendChild(place);
            // place.innerText = `${key}: ${object[key]}`
            place.innerHTML= `<span>${key}:</span> ${object[key]}`
        }else {
            let ul = document.createElement("ul");
            father.appendChild(ul);
            // ul.innerText = `${key}`
            ul.innerHTML = `<span>${key}:</span>`

            getInfo(object[key],ul, 'li');
        }
    }
}
getInfo(user,wrapper,'ul');
console.log(user.id);

// Додаємо конпку з інфо про пости
let btn = document.getElementById('post_btn');
console.log(btn)
btn.addEventListener('click', () => {
fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(res => res.json())
    .then(posts =>{
        console.log(posts);
        let post_wrapper = document.createElement('div');
        post_wrapper.classList.add('post_wrapper');
        // ітеруємо масив з постами
        for (let post of posts) {
            let div = document.createElement('div');
            div.classList.add('post','flex_center')
            let title = document.createElement('div');
            title.classList.add('title','flex_center');
            title.innerText = `${post.title}`;
            let button = document.createElement('button');
            button.innerText = 'post-details';
            button.addEventListener('click', () =>{
                // document.location.href = `../post-details/post-details.html?post=` + JSON.stringify(post);
                window.open(`../post-details/post-details.html?post=` + JSON.stringify(post), '_blank')
            })
            document.body.appendChild(post_wrapper);
            post_wrapper.appendChild(div);
            div.append(title, button);
            btn.style.display = "none";
        }
    })
})