import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { Products } from "@/pages/product/components/table-column";

type ProductData = {
  data: Products[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
};

const initialState: ProductData = {
  data: [],
  status: "idle",
  error: "",
};

const GET_PRODUCTS_URL = import.meta.env.VITE_BASE_URL + "/v1/cd86a97f-1f9c-4828-853b-4085dac3aff9";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  try {
    const response = await axios.get(GET_PRODUCTS_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const productData = createSlice({
  name: "products",
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
      const { id } = action.payload;
      const index = state.data.findIndex((products) => products.id === id);
      state.data.splice(index, 1);
    },
    addProduct: (state, action) => {
      state.data.push(action.payload);
    },
    editProduct: (state, action) => {
      const { id, name, category, image, freshness, desc, price } = action.payload;
      const index = state.data.findIndex((products) => products.id === id);
      state.data[index].name = name;
      state.data[index].category = category;
      state.data[index].image = image;
      state.data[index].freshness = freshness;
      state.data[index].desc = desc;
      state.data[index].price = price;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      let no = 1;
      const products = action.payload.map((product: { id: string, no: number }) => {
        product.id = nanoid();
        product.no = no++;
        return product;
      }
      );
      state.data = products;
      state.status = "succeeded";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const selectProducts = (state: { products: ProductData }) => state.products.data;
export const productsStatus = (state: { products: ProductData }) => state.products.status;
export const productsError = (state: { products: ProductData }) => state.products.error;

export const { deleteProduct, addProduct, editProduct } = productData.actions;

export default productData.reducer;
