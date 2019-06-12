// When the Select OPTION changes
// Make another call to get the info
// Print the info on the screen

document.addEventListener('DOMContentLoaded', ()=>{
    const population = document.querySelector('.population')
    const selectElem = document.querySelector('select#countries');
  
    selectElem.addEventListener('change', (event)=>{
      getPopulation(event.target.selectedOptions[0].innerText);
    })
  
    fetch('http://54.72.28.201:80/1.0/countries', {
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
  
    function getPopulation(country){
      fetch(`http://54.72.28.201:80/1.0/population/2000/${country}/100/`, {
        headers: {
          accept: 'application/json; charset=utf=8'
        }
      })
      .then((res)=>{
        return res.json()
      })
      .then((json)=>{
        population.textContent = json[0].total
        console.log(json)
      })
    }
  
  })