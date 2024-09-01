import React, { useEffect, useState } from "react";
import styles from "./showproduct.module.css";
import { Link, useParams } from "react-router-dom";
import api from "../service";
import { BackendUrls } from "../Backend_Endpoints";

function ShowProduct() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  console.log(data, "intuerhbej");

  const fetchProduct = async () => {
    try {
      const response = await api.get(`${BackendUrls.product_management}/${id}`);

      if (response.status == 201) {
        console.log(response);

        setData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className={styles.body}>
      <div className={`container-fuid ${styles.home_body}`}>
        <h4>You'r product details</h4>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <th>Product name</th>
              <th>Image</th>
              <th></th>
            </thead>
            <tbody>
              {data?.map((ele) => {
                return (
                  <tr>
                    <td>{ele.product_name}</td>
                    <td>
                      <img
                        src={`${process.env.REACT_APP_API_URL}${ele.image}`}
                        width="50px"
                        height="50px"
                      ></img>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={styles.footer}>
          <Link to={`/admin/admin-addproduct/${id}`}>
            <button className={styles.addcategory}>add Product </button>
          </Link>
          <Link to="/admin/admin-home" className="p-2">back to home</Link>

        </div>
      </div>
    </div>
  );
}

export default ShowProduct;
