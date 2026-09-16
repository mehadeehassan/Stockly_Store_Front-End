import SupplierCard from "@/components/suppliers/supplier-card";
import PurchaseOrderTable from "@/components/suppliers/supplier-table";
import { Plus } from "lucide-react";

const SUPPLIERS = [
  {
    id: "s1",
    name: "City Wholesale Traders",
    contact: "Jashim Uddin",
    phone: "01711-223344",
    email: "jashim@citywholesale.com",
    address: "45 Malibagh, Dhaka",
    orderCount: 12,
    balance: 8400,
  },
  {
    id: "s2",
    name: "Green Valley Farms",
    contact: "Rina Aktar",
    phone: "01822-556677",
    email: "rina@greenvalley.com",
    address: "Savar, Dhaka",
    orderCount: 6,
    balance: 0,
  },
  {
    id: "s3",
    name: "Dhaka Dairy Suppliers",
    contact: "Kamal Hossain",
    phone: "01933-889900",
    email: "kamal@dhakadairy.com",
    address: "Tongi, Gazipur",
    orderCount: 9,
    balance: 3200,
  },
  {
    id: "s4",
    name: "Bay Beverage Distributors",
    contact: "Farhan Ahmed",
    phone: "01644-112233",
    email: "farhan@baybev.com",
    address: "Uttara, Dhaka",
    orderCount: 4,
    balance: 0,
  },
];

export default function SuppliersPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#241C14]">Suppliers</h1>
          <p className="mt-0.5 text-sm text-[#8A7B6C]">
            {SUPPLIERS.length} suppliers
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-[#8140DC] px-4 py-2.5 text-sm font-semibold text-white">
          <Plus size={15} /> Add Supplier
        </button>
      </div>

      {/* Supplier cards */}
      <div className="mb-8 grid gap-4 lg:grid-cols-2">
        {SUPPLIERS.map((s) => (
          <SupplierCard key={s.id} supplier={s} />
        ))}
      </div>

      {/* Purchase orders */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-[#241C14]">
          Purchase Orders
        </h2>
        <PurchaseOrderTable />
      </div>

      {/* ডিজাইন রেফারেন্সের জন্য রাখা হয়েছে — modal-open স্টেট (যেমন: editSupplier / createPOFor) যুক্ত করার পর কন্ডিশনালি রেন্ডার করবেন */}
        {/* <Modal title="Add Supplier">
          <SupplierForm />
        </Modal> */}
        {/* <Modal title="Create Purchase Order" maxWidth="max-w-lg">
         <PurchaseOrderForm supplierName="City Wholesale Traders" />
        </Modal> */}
    </div>
  );
}
