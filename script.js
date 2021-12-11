let win = open("https://market.kz");
            
            win.addEventListener("DOMContentLoaded", function (evt)
            {
                console.log(win.document.title);
                var i = document.querySelectorAll('.grid-ads-item-compact');
                alert(i[0].textContent)
            });
