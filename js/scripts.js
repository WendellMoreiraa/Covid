const _elements = {
    loading: document.querySelector(".loading"),
    switch: document.querySelector(".switch__track"),
    stateSelectToggle: document.querySelector(".state-select-toggle"),
    selectOptions: document.querySelectorAll(".state-select-list__item"),
    selectList: document.querySelector(".state-select-list"),
    selectToggleIcon: document.querySelector(".state-select-toggle__icon"),
    selectSearchBox: document.querySelector(".state-select-list__search"),
    selectStateSelected: document.querySelector(".state-select-toggle__state-selected"),
    confirmed: document.querySelector(".info__total--confirmed"),
    deaths: document.querySelector(".info__total--deaths"),
    deathsDescriptions: document.querySelector(".data-box__description"),
    vaccinated1: document.querySelector(".info__total--vaccinated-1"),
    vaccinated2: document.querySelector(".info__total--vaccinated-2"),
    
}

const _data = {
    id: "brasil=true",
    vaccinatedInfo: undefined,
    vaccinated:undefined,
    confirmed:undefined,
    deaths:undefined,
}
const _charts = {};

_elements.switch.addEventListener("click", () =>{

        const isDark =  _elements.switch.classList.toggle("switch__track--dark");
        if(isDark)
          document.documentElement.setAttribute("data-theme", "dark")
          else 
          document.documentElement.setAttribute("data-theme", "light")
});

_elements.stateSelectToggle.addEventListener("click", () =>{
    
    _elements.selectList.classList.toggle("state-select-list--show");
    
});

_elements.selectOptions.forEach(item => {
    item.addEventListener("click", () =>{
        _elements.selectStateSelected.innerText = item.innerText;

        _data.id = item.getAttribute("data-id");
        _elements.stateSelectToggle.dispatchEvent(new Event("click"));
    })

});

_elements.selectSearchBox.addEventListener("keyup", (e) =>{
    const search = e.target.value.toLowerCase();

    for(const item of _elements.selectOptions){
        const state = item.innerText.toLowerCase();

        if(state.includes(search)){
            item.classList.remove("state.select-list_item--hide")
        }
        else{
            item.classList.add("state.select-list_item--hide")
        }

    }
})

const request = async (api, id) => {
try{
    const url = api + id;
    const data = await fetch(url);
    const json = await data.json();
   
    return json;
}
catch(e){
    console.log(e);
}
 
}

const loadData = async (id) => {
_data.confirmed = await request(_api.confirmed, id)
_data.vaccinated = await request(_api.vaccinated, id)
_data.deaths =await request(_api.deaths, id)
_data.vaccinatedInfo = await request(_api.vaccinatedInfo, "")

}

const createBasicChart = (element, config) => {

}

const createDonutChart = (element) => {

}

const createStackedColumnsChart = (element) => {

}

const createCharts = () => {

}

const updateCards = () => {

    const uf =_ufs[_data.id];
    _elements.confirmed.innerText = _data.confirmed[_data.confirmed.length - 1]["total_de_casos"];
    _elements.deaths.innerText =_data.deaths[_data.deaths.length-1]["total_de_mortes"];

}

const updateCharts = () => {

}

const getChartOptions = (series, labels, colors) => {

}

const getDonutChartOptions = (value, name, colors) => {

}

loadData(_data.id);
createCharts();


