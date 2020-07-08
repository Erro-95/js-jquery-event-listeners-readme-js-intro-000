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
    key = e.which
    if (key === 71){
      alert(`${e.key} has been pressed`)
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
