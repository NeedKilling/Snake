"use strict"


    
    const canvas = document.getElementById('canvas').getContext('2d');
    

    canvas.moveTo(0,0);
    
    const box = 30;
    


    
    const apple = new Image(30,30);
    apple.src = "img/apple.png";
    let i = 0;
    
    apple.onload = () => {
            function drowFood(){

                const food = {
                    x: Math.floor(Math.random() * 19+1) * box,
                    y: Math.floor(Math.random() * 17+3) * box,
                }
                
                canvas.drawImage(apple, food.x, food.y);
            

            console.log(i++)

                if(i == 10){
                    clearInterval(drow);
                }
            };
            
        const drow = setInterval(drowFood,1000);
    };
    




