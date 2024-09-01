import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../service";
import { BackendUrls } from "../Backend_Endpoints";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await api.get(BackendUrls.category_management);
      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    navigate("/admin/admin-login");
  };

  return (
    <div className={styles.body}>
        <div className={styles.header}>
      <h1 className={styles.heading}> welcome to admin home.....</h1>
      </div>
      <div className={`container-fuid ${styles.home_body}`}>
        <h4 className={styles.heading}>You'r category details</h4>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <th className={styles.cell_padding}>Category name</th>
              <th className={styles.cell_padding}>Image</th>
              <th></th>
            </thead>
            <tbody>
              {data?.map((ele) => {
                return (
                  <tr>
                    <td className={styles.cell_padding}>{ele.name}</td>
                    <td className={styles.cell_padding}>
                      <img
                        src={`${process.env.REACT_APP_API_URL}${ele.image}`}
                        width="50px"
                        height="50px"
                      ></img>
                    </td>
                    <Link to={`/admin/admin-showproduct/${ele.id}`}>
                      <td className={styles.cell_padding}>
                        <button className={styles.productbutton}>
                          show products
                        </button>
                      </td>
                    </Link>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={styles.footer}>
          <Link to="/admin/admin-addcategory">
            <button className={styles.addcategory}>add category </button>
          </Link>
        </div>
      </div>

      <button onClick={logout} className={styles.logout}>
        Logout
      </button>
    </div>
  );
}

export default Home;
