var addButton = document.getElementById('addButton');


var title = document.getElementById('input1');
var input = document.getElementById('input2');

var myForm = document.getElementById('myForm');

addButton.addEventListener('click', function (event) {
    event.preventDefault();
    agregarNuevoElemento();

});

function agregarNuevoElemento() {


    var text = input.value;
    var inputTitle = title.value;

    var longitud = text.length;
    var clase = 'card_small';

    if (longitud < 15) {
        clase = 'card_verysmall';
    }
    if (longitud > 85) {
        clase = 'card_medium';
    }
    if (longitud > 125) {
        clase = 'card_large';
    }

    var currentDate = new Date(); // Agregar esta línea para obtener la fecha actual
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth(); // Note: Month is zero-based (0-11)
    var currentDay = currentDate.getDate();

    let html = `
        <div class="card ${clase}">
            <div class="tarjeta-header">
                <p>${inputTitle}</p>
                <button> X </button>
            </div>
            <div class="tarjeta-body">
                <p>${text}</p>
            </div>
            <div class="tarjeta-footer">
                <p>${currentYear}-${currentMonth + 1}-${currentDay}</p>
            </div>
        </div>
    `;


    const cards = document.getElementsByClassName('card');
    if (cards.length > 0) {
        const lastCard = cards[cards.length - 1];
        lastCard.insertAdjacentHTML("afterend", html);
    } else {
        const cards = document.getElementsByClassName('wip');
        const lastCard = cards[0];
        lastCard.insertAdjacentHTML("afterend", html);
    }

    const tarjetas = document.getElementsByClassName('card');
    const botonesX = document.querySelectorAll('.card button');

    botonesX.forEach(function (boton) {
        boton.addEventListener('click', function () {
            const tarjeta = boton.closest('.card');
            if (tarjeta) {
                tarjeta.classList.add('fade-out');
                setTimeout(function () {
                    tarjeta.parentNode.removeChild(tarjeta);
                }, 150); // Espera 150ms antes de eliminar la tarjeta
            }
        });
    });

    title.value = "";
    input.value = "";

}


// Obtén todos los botones "X" DO NOT DELETE, WORKS FOR THE DEMO CARDS
const botonesX = document.querySelectorAll('.card button');

botonesX.forEach(function (boton) {
    boton.addEventListener('click', function () {
        const tarjeta = boton.closest('.card');
        if (tarjeta) {
            tarjeta.classList.add('fade-out');
            setTimeout(function () {
                tarjeta.parentNode.removeChild(tarjeta);
            }, 150); // Espera 150ms antes de eliminar la tarjeta
        }
    });
});


const categoryElements = document.querySelectorAll('.category');
categoryElements.forEach(categoryElement => {
    categoryElement.addEventListener('click', () => {
        const category = categoryElement.classList[1];

        const cardElements = document.querySelectorAll('.pin_container .card');

        cardElements.forEach(cardElement => {
            if (category === 'all' || cardElement.classList.contains(category)) {
                cardElement.style.display = 'grid'; // Muestra los elementos correspondientes a la categoría
            } else {
                cardElement.style.display = 'none'; 
            }
        });
    });
});


