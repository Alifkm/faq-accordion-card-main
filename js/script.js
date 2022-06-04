const divs = document.querySelectorAll('.wrapper-right div');
const imgAlls = document.querySelectorAll('.wrapper-right img');
const h2Alls = document.querySelectorAll('.wrapper-right h2');
const allPs = document.querySelectorAll('p');

divs.forEach(div => {
    div.addEventListener('click', function() {
        
        const arrow = div.querySelector('img');
        const header = div.querySelector('h2');
        const paragraph = div.nextElementSibling;
        
        h2Alls.forEach(h2All => { 
            h2All.style.fontWeight = 400; 
        });

        imgAlls.forEach(imgAll => { 
            imgAll.style.transform = 'none';
            
        });

        allPs.forEach(allp => {
            setTimeout(function(){
                allp.style.display = "none"; 
            }, 500);
        })

        header.style.fontWeight = 800;
        arrow.style.transform = 'rotate(180deg)';
        arrow.style.transition = 'transform 0.5s ease-in';

        setTimeout(function(){
            paragraph.style.display = "block"; 
        }, 500);
    });
});