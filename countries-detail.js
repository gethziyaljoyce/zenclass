var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
    var data = JSON.parse(this.response);
    listFlag(data);
    listCountryDetails(data);
};
xhr.send();

function listFlag(data) {
    for (i = 0; i < data.length; i++) {
        console.log(data[i].name, data[i].flag);
    }
}

function listCountryDetails(data) {
    for (i = 0; i < data.length; i++) {
        console.log("name:" + data[i].name);
        console.log("region:" + data[i].region);
        console.log("subregion:" + data[i].subregion);
        console.log("population:" + data[i].population);
    }

}

