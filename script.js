function slideIn(elem){
  elem.className+=" col";
  elem.style.transform="translateY(0)";
}

var itemSection=document.getElementsByClassName('itemSection');
var panel=document.getElementsByClassName('contentRow');

function active(){
  $('.imageRow').style.height='200px';
  $('#spacer').style.height='10px';
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

document.addEventListener("DOMContentLoaded", function(){
  for(let i=0;i<itemSection.length;i++){
    setTimeout(function(){
      slideIn(itemSection[i]);
    },500 * i);
  }

  for(let i=0;i<itemSection.length;i++){
    itemSection[i].addEventListener('click',function(elem){
      var setClasses= !this.classList.contains('open');
      setClass(itemSection, 'active', 'remove');
      setClass(panel, 'open', 'remove');
      if (setClasses) {
            this.classList.toggle("active");
            if(this.classList.contains("one")){
              panel[0].classList.toggle('open');
            }
            else if(this.classList.contains("two")){
              panel[1].classList.toggle('open');
            }
            else if(this.classList.contains("three")){
              panel[2].classList.toggle('open');
            }
        }
    });
  }
});
