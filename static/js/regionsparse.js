const currentpage2split = currenturl.split("?=");
if (currentpage2split[1]){
    setTimeout(parseIt, 1000)
}

function parseIt() {
    let regionname = capitalizeFirstLetter(currentpage2split[1]);
    const regionarray = eval(currentpage2split[1]);
    const search = document.getElementById("search");
    let backgroundimage = 0;
    let total = 0;
    let imagecount = 0;
    let descriptioncount = 0;
    let summarycount = 0;
    let rsscount = 0;
    regionarray.forEach(item => {
        let imageavailable;
        let rsstrue = "";
        const region = item["State"];
        const name = item["Name"];
        const link = item["Link"];
        const title = item["Title"];
        const subtitle = item["Subtitle"];
        let description = item["Description"];
        const summary = item["Summary"];
        const rss = item["RSS"];
        const image = item["Image"];
        const imagestring = item["ImageString"];
        backgroundimage++;
        total++;
        if (description === null || description === ""){
            description = "";
        } else {
            descriptioncount++;
        }
        if (summary){
            summarycount++;
        }
        if (rss){
            rsstrue = `<a href="${rss}" id='myBtn' class='regular_btn2'>RSS</a>`;
            rsscount++;
        }
        if (imagestring === null || imagestring === ""){
            imageavailable = "noimage";
        } else {
            imageavailable = "cardimagejustified";
            imagecount++;
        }
        regionname = underlineRemove(regionname);
        search.innerHTML += `<style>.newsbackgroundimage${backgroundimage} { background-image: url('data:image/png;base64,${imagestring}'); }</style><div class='col-12 newscardview backgroundimageheadlines newsbackgroundimage${backgroundimage}'><div class='post'><div class='post-head newscardtitle resizeallfeature'><h2 class='resizeallfeature textoverpicture ${imageavailable}'>${name}</h2><div class='post-content newscardsummary resizeallfeature removeallfeature ${imageavailable}' id='content'>${description}</div>${rsstrue}<a href='${link}' target='_blank' class='readmore_btn'>Site</a><button id="modal-open${backgroundimage}" name="${name}" class="readmore_btn">Learn more</button>`;
    });
    Do();
    document.getElementById("regionalanalysis").innerHTML = `<div class="main-box"><div class="big-box box big-box-classifier explanatorybox"><h1>About this region</h1><input id="exploresomecases" type="checkbox" class="slideout"><label for="exploresomecases" class="explanatoryboxbutton calltoaction">Explore</label><br><div class="slideoutcontent"><div id="aboutregion" class="explanatoryfocals"><h3>Whoops! Couldn't find anything!</h3></div><br><div id="donutchart" class="explanatoryfocals explanatoryfocalsdonut"></div></div></div></div>`
    var options = {series: [{name: 'Actual',data: [{x: 'Descriptions',y: descriptioncount,goals: [{name: 'Expected',value: total,strokeWidth: 5,strokeHeight: 10,strokeColor: '#775DD0'}]},{x: 'Summaries',y: summarycount,goals: [{name: 'Expected',value: total,strokeWidth: 5,strokeHeight: 10,strokeColor: '#775DD0'}]},{x: 'Logos/Images',y: imagecount,goals: [{name: 'Expected',value: total,strokeWidth: 5,strokeHeight: 10,strokeColor: '#775DD0'}]},{x: 'RSS Feeds',y: rsscount,goals: [{name: 'Expected',value: total,strokeWidth: 5,strokeHeight: 10,strokeColor: '#775DD0'}]}]}], title: {text: `Missing data in ${regionname}`,align: 'left',margin: 10,offsetX: 0,offsetY: 0,floating: false,style: {fontSize: '16px',fontWeight: 'bold',fontFamily: 'Poppins',color:  '#000'}},chart: {toolbar: {show: false},height: 350,type: 'bar'},plotOptions: {bar: {horizontal: true,}},colors: ['#1854f1'],dataLabels: {formatter: function(val, opt) {const goals = opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals; if (goals && goals.length) {return `${val} / ${goals[0].value}`}return val}},legend: {show: true,showForSingleSeries: true,customLegendItems: ['Actual', 'Expected'],markers: {fillColors: ['#1854f1', '#775DD0']}}};
    var chart = new ApexCharts(document.querySelector("#donutchart"), options);
    chart.render();
    loader.style.display = "none";
}

function capitalizeFirstLetter(str) {
    str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
}

async function Do(){
    let regionname = capitalizeFirstLetter(currentpage2split[1]);
    const aboutregion = await fetchWikiJson(regionname).then(json => {return json});
    let parsejsonresponse = aboutregion["query"]["pages"];
    let parsejsonresponse2 = parsejsonresponse[Object.keys(parsejsonresponse)[0]];
    let content = truncate(parsejsonresponse2["extract"], 650);
    content = content.replace('( (listen))','');
    content = content.replace('()','');
    regionname = underlineRemove(regionname);
    document.getElementById("aboutregion").innerHTML = `<h3>${regionname}'s History</h3><br>${content}...&nbsp;<a href='https://en.wikipedia.org/wiki/${regionname}' target='_blank'>read more</a><br><br>`;
}

async function fetchWikiJson(term) {
   try {
       let response = await fetchWithTimeout(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${term}&format=json&origin=*`, {
            timeout: 2000,
            mode: "cors",
            headers: {"Content-Type": "text/plain;charset=UTF-8"},
            referrer: "",
            referrerPolicy: "no-referrer",
            credentials: "omit",
            method: "GET",
            keepalive: false,
            redirect: "error",
            cache: "no-cache"
       });
       return await response.json();
   } catch (error) {

   }
}

async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 2000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
        ...options,
        signal: controller.signal
    });
    clearTimeout(id);
    return response;
}

function truncate (string = '', truncate = 0) {
    return string.substring(0, truncate)
}

function underlineRemove(string){
    if (string.includes("_")){
        string = string.split("_");
        var firstname = capitalizeFirstLetter(string[0]);
        var secondname = capitalizeFirstLetter(string[1]);
        string = `${firstname} ${secondname}`;
    }
    return string;
}
