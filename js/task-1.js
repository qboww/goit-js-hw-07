const categoriesNumber = document.querySelectorAll("#categories > li").length;
console.log(`Number of categories: ${categoriesNumber}`);

document.querySelectorAll("#categories .item").forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  console.log(`Category: ${categoryName}`);

  const elementsNumber = category.querySelectorAll("ul > li").length;
  console.log(`Elements: ${elementsNumber}`);
});
