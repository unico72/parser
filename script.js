
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
script.text = '$.get("https://market.kz", function(data) {'+
          'var $obj = $(data).find(".grid-ads-item-compact");'+
          'alert($obj);'+
     '}'+
  ');';
document.getElementsByTagName('head')[0].appendChild(script);



/*let win = open("https://market.kz");
if(win){
            win.addEventListener("DOMContentLoaded", function (evt)
            {
                console.log(win.document.title);
                var i = win.document.querySelectorAll('.grid-ads-item-compact');
                alert(i[0].textContent)
            });
} else {
            alert("dont load");           
}*/
