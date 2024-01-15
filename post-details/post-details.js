let url = new URL(location.href);
console.log(location.href);
let wrapper = document.getElementsByClassName('wrapper')[0];

let post = JSON.parse(url.searchParams.get('post'));
console.log(post);
let post_wrapper = document.createElement('div');
post_wrapper.classList.add('posts_wrapper');
wrapper.appendChild(post_wrapper);
for (let key in post) {
    let post_div = document.createElement('div');
    post_div.classList.add('post_div')
    let pst = document.createElement('p');
    pst.innerText = `${key}: ${post[key]}`;
    post_wrapper.appendChild(post_div);
    post_div.appendChild(pst);
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(res => res.json())
        .then(comments =>{
            console.log(comments);
            let comment_wrapper = document.createElement('div');
            comment_wrapper.classList.add('comments_wrapper');
            wrapper.appendChild(comment_wrapper);
            for (let comment of comments) {
                let comment_div = document.createElement('div');
                comment_div.classList.add('comment_div')
                let comment_name = document.createElement('p');
                let comment_body = document.createElement('p');
                comment_name.innerText = `${comment.name}:`
                comment_body.innerText = `${comment.body}`
                comment_div.append(comment_name, comment_body);
                comment_wrapper.appendChild(comment_div);
            }

        })


}