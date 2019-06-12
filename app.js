// 

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
      list.forEach((item)=>{
        const elem = document.createElement('option')
        elem.textContent = item;
        selectElem.appendChild(elem)
      })
    }
  
    function getPopulation(country){
      fetch(`http://54.72.28.201:80/1.0/population/2000/${country}/`, {
        headers: {
          accept: 'application/json; charset=utf=8'
        }
      })
      .then((res)=>{
        return res.json()
      })
      .then((json)=>{
        const total = json.reduce((accumulator, item)=>{
          if(item.age > 90){
            return accumulator + item.total
          } else {
            return accumulator
          }
        }, 0)
        population.textContent = total
      })
    }
  
  })