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
            div.classList.add('user', 'flex','center');
            // div.classList.add('flex');
            // div.classList.add('center');
            let id = document.createElement('div');
            id.classList.add('id','flex','center');
            // id.classList.add('center');
            id.innerText = `${userID}`
            let h2= document.createElement('h2');
            h2.innerText = `${userName}`
            let btn= document.createElement('button');
            btn.innerText = `Details`;
            btn.type = 'submit';
            btn.setAttribute('formtarget', "_blank");
            btn.addEventListener('click', () => {
                // document.location.href = `./user-details/user-details.html?user=` + JSON.stringify(user);
                window.open(`./user-details/user-details.html?user=` + JSON.stringify(user), '_blank')
            });
            wrapper.appendChild(div);
            div.append(id,h2, btn);

        }
    });