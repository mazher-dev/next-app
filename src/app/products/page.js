export const revalidate = 60;

async function getProduct() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function Products() {
  const products = await getProduct();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Products Listing</h1>
      <ul className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-500">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
