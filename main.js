document.addEventListener("DOMContentLoaded", () => {
    const Btn = document.querySelector("#Tabuada")

    Btn.addEventListener("click", () => {
        const num = parseInt(document.querySelector("#valor").value)
        tabuada(num)
    });
});

function tabuada(numero) {
    const tab = document.querySelector("#res")
    tab.innerHTML = ""

    if(numero == 0){
        alert("digite um numero maior que 0")
    }else{
        let c = 1;
        while (c <= 10) {
            let option = document.createElement("option")
            option.text = `${numero} x ${c} = ${numero * c}`
            tab.appendChild(option)
            c++;
        }
    }
}

