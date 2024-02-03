const config = {
    headers : {
        Accept : 'application/json'
    }
}
let actualJoke = '';
let data = null;
let response = null;
const container = document.querySelector('.container');
const jokesButton = document.querySelector('#jokesBtn');
jokesButton.addEventListener('click',async ()=>{
    jokesButton.disabled = true;
    response = await fetch('https://icanhazdadjoke.com/',config);
    data = await response.json();
    actualJoke = data.joke;
    console.log(actualJoke);
    const p = document.createElement('p');
    p.classList.add('alert')
    p.classList.add('alert-danger')
    p.innerText = actualJoke;
    container.append(p);
    setTimeout(()=>{
        container.removeChild(p);
        jokesButton.disabled = false;
    },5000)
});
