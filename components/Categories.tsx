const items = ["Groceries", "Electronics", "Fashion", "Home", "Beauty"];

export default function Categories() {
  return (
    <section className="px-8 py-12">
      <h3 className="text-2xl font-bold mb-6">Categories</h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {items.map((item) => (
          <div
            key={item}
            className="border rounded-xl p-6 text-center hover:shadow-md transition"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}