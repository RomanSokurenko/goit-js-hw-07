const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);





// const listRef = document.querySelectorAll('.item');
// console.log(`В списке ${listRef.length} категории.`);



// listRef.forEach(el => {
//    const element = el.querySelector('ul');
//    const elementTotal = element.firstElementChild;
//    console.log(`Категория: ${elementTotal.map}`);
//    //console.log(`Категория: ${element}`);

//    const calRel = el.querySelector('li');
//    console.log(`Количество элементов: ${calRel}`)

// });

// const element1 = document.querySelector('li');
// console.log(element1.innerText);
// listRef.forEach(el => {
//    const elements = document.querySelector('h2');
// elements.forEach(el => console.log(`Категория: ${el.innerText}`)
//     );
//  const elem = document.querySelector('li');
//  elem.forEach(el => console.log(`Категория: ${el.length}`)
//  );   
// })

// const elements = document.querySelectorAll('h2');
// elements.forEach(el => console.log(`Категория: ${el.innerText}`)
// );
// c

// const total = document.querySelectorAll('li');
// const totalCat = total[0].querySelectorAll('li')
// console.log(`Количество элементов:${totalCat.length}`);
 
//const element = document.querySelector('.item');
//const qwe = (element.lastElementChild.);
//console.log(elements.length);

//console.log(total[1]);

//total.forEach(total => { console.log(`Количество элементов: ${total}`); });

// const total = document.querySelectorAll('.item');
// console.log(total);

// const total1 = document.querySelectorAll('ul');
//  console.log(total1);

// const firstEl = total[0].querySelectorAll('li');
// console.log(`Количество элементов:${firstEl.length}`);
  








