let elInput = document.querySelector(".input");
let elResult = document.querySelector(".result");
let btnSrch = document.querySelector(".srch-btn");

renderGetWeather = (data) => {
  const html = `
  <div class="card " style="width: 18rem">
    <img src="${data.current.condition.icon}" alt="" width="150" />
    <div class="card-body">
        <h5 class="card-title">${data.location.country}</h5>
        <h5 class="card-title">${data.location.name} </h5>
        <h2 class="card-text">${data.current.temp_c}<sup>°c</sup>  ${data.current.condition.text}</h2>
        
        <h5 class="card-title">Local Time:${data.location.localtime}</h5>
     </div>
  </div>
  
`;

  elResult.innerHTML = html;
};

const renderError = function (errMessage) {
  countriesContainer.insertAdjacentText("beforeend", errMessage);
};

const getCountryWeather = async function (country) {
  try {
    const request = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=d8fd97e8bf674cc3b7f142936220302%20&q=${country}&aqi=no`
    );

    const data = await request.json();

    renderGetWeather(data);
  } catch (err) {
    renderError(err.message);
  }
};

btnSrch.addEventListener("click", () => {
  let inputValue = elInput.value;

  getCountryWeather(inputValue);
});
