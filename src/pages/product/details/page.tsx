import { useLocation } from "react-router-dom";

export default function Page() {
  const location = useLocation();
  const state = location.state;
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black rounded-lg text-center p-5">
      <h3>Product No : {state.no}</h3>
      <h3>Product Id : {state.id}</h3>
      <h3>Product Name : {state.name}</h3>
      <h3>Product Category : {state.category}</h3>
      <h3>Product Image : </h3>
      <img className="h-48 mx-auto" src={state.image} alt="" />

      <h3>Product Freshness : {state.freshness}</h3>
      <h3>Product Description : {state.desc}</h3>
      <h3 className="text-success fw-bold ">Product Price : {state.price}</h3>
    </div>
  );
}
