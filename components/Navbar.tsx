export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm">
      <h1 className="text-2xl font-bold">Basket Buddy</h1>
      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Cart</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}