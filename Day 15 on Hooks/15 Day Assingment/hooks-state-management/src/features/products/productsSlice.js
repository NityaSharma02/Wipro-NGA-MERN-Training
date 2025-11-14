import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
 
    
    await new Promise(r => setTimeout(r, 500));
    
    return [
      { id: 1, title: "Product A", price: 49.99, stock: 10 },
      { id: 2, title: "Product B", price: 89.0, stock: 4 },
      { id: 3, title: "Product C", price: 19.5, stock: 100 }
    ];
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product, thunkAPI) => {
    // pretend to call API and return updated object
    await new Promise(r => setTimeout(r, 300));
    return product;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: { list: [], status: "idle", error: null },
  reducers: {
    // small local reducer example
    localAdjustStock(state, action) {
      const { id, delta } = action.payload;
      const p = state.list.find(x => x.id === id);
      if (p) p.stock = Math.max(0, p.stock + delta);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const idx = state.list.findIndex(p => p.id === action.payload.id);
        if (idx !== -1) state.list[idx] = action.payload;
      });
  }
});

export const { localAdjustStock } = productsSlice.actions;
export default productsSlice.reducer;
