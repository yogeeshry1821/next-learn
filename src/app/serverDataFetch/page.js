async function productsList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
//   console.log(data.products);
  return data.products
}
export default async function Page() {
  let products = await productsList();
  return (
    <div>
      <h1> Products list</h1>
      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}
