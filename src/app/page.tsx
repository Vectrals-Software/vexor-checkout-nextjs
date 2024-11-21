// src/app/page.tsx
 
import ProductCard, { Product } from "@/components/product-card";
import RefundCard from "@/components/refund-card";
const products: Product[] = [
  {
      id: "item-1",
      title: "Premium Widget",
      description: "High-quality widget with advanced features",
      quantity: 2,
      unit_price: 2
  },
  {
      id: "item-2",
      title: "Standard Gadget",
      description: "Reliable gadget for everyday use",
      quantity: 1,
      unit_price: 10
  }
];
 
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <RefundCard />
      </main>
    </div>
  );
}