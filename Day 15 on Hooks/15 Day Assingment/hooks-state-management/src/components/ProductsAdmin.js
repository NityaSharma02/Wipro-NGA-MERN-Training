import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, updateProduct, localAdjustStock } from "../features/products/productsSlice";

export default function ProductsAdmin() {
  const dispatch = useDispatch();
  const products = useSelector(s => s.products.list);
  const status = useSelector(s => s.products.status);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [status, dispatch]);

  function startEdit(p) {
    setEditing(p.id);
    setForm({ ...p });
  }

  function saveEdit() {
    dispatch(updateProduct(form));
    setEditing(null);
  }

  return (
    <section>
      <h3>Products (admin)</h3>
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div style={{ color: "red" }}>Failed to load products</div>}

      <div style={{ display: "grid", gap: 12 }}>
        {products.map(p => (
          <div key={p.id} style={{
            padding: 12,
            borderRadius: 8,
            background: "var(--card-bg)",
            boxShadow: "var(--card-shadow)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            {editing === p.id ? (
              <div style={{ flex: 1, display: "flex", gap: 8, alignItems: "center" }}>
                <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
                <input type="number" value={form.price} onChange={e => setForm(f => ({ ...f, price: Number(e.target.value) }))} style={{ width: 100 }} />
                <input type="number" value={form.stock} onChange={e => setForm(f => ({ ...f, stock: Number(e.target.value) }))} style={{ width: 80 }} />
                <button onClick={saveEdit}>Save</button>
                <button onClick={() => setEditing(null)}>Cancel</button>
              </div>
            ) : (
              <>
                <div>
                  <div style={{ fontWeight: 600 }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: "var(--muted)" }}>
                    ${p.price} • stock: {p.stock}
                  </div>
                </div>

                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => startEdit(p)}>Edit</button>
                  <button onClick={() => dispatch(localAdjustStock({ id: p.id, delta: -1 }))}>-1</button>
                  <button onClick={() => dispatch(localAdjustStock({ id: p.id, delta: 1 }))}>+1</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
