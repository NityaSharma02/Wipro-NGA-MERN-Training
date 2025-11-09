import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BookActions } from "../flux/BookActions";
import { useNavigate } from "react-router-dom";

const BookSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  price: Yup.number().required("Price is required").positive("Must be positive"),
});

function AddBookForm() {
  const navigate = useNavigate();

  return (
    <div className="container mt-4" style={{ maxWidth: "500px" }}>
      <h3>📘 Add New Book</h3>

      <Formik
        initialValues={{ title: "", author: "", price: "" }}
        validationSchema={BookSchema}
        onSubmit={(values, { resetForm }) => {
          const newBook = {
            id: Date.now(),
            title: values.title,
            author: values.author,
            price: Number(values.price),
            image: "https://via.placeholder.com/150",
          };

          BookActions.addBook(newBook);
          resetForm();
          alert("✅ Book added successfully!");
          navigate("/home");
        }}
      >
        {() => (
          <Form>
            <div className="mb-3">
              <label>Title</label>
              <Field name="title" className="form-control" />
              <ErrorMessage name="title" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Author</label>
              <Field name="author" className="form-control" />
              <ErrorMessage name="author" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Price</label>
              <Field name="price" type="number" className="form-control" />
              <ErrorMessage name="price" component="div" className="text-danger" />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              ➕ Add Book
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddBookForm;
