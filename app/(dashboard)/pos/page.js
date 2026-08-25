"use client";

import ProductSearch from "@/components/pos/product-search";
import ProductGrid from "@/components/pos/product-grid";
import Cart from "@/components/pos/cart";

const CATEGORIES = [
  { id: "all", name: "All Items", icon: "🏪" },
  { id: "c1", name: "Grocery", icon: "🌾" },
  { id: "c2", name: "Dairy", icon: "🥛" },
  { id: "c3", name: "Snacks", icon: "🍪" },
  { id: "c4", name: "Beverages", icon: "🥤" },
  { id: "c5", name: "Household", icon: "🧹" },
  { id: "c6", name: "Produce", icon: "🥦" },
];

const PRODUCTS = [
  { id: "p1", name: "Basmati Rice 5kg", price: 650, stock: 24, unit: "pcs" },
  { id: "p2", name: "Cooking Oil 1L", price: 185, stock: 0, unit: "pcs" },
  { id: "p3", name: "Sugar 1kg", price: 95, stock: 5, unit: "kg" },
  { id: "p4", name: "Milk Powder 400g", price: 420, stock: 12, unit: "pcs" },
  { id: "p5", name: "Red Lentils 1kg", price: 140, stock: 30, unit: "kg" },
  { id: "p6", name: "Tea Bags 100pc", price: 210, stock: 18, unit: "box" },
  { id: "p7", name: "Salt 1kg", price: 35, stock: 40, unit: "kg" },
  { id: "p8", name: "Biscuits Pack", price: 60, stock: 22, unit: "pcs" },
  { id: "p9", name: "Mineral Water 1L", price: 25, stock: 60, unit: "pcs" },
  { id: "p10", name: "Detergent Powder 1kg", price: 150, stock: 9, unit: "pcs" },
];

const PAYMENT_METHODS = [
  { id: "cash", label: "Cash", icon: "💵" },
  { id: "card", label: "Card", icon: "💳" },
  { id: "mobile", label: "bKash", icon: "📱" },
  { id: "split", label: "Split", icon: "⚡" },
];

const CART_ITEMS = [
  { id: "p3", name: "Sugar 1kg", price: 95, qty: 2 },
  { id: "p8", name: "Biscuits Pack", price: 60, qty: 1 },
];

const subtotal = CART_ITEMS.reduce((acc, i) => acc + i.price * i.qty, 0);
const tax = subtotal * 0.05;
const total = subtotal + tax;

export default function POSPage() {
  return (
    <div className="flex h-full overflow-hidden">
      <div className="flex flex-1 flex-col overflow-hidden">
        <ProductSearch />
        <ProductGrid categories={CATEGORIES} products={PRODUCTS} selectedCategory="all" />
      </div>

      <Cart
        cartItems={CART_ITEMS}
        subtotal={subtotal}
        tax={tax}
        total={total}
        paymentMethods={PAYMENT_METHODS}
        selectedPayment="cash"
      />
    </div>
  );
}