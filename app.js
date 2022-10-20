let wyswietlacz = document.getElementById("wyswietlacz");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            case 'C':
                wyswietlacz.innerText = '';
                break;
            case '←':
                if(wyswietlacz.innerText){
                    wyswietlacz.innerText = wyswietlacz.innerText.slice(0, -1); 
                }
                break;
            case '=':
                try{
                    wyswietlacz.innerText = eval(wyswietlacz.innerText);
                } catch{
                    wyswietlacz.innerText = "💀";
                }
                break;
            default:
                wyswietlacz.innerText += e.target.innerText;
        }
    });
});
