import React, { useState } from "react";
import styles from "./admin_register.module.css";
import RegistrationInput from "../UI/RegistrationInput";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../service";
import { BackendUrls } from "../Backend_Endpoints";
import Swal from "sweetalert2";

function AdminRegister() {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const Registration = async () => {
    try {
      const response = await api.post(BackendUrls.registration, inputData);

      if (response.data.status === 400) {
        Swal.fire({
          icon: "error",
          text: "Please enter the credentials correctly",
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
      } else if (response.status === 201) {
        Swal.fire({
          icon: "success",
          text: "registered successfully login please",
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

        navigate("/admin/admin-login");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Please enter the credentials correctly",
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

  return (
    <div className={styles.maindiv}>
      <div className={styles.login_container}>
        <RegistrationInput
          placeholder={"username"}
          type={"text"}
          onChange={handleChange}
          name={"username"}
          value={inputData.username}
        />
        <RegistrationInput
          placeholder={"email"}
          type={"email"}
          onChange={handleChange}
          name={"email"}
          value={inputData.email}
        />
        <RegistrationInput
          placeholder={"password"}
          type={"password"}
          onChange={handleChange}
          name={"password"}
          value={inputData.password}
        />
        <div className={styles.footer_div}>
          <button className={styles.register_button} onClick={Registration}>
            Register
          </button>
          <div className={styles.lower}>
            <p className={styles.account_check}>have an account?</p>
            <Link to="/admin/admin-login" className={styles.link}>
              login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminRegister;
