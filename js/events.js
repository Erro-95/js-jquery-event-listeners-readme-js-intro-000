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
  $('#typing').on('keydown', e => {
    key = e.key
    if (e.key === 'g'.toUpperCase()){
      alert(`${e.key} has been pressed`)
    }
  })
}

function submitIt(){
  $(':submit').on('submit', e => {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

getIt()
frameIt()
pressIt()
submitIt()

});
