import React, { useState } from "react";
import styles from "./admin.module.css";
import RegistrationInput from "../UI/RegistrationInput";
import { Link, useNavigate } from "react-router-dom";
import api from "../service";
import { BackendUrls } from "../Backend_Endpoints";
import Swal from "sweetalert2";

function AdminLogin() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const Login = async () => {
    try {
      const response = await api.post(BackendUrls.login, inputData);

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
      } else if (response.status === 200) {
        localStorage.setItem("accessToken", response.data.access_token);
        localStorage.setItem("refreshToken", response.data.refresh_token);

        Swal.fire({
          icon: "success",
          text: "Welcome to admin...",
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
        />
        <RegistrationInput
          placeholder={"password"}
          type={"password"}
          onChange={handleChange}
          name={"password"}
        />
        <div className={styles.footer_div}>
          <button className={styles.register_button} onClick={Login}>
            Login
          </button>
          <div className={styles.lower}>
            <p className={styles.account_check}>don't have an account?</p>
            <Link to="/admin/admin-signup" className={styles.link}>
              register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
