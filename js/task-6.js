
const categoriesList = document.querySelector('#categories');


const categoryItems = categoriesList.querySelectorAll('li.item');


console.log(`Number of categories: ${categoryItems.length}`);


categoryItems.forEach(item => {

  const categoryTitle = item.querySelector('h2').textContent;
  

  const subItems = item.querySelectorAll('ul li');
  

  console.log(`Category: ${categoryTitle}`);
  console.log(`Number of items: ${subItems.length}`);
});
