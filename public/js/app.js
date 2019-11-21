const weatherForm = document.querySelector('form')
const searchinput =document.querySelector('input')
const msg1 =document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = searchinput.value
    
   msg2.textContent ='Loading...'
   
    fetch('/weather?address='+location).then((response)=>{
     response.json().then((data)=>{
         if(data.error){
             msg1.textContent= data.error
         }
         else{
            msg1.textContent = ''+data.location
            msg2.textContent =data.forecast
         }
    
    console.log(data.address)
    console.log(data.location)
    console.log(data.forecast)
})
    
})

})
