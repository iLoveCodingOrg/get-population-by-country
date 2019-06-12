// When the Select OPTION changes
// Make another call to get the info
// Print the info on the screen

document.addEventListener('DOMContentLoaded', ()=>{
    const selectElem = document.querySelector('select#countries');
  
    selectElem.addEventListener('change', (event)=>{
      console.log(event.target.selectedOptions[0].innerText)
    })
  
  
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