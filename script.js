var count=0;

        var num = document.getElementById("num");

        var b1 = document.getElementById('b1');
        var b2 = document.getElementById('b2');
        var b3 = document.getElementById('b3');
        var b4 = document.getElementById('b4');
        var b5 = document.getElementById('b5');
        var b6 = document.getElementById('b6');
        var b7 = document.getElementById('b7');
        var b8 = document.getElementById('b8');

        b1.addEventListener('click', ()=>{
            counter(2);
        })
        b2.addEventListener('click', ()=>{
            counter(3);
        })
        b3.addEventListener('click', ()=>{
            counter(4);
        })
        b4.addEventListener('click', ()=>{
            counter(5);
        })
        b5.addEventListener('click', ()=>{
            counter(6);
        })
        b6.addEventListener('click', ()=>{
            counter(7);
        })
        b7.addEventListener('click', ()=>{
            counter(8);
        })
        b8.addEventListener('click', ()=>{
            counter(9);
        })
        function counter(i)
        {
            count+=i;
            num.innerHTML=count;
        }

        var res = document.getElementById('reset');

        res.addEventListener('click', ()=>{
            count=0;
            num.innerHTML=count;
        })