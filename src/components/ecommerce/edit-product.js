import React, { useEffect, useState, useRef } from "react";
import useForm from "../custom-hooks/use-form";
import axios from "axios";
import useFetch from "../custom-hooks/use-fetch";
import { useHistory, useLocation } from "react-router-dom";

export default function EditProduct(props) {
  const location = useLocation();
  console.log("location", location);
  const [state, setState] = useState(JSON.parse(location.state));
  const [isLoading, response, serviceError, doFetch] = useFetch(
    "https://fakestoreapi.com/products"
  );

  const [isDirty, setIsDirty] = useState(false);
  const titleRef = useRef();
  const history = useHistory();

  const { error, handleSubmit } = useForm(
    state,
    isDirty,
    validate,
    afterSubmit
  );
  // const [error, setError] = useState({});

  useEffect(() => {
    setState(JSON.parse(location.state));
  }, [location.state]);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  useEffect(() => {
    if (response?.id) {
      alert("Added successfully);");
      history.push("/");
    }
  }, [response]);

  function validate() {
    let updatedError = {};

    if (!state.title) {
      updatedError.title = "Title is required";
    }
    if (!state.description) {
      updatedError.description = "Description is required";
    }
    if (!state.image) {
      updatedError.image = "Image URL is required";
    }
    if (!state.price) {
      updatedError.price = "Price is required";
    }
    return updatedError;
  }

  async function afterSubmit() {
    alert("After submitcalled);");
    //const resp = await axios.post("https://fakestoreapi.com/products", state);

    doFetch({
      method: "post",
      data: state,
    });

    //formData start
    //OR using Formdata
    // var formData = new FormData();
    // formData.append("file", state.imageFile);
    // formData.append("product", JSON.stringify(state));

    // console.log("formData", formData);
    // //formData end

    // const resp = await axios.post(
    //   "https://fakestoreapi.com/products",
    //   formData, //state
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   }
    // );
    // if (resp?.data?.id) {
    //   alert("Added successfully);");
    // }
  }

  // const onHandleChange = (e) => {
  //   // debugger;
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   });
  //   setIsDirty(true);
  // };

  const onHandleChange = (e) => {
    // debugger;
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    setIsDirty(true);
  };

  // const onFormSubmit = (e) => {
  //   e.preventDefault();
  //   let updatedError = {};

  //   if (!error.title) {
  //     updatedError.title = "Tile is required";
  //   }
  //   if (!error.description) {
  //     updatedError.description = "description is required";
  //   }
  //   setError({
  //     ...updatedError,
  //   });

  //   //Call API
  // };

  const onHandleFileChange = (e) => {
    //as parent form also has onChange defined
    //which we dont want to call when image onChange is called.
    //so stop bubbling up call e.stopPropagation();
    e.stopPropagation();
    // debugger;
    console.log(e.target.files, URL.createObjectURL(e.target.files[0]));
    setState({
      ...state,
      image: URL.createObjectURL(e.target.files[0]),
      imageFile: e.target.files[0],
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={state.title}
            onChange={onHandleChange}
            className="form-control"
            id="title"
            name="title"
            ref={titleRef}
          />
          {error?.title && (
            <small className="form-text text-danger">{error?.title}</small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={state.description}
            onChange={onHandleChange}
            className="form-control"
            id="description"
            name="description"
          />
          {error?.description && (
            <small className="form-text text-danger">
              {error?.description}
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            value={state.category}
            onChange={onHandleChange}
            className="form-control"
            id="category"
            name="category"
          >
            <option>Select Category</option>
            <option value="electronics">electronics</option>
          </select>
        </div>
        {/* <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            value={state.image}
            // onChange={onHandleChange}
            className="form-control"
            id="image"
            name="image"
          />
          {error?.image && (
            <small className="form-text text-danger">{error?.image}</small>
          )}
        </div> */}
        <div className="form-group">
          <label htmlFor="image">Change Image</label>
          <input
            type="file"
            // value={state.image}
            onChange={onHandleFileChange}
            className="form-control"
            id="image"
            name="image"
          />
          {state.image && (
            <img
              src={state.image}
              style={{ height: "100px", width: "100px" }}
            />
          )}
          {error?.image && (
            <small className="form-text text-danger">{error?.image}</small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            value={state.price}
            onChange={onHandleChange}
            className="form-control"
            id="price"
            name="price"
          />
          {error?.price && (
            <small className="form-text text-danger">{error?.price}</small>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {isLoading && <div>Form Submitting......</div>}
      </form>
    </div>
  );
}
