const apiUrl = 'https://api-foods-hackathon.herokuapp.com'

const ul = document.querySelector('.products__cards-box')
console.log(ul)

async function getFoods() {
  const response = await fetch(`${apiUrl}/foods`)
  const foods = await response.json()
  return foods
}

let acumulator = ''

async function showFoods() {
  const showFood = await getFoods()
  for (let i = 0; i < showFood.length; i++) {
    acumulator += ` 
    <div class="cards-box__item">
    <div class="item__status">
      <i class="fa-solid fa-plus status__icon"></i>
    </div>
    <div class="item__info">
      <img class="info__img" src="${showFood[i].image}" alt="imagem de um(a) ${showFood[i].name}" />
      <p class="info__text">${showFood[i].name}</p>
    </div>
    <a class="item__btn">Ver Detalhes</a>
  </div>
      
    `
  }
  ul.innerHTML = acumulator
}

//showFoods()

//Esse codigo lista todos os elementos do backend na tela, mas ele não deixa mais os elementos receberem o evento de click , sendo assim, desativando os modais.
