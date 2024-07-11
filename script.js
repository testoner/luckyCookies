const body = document.querySelector('body');

const data = [
    {id: 0,text: 'Все будет добре1'},
    {id: 1,text: 'Все будет добре2'},
    {id: 2,text: 'Все будет добре3'},
    {id: 3,text: 'Все будет добре4'},
    {id: 4,text: 'Все будет добре5'},
    {id: 5,text: 'Все будет добре6'},
    {id: 6,text: 'Все будет добре7'},
    {id: 7,text: 'Все будет добре8'},
    {id: 8,text: 'Все будет добре9'},
    {id: 9,text: 'Все будет добре10'},
    {id: 10,text: 'Все будет добре11'},
    {id: 11,text: 'Все будет добре12'},
]

function shuffleData(data){
    let array = [...data];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateCookies(data){
    const container = document.querySelector('.cookie-container');
    container.onclick = openCookie;
    data.forEach((el) => {
        generateCookie(container,el.id);
    })
}

function createWrapper(){
    const el = document.createElement('div');
    el.setAttribute('class','cookie-wrapper');
    el.innerHTML=`
            <div class="cookie-container">
            </div>
    `;
    body.appendChild(el)
}

function generateCookie(container,index){
    const x = document.createElement('div');
    x.setAttribute('class','cookie');
    x.innerHTML = `
            <img data-text='${index}' src="https://images-eu-prod.cms.commerce.dynamics.com/cms/api/hspgpkctvh/imageFileData/MD2z3v?ver=d9e3" alt="cookie image">
    `;
    container.appendChild(x);
}

function openCookie(event){
    generateOpenCookie(data[event.target.dataset.text].text);
}

function activateCloseBtn(){
    const close = document.querySelector('.btn-close');
    close.onclick = () => {
        const trash = document.querySelector('.open-cookie-wrapper');
        trash.remove();
    } 
}

function generateOpenCookie(text){
    const trash = document.querySelector('.cookie-wrapper');
    trash.remove();
    const el = document.createElement('div');
    el.setAttribute('class','open-cookie-wrapper');
    el.innerHTML = `
        <div class="open-cookie">
            <div class='btn-close'>
                <div class='first-line'></div>
                <div class='second-line'></div>
            </div>
            <img src="https://images-eu-prod.cms.commerce.dynamics.com/cms/api/hspgpkctvh/imageFileData/MD2E5q?ver=701a" alt="openCookie">
            <p>${text}</p>
        </div>
    `;
    body.appendChild(el);
    activateCloseBtn();
}

createWrapper();
generateCookies(shuffleData(data));