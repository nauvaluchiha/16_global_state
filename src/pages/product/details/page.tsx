import { useLocation } from "react-router-dom";
import { Main } from "@/components/main";

export default function Page() {
  const location = useLocation();
  const state = location.state;
  return (
    <Main>
      <div className="mb-8">
        <div className=" border-2 border-black rounded-lg text-center p-5">
          <h3>Product No : {state.no}</h3>
          <h3>Product Id : {state.id}</h3>
          <h3>Product Name : {state.name}</h3>
          <h3>Product Category : {state.category}</h3>
          <h3>Product Image : </h3>
          <img className="max-h-[500px] max-w-[300px] mx-auto" src={state.image} alt="" />

          <h3>Product Freshness : {state.freshness}</h3>
          <h3>Product Description : {state.desc}</h3>
          <h3 className="text-success fw-bold ">Product Price : ${state.price}</h3>
        </div>
      </div>
    </Main>
  );
}
