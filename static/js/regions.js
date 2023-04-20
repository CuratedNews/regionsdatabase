const currenturl = window.location.href;
const loader = document.getElementById("loader");
loader.style.display = "none";

document.getElementById('regionfilter').addEventListener("change", function() {
    if (this.value === "select") {
        window.location.replace("index.html");
    } else if (this.value === "alabama") {
        window.location.replace("index.html?=alabama");
    } else if (this.value === "alaska") {
        window.location.replace("index.html?=alaska");
    } else if (this.value === "arizona") {
        window.location.replace("index.html?=arizona");
    } else if (this.value === "arkansas") {
        window.location.replace("index.html?=arkansas");
    } else if (this.value === "california") {
        window.location.replace("index.html?=california");
    } else if (this.value === "colorado") {
        window.location.replace("index.html?=colorado");
    } else if (this.value === "connecticut") {
        window.location.replace("index.html?=connecticut");
    } else if (this.value === "delaware") {
        window.location.replace("index.html?=delaware");
    } else if (this.value === "florida") {
        window.location.replace("index.html?=florida");
    } else if (this.value === "georgia") {
        window.location.replace("index.html?=georgia");
    } else if (this.value === "hawaii") {
        window.location.replace("index.html?=hawaii");
    } else if (this.value === "idaho") {
        window.location.replace("index.html?=idaho");
    } else if (this.value === "illinois") {
        window.location.replace("index.html?=illinois");
    } else if (this.value === "indiana") {
        window.location.replace("index.html?=indiana");
    } else if (this.value === "iowa") {
        window.location.replace("index.html?=iowa");
    } else if (this.value === "kansas") {
        window.location.replace("index.html?=kansas");
    } else if (this.value === "kentucky") {
        window.location.replace("index.html?=kentucky");
    } else if (this.value === "louisiana") {
        window.location.replace("index.html?=louisiana");
    } else if (this.value === "maine") {
        window.location.replace("index.html?=maine");
    } else if (this.value === "maryland") {
        window.location.replace("index.html?=maryland");
    } else if (this.value === "massachusetts") {
        window.location.replace("index.html?=massachusetts");
    } else if (this.value === "michigan") {
        window.location.replace("index.html?=michigan");
    } else if (this.value === "minnesota") {
        window.location.replace("index.html?=minnesota");
    } else if (this.value === "mississippi") {
        window.location.replace("index.html?=mississippi");
    } else if (this.value === "missouri") {
        window.location.replace("index.html?=missouri");
    } else if (this.value === "montana") {
        window.location.replace("index.html?=montana");
    } else if (this.value === "nebraska") {
        window.location.replace("index.html?=nebraska");
    } else if (this.value === "nevada") {
        window.location.replace("index.html?=nevada");
    } else if (this.value === "new_hampshire") {
        window.location.replace("index.html?=new_hampshire");
    } else if (this.value === "new_jersey") {
        window.location.replace("index.html?=new_jersey");
    } else if (this.value === "new_mexico") {
        window.location.replace("index.html?=new_mexico");
    } else if (this.value === "new_york") {
        window.location.replace("index.html?=new_york");
    } else if (this.value === "north_carolina") {
        window.location.replace("index.html?=north_carolina");
    } else if (this.value === "north_dakota") {
        window.location.replace("index.html?=north_dakota");
    } else if (this.value === "ohio") {
        window.location.replace("index.html?=ohio");
    } else if (this.value === "oklahoma") {
        window.location.replace("index.html?=oklahoma");
    } else if (this.value === "oregon") {
        window.location.replace("index.html?=oregon");
    } else if (this.value === "pennsylvania") {
        window.location.replace("index.html?=pennsylvania");
    } else if (this.value === "rhode_island") {
        window.location.replace("index.html?=rhode_island");
    } else if (this.value === "south_carolina") {
        window.location.replace("index.html?=south_carolina");
    } else if (this.value === "south_dakota") {
        window.location.replace("index.html?=south_dakota");
    } else if (this.value === "tennessee") {
        window.location.replace("index.html?=tennessee");
    } else if (this.value === "texas") {
        window.location.replace("index.html?=texas");
    } else if (this.value === "utah") {
        window.location.replace("index.html?=utah");
    } else if (this.value === "virginia") {
        window.location.replace("index.html?=virginia");
    } else if (this.value === "washington") {
        window.location.replace("index.html?=washington");
    } else if (this.value === "washington_dc") {
        window.location.replace("index.html?=washington_dc");
    } else if (this.value === "west_virginia") {
        window.location.replace("index.html?=west_virginia");
    } else if (this.value === "wisconsin") {
        window.location.replace("index.html?=wisconsin");
    } else if (this.value === "wyoming") {
        window.location.replace("index.html?=wyoming");
    }
});

if (currenturl.includes("selectaregion")){

} else if (currenturl.includes("alabama")){
    addScript('./regions/united_states/curatedregionsalabama.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("alaska")){
    addScript('./regions/united_states/curatedregionsalaska.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("arizona")){
    addScript('./regions/united_states/curatedregionsarizona.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("arkansas")){
    addScript('./regions/united_states/curatedregionsarkansas.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("california")){
    addScript('./regions/united_states/curatedregionscalifornia.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("colorado")){
    addScript('./regions/united_states/curatedregionscolorado.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("connecticut")){
    addScript('./regions/united_states/curatedregionsconnecticut.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("delaware")){
    addScript('./regions/united_states/curatedregionsdelaware.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("florida")){
    addScript('./regions/united_states/curatedregionsflorida.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("georgia")){
    addScript('./regions/united_states/curatedregionsgeorgia.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("hawaii")){
    addScript('./regions/united_states/curatedregionshawaii.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("idaho")){
    addScript('./regions/united_states/curatedregionsidaho.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("illinois")){
    addScript('./regions/united_states/curatedregionsillinois.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("indiana")){
    addScript('./regions/united_states/curatedregionsindiana.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("iowa")){
    addScript('./regions/united_states/curatedregionsiowa.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("kansas")){
    addScript('./regions/united_states/curatedregionskansas.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("kentucky")){
    addScript('./regions/united_states/curatedregionskentucky.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("louisiana")){
    addScript('./regions/united_states/curatedregionslouisiana.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("maine")){
    addScript('./regions/united_states/curatedregionsmaine.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("maryland")){
    addScript('./regions/united_states/curatedregionsmaryland.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("massachusetts")){
    addScript('./regions/united_states/curatedregionsmassachusetts.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("michigan")){
    addScript('./regions/united_states/curatedregionsmichigan.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("minnesota")){
    addScript('./regions/united_states/curatedregionsminnesota.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("mississippi")){
    addScript('./regions/united_states/curatedregionsmississippi.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("missouri")){
    addScript('./regions/united_states/curatedregionsmissouri.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("montana")){
    addScript('./regions/united_states/curatedregionsmontana.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("nebraska")){
    addScript('./regions/united_states/curatedregionsnebraska.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("nevada")){
    addScript('./regions/united_states/curatedregionsnevada.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("new_hampshire")){
    addScript('./regions/united_states/curatedregionsnewhampshire.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("new_jersey")){
    addScript('./regions/united_states/curatedregionsnewjersey.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("new_mexico")){
    addScript('./regions/united_states/curatedregionsnewmexico.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("new_york")){
    addScript('./regions/united_states/curatedregionsnewyork.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("north_carolina")){
    addScript('./regions/united_states/curatedregionsnorthcarolina.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("north_dakota")){
    addScript('./regions/united_states/curatedregionsnorth_dakota.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("ohio")){
    addScript('./regions/united_states/curatedregionsohio.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("oklahoma")){
    addScript('./regions/united_states/curatedregionsoklahomaa.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("oregon")){
    addScript('./regions/united_states/curatedregionsoregon.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("pennsylvania")){
    addScript('./regions/united_states/curatedregionspennsylvania.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("rhode_island")){
    addScript('./regions/united_states/curatedregionsrhodeisland.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("south_carolina")){
    addScript('./regions/united_states/curatedregionssouthcarolina.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("south_dakota")){
    addScript('./regions/united_states/curatedregionssouthdakota.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("tennessee")){
    addScript('./regions/united_states/curatedregionstennessee.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("texas")){
    addScript('./regions/united_states/curatedregionstexas.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("utah")){
    addScript('./regions/united_states/curatedregionsutah.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("vermont")){
    addScript('./regions/united_states/curatedregionsvermont.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("virginia") && !currenturl.includes("west_virginia")){
    addScript('./regions/united_states/curatedregionsvirginia.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("washington") && !currenturl.includes("washington_dc")){
    addScript('./regions/united_states/curatedregionswashington.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("washington_dc")){
    addScript('./regions/united_states/curatedregionswashingtondc.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("west_virginia")){
    addScript('./regions/united_states/curatedregionswestvirginia.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("wisconsin")){
    addScript('./regions/united_states/curatedregionswisconsin.js');
    loader.style.display = "inline-block";
} else if (currenturl.includes("wyoming")){
    addScript('./regions/united_states/curatedregionswyoming.js');
    loader.style.display = "inline-block";
}

window.onscroll = function() {scrollFunction()};
let mybutton = document.getElementById("clearfilter");

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "inline-block";
    } else {
        mybutton.style.display = "none";
    }
}

function addScript( src ) {
    var s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    document.body.appendChild( s );
}