// const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }

  products.forEach(curProd => {
    const { brand, category, description, id, image, name, price, stock } = curProd;

    const productClone = document.importNode(productTemplate.content, true);
    productClone.querySelector(".cards").id = `card${id}`;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `$${price}`;
    productClone.querySelector(".productStock").textContent = `Stock: ${stock}`;
    
    // Initializing data-quantity attribute
    productClone.querySelector(".productQuantity").setAttribute("data-quantity", "1");

    productClone.querySelector(".cartIncrement").addEventListener('click', (event) => homeQuantityToggle(event, id, stock));
    productClone.querySelector(".cartDecrement").addEventListener('click', (event) => homeQuantityToggle(event, id, stock));
    productClone.querySelector(".cards").id=`card${id}`;

    productContainer.append(productClone);
  });
};

export const homeQuantityToggle = (event, id, stock) => {
  // console.log("Button clicked", event.target.className, id, stock); // Debugging line

  const currentCardElement = document.querySelector(`#card${id}`);
  // if (!currentCardElement) {
  //   console.error(`Card with id card${id} not found`); // Debugging line
  //   return;
  // }

  const productQuantity = currentCardElement.querySelector(".productQuantity");
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;
  // console.log("Current quantity:", quantity); // Debugging line

  if (event.target.classList.contains("cartIncrement")) {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
    }
  } else if (event.target.classList.contains("cartDecrement")) {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  // console.log("New quantity:", quantity); // Debugging line

  productQuantity.innerText = quantity;
  productQuantity.setAttribute("data-quantity", quantity.toString());
  return quantity;
};
