type Props = {
  name: string;
  price: string;
};

export default function ProductCard({ name, price }: Props) {
  return (
    <div className="border rounded-xl p-4">
      <div className="h-40 bg-gray-100 rounded mb-4"></div>

      <h4 className="font-semibold">{name}</h4>
      <p>{price}</p>

      <button className="mt-3 w-full bg-black text-white py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}