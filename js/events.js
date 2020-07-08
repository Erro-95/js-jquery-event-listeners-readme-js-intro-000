function getIt(){
  $('p').on('click', e => {
    alert('Hey!')
  })
}

function frameIt(){
  $('img').on('load', e => {
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $('form').on('keydown', e => {
    key = e.key
    console.log(e)
    if (key === 'g'.toUpperCase()){
      alert(`${key} has been pressed`)
    }
  })
}

function submitIt(){
  $('form').on('submit', e => {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

getIt()
frameIt()
pressIt()
submitIt()

});
