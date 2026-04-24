import ProductCard from "./ProductCard";

const products = [
  { name: "Wireless Earbuds", price: "₹1999" },
  { name: "Smart Watch", price: "₹2999" },
];

export default function Products() {
  return (
    <section className="px-8 py-12">
      <h3 className="text-2xl font-bold mb-6">Featured Products</h3>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((item) => (
          <ProductCard
            key={item.name}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}