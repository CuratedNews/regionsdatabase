const filterbox = document.getElementById('filterbox');

filterbox.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    learnMore(event.target.name);
});

async function learnMore(name){
    const aboutsource = await fetchWikiJson(name).then(json => {return json});
    let parsejsonresponse = aboutsource["query"]["pages"];
    let parsejsonresponse2 = parsejsonresponse[Object.keys(parsejsonresponse)[0]];
    let content = truncate(parsejsonresponse2["extract"], 500);
    if (content){
        if (window.innerWidth < 960) {
            content = truncate(parsejsonresponse2["extract"], 250);
        }
        content = content.replace('( (listen))','');
        content = content.replace('()','');
        openModal(`${name}`, `${content}...`, "fa-leanpub", "neutralbutton", name);
    } else {
        openModal(`${name}`, `No information is available for this news source.`, "fa-leanpub", "neutralbutton", "");
    }
}

function openModal(title, message, icon, colorclass, name){
    const modal = document.getElementById("modal");
    const closemodal = document.getElementById("close-modal");
    const titlemodal = document.getElementById("title-modal");
    const messagemodal = document.getElementById("message-modal");
    const readmore = document.getElementById("readmore");
    if (name){
        readmore.href = `https://en.wikipedia.org/wiki/${name}`;
    } else {
        readmore.style.display = "none";
    }
    titlemodal.innerHTML = `<i class='fa ${icon} ${colorclass}' aria-hidden='true'></i> ${title}`;
    messagemodal.innerText = message;
    modal.style.display = "block";
    closemodal.addEventListener('click', (event) => {
        modal.classList.add("dissolve");
        setTimeout(function(){
            modal.style.display = "none";
            modal.classList.remove("dissolve");
        },500);
    });
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}