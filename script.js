document.getElementById('searchIcon').onclick = function() {
    document.getElementById('search').classList.add("visible");
    document.getElementById('clear').classList.add("visible");
    document.getElementById('search').focus();
    document.getElementById('searchIcon').classList.add("hide");
  }
  document.getElementById('clear').onclick = function() {
    document.getElementById('searchIcon').classList.remove("hide");
    document.getElementById('search').classList.remove("visible");
    document.getElementById('clear').classList.remove("visible");
  }

  function searchFun(){
    let filter = document.getElementById("search").value.toUpperCase();
    let item = document.querySelectorAll('.flip-card');
    let l = document.getElementsByTagName("h2");
    for(let i = 0; i <= l.length; i++){  
      let a = item[i].getElementsByTagName('h2')[0];
      let value = a.innerHTML || a.innerText || a.textContent;
      if(value.toUpperCase().indexOf(filter) > -1){
        item[i].style.display="";
      }else{
        item[i].style.display="none";
      }
    }
  }