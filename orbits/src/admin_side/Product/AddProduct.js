import React, { useState } from "react";
import styles from "./addproduct.module.css";
import RegistrationInput from "../UI/RegistrationInput";
import api from "../service";
import { BackendUrls } from "../Backend_Endpoints";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";

function AddProduct() {
  const { id } = useParams();

  const [formdata, setFormdata] = useState({ productname: "", image: null });
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handlesubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("productname", formdata.productname);
      formData.append("image", selectedImage);

      const response = await api.post(
        `${BackendUrls.product_management}/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          text: "Your producted added succesfully.",
          timer: 5000,
          timerProgressBar: true,
          showConfirmButton: false,
          showCloseButton: true,
          backdrop: true,
          background: "#fff",
          width: 300,
          padding: "1rem",
          className: "custom-swal-class",
        });

        navigate("/admin/admin-home");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Add  data and Try again",
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
        showCloseButton: true,
        backdrop: true,
        background: "#fff",
        width: 300,
        padding: "1rem",
        className: "custom-swal-class",
      });
    }
  };

  const handleChange = (e) => {
    const { name, files } = e.target;
    if (name === "image") {
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
      }
    } else {
      setFormdata((prevState) => ({
        ...prevState,
        [name]: e.target.value,
      }));
    }
  };

  return (
    <div className={styles.maindiv}>
        <h4>Add product here...</h4>
    
      <div className={styles.login_container}>
        <RegistrationInput
          placeholder="product Name"
          type="text"
          onChange={handleChange}
          name="productname"
          value={formdata.productname}
        />
        <RegistrationInput
          type="file"
          id="file1"
          name="image"
          className={styles.fileinput}
          onChange={handleChange}
        />
        <div className={styles.footer_div}>
          <button className={styles.addbutton} onClick={handlesubmit}>
            Submit
          </button>
          <Link to="/admin/admin-home">back to home</Link>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
