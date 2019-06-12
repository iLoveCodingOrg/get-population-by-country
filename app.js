// get the countries from API
// print these countries
  // create a element for each country
  // add that element to the select drop down

  document.addEventListener('DOMContentLoaded', ()=>{
    const selectElem = document.querySelector('select#countries')
    fetch('https://54.72.28.201:80/1.0/countries', {
      headers: {
        accept: 'application/json; charset=utf=8'
      }
    })
      .then((res)=>{
        return res.json()
      })
      .then((json)=>{
        printCountries(json.countries)
      })
  
    function printCountries(list){
      console.log(list)
      list.forEach((item)=>{
        const elem = document.createElement('option')
        elem.textContent = item;
        selectElem.appendChild(elem)
      })
    }
  
  })