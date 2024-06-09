const goodNameInput = document.getElementById('good-name-input');
const goodPriceInput = document.getElementById('good-price-input');
const goodFinalPriceInput = document.getElementById('good-final-price-input')

goodNameInput.addEventListener('change', function () {
  const selectedName = this.value;
  switch (selectedName) {
    case 'Тайна вселенной':
      goodPriceInput.value = '5999 ₽';
      break;
    case 'На вершине мира':
      goodPriceInput.value = '3999 ₽';
      break;
    case 'Лучезарный пляж':
      goodPriceInput.value = '7999 ₽';
      break;
    case 'Мир после конца':
      goodPriceInput.value = '4999 ₽';
      break;
    case 'Ночь в старом доме':
      goodPriceInput.value = '5999 ₽';
      break;
    case 'Монарх империи':
      goodPriceInput.value = '6999 ₽';
      break;
    case 'Мир через 100 лет':
      goodPriceInput.value = '3999 ₽';
      break;
    case 'Ночные гонщики':
      goodPriceInput.value = '4999 ₽';
      break;
    default:
      goodPriceInput.value = '';
  }
});

goodNameInput.addEventListener('change', function () {
  const selectedName = this.value;
  switch (selectedName) {
    case 'Тайна вселенной':
      goodFinalPriceInput.value = '5999 ₽';
      break;
    case 'На вершине мира':
      goodFinalPriceInput.value = '3999 ₽';
      break;
    case 'Лучезарный пляж':
      goodFinalPriceInput.value = '7999 ₽';
      break;
    case 'Мир после конца':
      goodFinalPriceInput.value = '4999 ₽';
      break;
    case 'Ночь в старом доме':
      goodFinalPriceInput.value = '5999 ₽';
      break;
    case 'Монарх империи':
      goodFinalPriceInput.value = '6999 ₽';
      break;
    case 'Мир через 100 лет':
      goodFinalPriceInput.value = '3999 ₽';
      break;
    case 'Ночные гонщики':
      goodFinalPriceInput.value = '4999 ₽';
      break;
    default:
      goodFinalPriceInput.value = '';
  }
});
