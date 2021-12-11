let win = open("https://market.kz");
if(win){
            win.addEventListener("DOMContentLoaded", function (evt)
            {
                console.log(win.document.title);
                var i = win.document.querySelectorAll('.grid-ads-item-compact');
                alert(i[0].textContent)
            });
} else {
            alert("dont load");           
}
