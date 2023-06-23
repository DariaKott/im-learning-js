let price;
let quantity;
let totalRu;
let calculateTotalPrice = (price = 100000, quantity = 2) => {
    let total = price * quantity;
    totalRu = total.toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' });
    console.log(totalRu);
    // alert(`Стоимость покупки ${totalRu}`)
}
calculateTotalPrice();

const output = document.getElementById('output');

function handleClick() {
    const message = `Стоимость покупки ${totalRu}`;
    console.log(message);
    output.textContent = message;
}

