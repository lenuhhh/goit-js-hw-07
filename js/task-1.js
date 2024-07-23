const listcategory = document.getElementById('categories');

const itemsCategory = listcategory.querySelectorAll('li.item');

console.log(`Всього категорій: ${itemsCategory.length}`);

itemsCategory.forEach(item => {

    const categoryTitle = item.querySelector('h2').textContent;

    const categoryList = item.querySelectorAll('ul > li');
    
    console.log(`Категорія: ${categoryTitle}`);
    console.log(`Кількість елементів: ${categoryList.length}`);
});