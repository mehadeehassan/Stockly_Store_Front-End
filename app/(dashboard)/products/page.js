"use client";

import { Plus, Upload } from "lucide-react";
import ProductFilter from "@/components/products/product-filter";
import ProductTable from "@/components/products/product-table";
// Modal components standard imports
// import ProductForm from "@/components/products/product-form";
// import StockAdjustment from "@/components/inventory/stock-adjustment";

const PRODUCTS = [
  { id: "p1", name: "Basmati Rice 5kg", unit: "pcs", sku: "GRC-1001", barcode: "8901030875021", category: "Grocery", purchase: 520, sale: 650, stock: 24, status: "in-stock" },
  { id: "p2", name: "Cooking Oil 1L", unit: "pcs", sku: "GRC-1002", barcode: "8901030875038", category: "Grocery", purchase: 150, sale: 185, stock: 0, status: "out-of-stock" },
  { id: "p3", name: "Sugar 1kg", unit: "kg", sku: "GRC-1003", barcode: "8901030875045", category: "Grocery", purchase: 78, sale: 95, stock: 5, status: "low-stock" },
  { id: "p4", name: "Milk Powder 400g", unit: "pcs", sku: "DRY-2001", barcode: "8901030875052", category: "Dairy", purchase: 350, sale: 420, stock: 12, status: "in-stock" },
  { id: "p5", name: "Red Lentils 1kg", unit: "kg", sku: "GRC-1004", barcode: "8901030875069", category: "Grocery", purchase: 115, sale: 140, stock: 30, status: "in-stock" },
  { id: "p6", name: "Tea Bags 100pc", unit: "box", sku: "BEV-3001", barcode: "8901030875076", category: "Beverages", purchase: 170, sale: 210, stock: 18, status: "in-stock" },
  { id: "p7", name: "Detergent Powder 1kg", unit: "pcs", sku: "HH-4001", barcode: "8901030875083", category: "Household", purchase: 120, sale: 150, stock: 9, status: "low-stock" },
];

export default function ProductsPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#241C14]">Products</h1>
          <p className="mt-0.5 text-sm text-[#8A7B6C]">
            {PRODUCTS.length} total products
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-xl border border-[#ECE3D8] bg-white px-4 py-2.5 text-sm font-medium text-[#241C14] hover:bg-gray-50">
            <Upload size={15} /> Import CSV
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-[#8140DC] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#8140DC]/90">
            <Plus size={15} /> Add Product
          </button>
        </div>
      </div>

      {/* Product Filters Component */}
      <ProductFilter />

      {/* Product Table Component */}
      <ProductTable products={PRODUCTS} />

      {/* পরবর্তীতে স্টেট (State) ব্যবহার করে শর্তসাপেক্ষে (Conditionally) মডালগুলো এখানে রেন্ডার করবেন */}
      {/* <ProductForm /> */}
      {/* <StockAdjustment /> */}
    </div>
  );
}