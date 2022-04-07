function slideIn(elem){
  elem.className+=" col";
  elem.style.transform="translateY(0)";
}

var itemSection=document.getElementsByClassName('itemSection');

function loadIn(item){
  slideIn(item);
}

function active(){
  $('.imageRow').style.height='200px';
  $('#spacer').style.height='10px';
}

document.addEventListener("DOMContentLoaded", function(){
  for(let i=0;i<itemSection.length;i++){
    setInterval(loadIn(itemSection[i]),1000);
  }
  for(let i=0;i<itemSection.length;i++){
    itemSection[i].addEventListener('click',function(elem){
      if(elem.target.id=='one'){
        $('#oneContent').toggle('slow');
        $('#oneB').classList.toggle('active');
        active();
      }
      else if(elem.target.id=='two') {
        $('#twoContent').toggle('slow');
        $('#twoB').classList.toggle('active');
        active();
      }
      else if(elem.target.id=='three'){
        $('#threeContent').toggle('slow');
        $('#threeB').classList.toggle('active');
        active();
      }
    });
  }
});
