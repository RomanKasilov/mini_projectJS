let users_url = new URL('https://jsonplaceholder.typicode.com/users/');
console.log(users_url);
let wrapper = document.getElementsByClassName('wrapper')[0];
console.log(wrapper);
fetch(users_url)
    .then(value => value.json())
    .then(value => {
        console.log(value)
        for (let user of value) {
            // console.log(user);
            let {id: userID,name: userName} = user;
            let div = document.createElement('div');
            div.classList.add('user');
            div.classList.add('flex');
            let p= document.createElement('p');
            p.innerText = `${userID} - ${userName}`
            let btn= document.createElement('button');
            btn.innerText = `details`;
            btn.type = 'submit';
            btn.setAttribute('formtarget', "_blank");
            btn.addEventListener('click', () => {
                // document.location.href = `./user-details/user-details.html?user=` + JSON.stringify(user);
                window.open(`./user-details/user-details.html?user=` + JSON.stringify(user), '_blank')
            });
            wrapper.appendChild(div);
            div.append(p, btn);

        }
    });