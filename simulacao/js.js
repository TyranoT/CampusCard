document.addEventListener('DOMContentLoaded', () => {
    const valor = document.getElementById('valor');
    const parcelas = document.getElementById('parcelas');
    const itemList = document.getElementById('itemList'); 

    valor.addEventListener('input', handleInput);
    parcelas.addEventListener('input', handleInput);

    function handleInput() {
        const value1 = valor.value.trim();
        const value2 = parcelas.value.trim();

        if (value1 && value2) {
            addItem(value1, value2);
            valor.value = '';                             
            parcelas.value = '';
        }
    }

    function addItem(value1, value2) {
        itemList.innerHTML = '';
        const li = document.createElement('li');    
        li.innerHTML = `
            Valor da compra nesta simulação: ${value1} reais<br>
            Quantidade de parcelas nesta simulação: ${value2} parcelas<br>
            Seu desconto nessa compra será de ${(value1 * 0.001).toFixed(2)} centavos<br>
            Você está acumulando ${(14 / 1000*value1)} pontos no seu plano MyStudentcard<br>
            Seu cashback nessa compra será de ${(value1 * 0.035).toFixed(2)} centavos<br>`;
        itemList.appendChild(li);            
    }
});
