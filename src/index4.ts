//! Function with object:-

interface Product {
  name: string;
  stock: number;
  price: number;
  readonly id: string;  //* Means we cann't change the product id 
}

type GetDataType = (product: Product) => void;

const getData: GetDataType = (product) => {
  console.log(product);
};

const productOne: Product = {
  name: "Lenovo LOQ",
  stock: 100,
  price: 60000,
  id: "nsjncjs"
};

getData(productOne);
