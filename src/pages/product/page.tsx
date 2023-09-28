import { useState } from "react";
import { Main } from "@/components/main";
import { ProductForm } from "./components/product-form";
import { ProductTable } from "./components/product-table";
import { AddButton } from "./components/ui/add-btn";

export default function Products() {
  const [showForm, setShowForm] = useState(false);

  return (
    <Main>
      <div className="flex w-full h-24 items-center gap-2">
        <div className="flex items-center ">
          <input
            id="search-product"
            type="text"
            className="w-full rounded-lg border border-black px-3 pb-[0.2rem] leading-[35px]"
            placeholder="fitur pajangan..."
            onFocus={() => setShowForm(false)}
          />
        </div>
        <div className="w-32 ml-auto">
          <AddButton showForm={showForm} setShowForm={setShowForm} />
        </div>
      </div>
      <div className={ showForm ? "block" : "hidden" }>{<ProductForm dataId="" isEditable={false} />}</div>
      <ProductTable />
    </Main>
  );
}
