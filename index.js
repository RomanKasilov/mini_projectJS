let users_url = new URL('https://jsonplaceholder.typicode.com/users/');
console.log(users_url);
let wrapper = document.getElementsByClassName('wrapper')[0]; // Div-обгортка
console.log(wrapper);
fetch(users_url)
    .then(value => value.json())
    .then(value => {
        console.log(value)
        for (let user of value) {
            // console.log(user);
            let {id: userID,name: userName} = user;
            let div = document.createElement('div');    //обгортка для User
            div.classList.add('user', 'flex_center');

            let id = document.createElement('div');     //User id
            id.classList.add('id','flex_center');
            id.innerText = `${userID}`

            let h2= document.createElement('h2');   //User name
            h2.innerText = `${userName}`

            let btn= document.createElement('button');  //button "details"
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