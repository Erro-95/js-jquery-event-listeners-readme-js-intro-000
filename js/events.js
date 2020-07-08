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
  $('input#typing').on('keydown', e => {
    key = e.key
    if (key === 'g'.toUpperCase()){
      alert(`${key} has been pressed`)
    }
  })
}

function submitIt(){
  $('input:submit').on('submit', e => {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

getIt()
frameIt()
pressIt()
submitIt()

});
