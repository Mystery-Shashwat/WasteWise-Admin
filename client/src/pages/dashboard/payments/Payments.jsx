import React, { useState, useEffect } from "react";
import card1 from "../../../img/card1.png";
import card2 from "../../../img/card2.png";
import "./Payments.css";

const Payments = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDateAndDay = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formattedDate = now.toLocaleDateString(undefined, options);

      setCurrentDate(formattedDate);
    };

    updateDateAndDay();
    const interval = setInterval(updateDateAndDay, 1000 * 60); // Update every minute

    return () => {
      clearInterval(interval);
    };
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 4 }, (_, index) => 2020 + index);

  const products = [
    {
      name: "0 to Hero Shares",
      category: "Paid Group",
      price: "Rs10",
      rating: "4.5",
    },
    {
      name: "Crypto Mausam",
      category: "Paid Group",
      price: "Rs20",
      rating: "4.2",
    },
    {
      name: "Bulls and Bears",
      category: "Course",
      price: "Rs15",
      rating: "4.8",
    },
    {
      name: "How to catch the trend",
      category: "Workshop",
      price: "Rs12",
      rating: "3.9",
    },
    {
      name: "Sell NFTs in 1 click",
      category: "Workshop",
      price: "Rs18",
      rating: "4.6",
    },
  ];

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleProductChange = (event, productName) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedProducts([...selectedProducts, productName]);
    } else {
      setSelectedProducts(
        selectedProducts.filter((product) => product !== productName)
      );
    }
  };
  const handleLoadMore = () => {
    setShowLoadMore(false);
  };

  const visibleProducts = showLoadMore
    ? products.slice(0, products.length - 2)
    : products;

  const calculateItemsValue = () => {
    if (selectedProducts.length === 0) {
      return 0;
    }

    let itemsValue = 0;

    selectedProducts.forEach((productName) => {
      const product = products.find((p) => p.name === productName);
      if (product) {
        const price = parseFloat(product.price.substr(2));
        itemsValue += price;
      }
    });

    return itemsValue.toFixed(2);
  };

  const calculateSubtotal = () => {
    if (selectedProducts.length === 0) {
      return 0;
    }

    const itemsValue = parseFloat(calculateItemsValue());
    const deliveryValue = selectedProducts.length > 0 ? 15 : 0;
    return (itemsValue + deliveryValue).toFixed(2);
  };

  const calculateOrderTotal = () => {
    if (selectedProducts.length === 0) {
      return 0;
    }

    const subtotalValue = parseFloat(calculateSubtotal());
    const taxValue = selectedProducts.length > 0 ? 23 : 0;
    return (subtotalValue + taxValue).toFixed(2);
  };

  return (
    <div>
      <div className="payments-nav">
        <div className="payments-box1">
          <div className="payments-box1-text">
            <h1 className="mainpaymentheading">Rewards</h1>{" "}
            <span>{currentDate}</span>
          </div>
          <div className="payments-box1-search">
            <div className="form">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control form-input"
                placeholder="Search"
              ></input>
            </div>
          </div>
        </div>
      </div>

      <div className="payments">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <form>
                <fieldset
                  className="monthyeardiv"
                  style={{
                    display: "flex",
                    marginBottom: "6%",
                  }}
                >
                  <div>
                    <select
                      className="monthyear"
                      id="month"
                      value={selectedMonth}
                      onChange={handleMonthChange}
                    >
                      <option value="">Select Month</option>
                      {months.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      className="monthyear"
                      id="year"
                      value={selectedYear}
                      onChange={handleYearChange}
                    >
                      <option value="">Select Year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </fieldset>
                <hr />

                <fieldset>
                  <table className="tablepayments">
                    <thead>
                      <tr>
                        <th className="thpayments" style={{ width: "40%" }}>
                          Product
                        </th>
                        <th className="thpayments" style={{ width: "30%" }}>
                          Price
                        </th>
                        <th className="thpayments" style={{ width: "30%" }}>
                          Rating
                        </th>
                        <td className="tdpayments" colSpan="3">
                          <hr />
                        </td>
                      </tr>
                      <tr>
                        <td className="tdpayments" colSpan="3">
                          <hr />
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {visibleProducts.map((product) => (
                        <React.Fragment key={product.name}>
                          <tr>
                            <td className="tdpayments">
                              <label>
                                <input
                                  style={{
                                    marginRight: "auto",
                                    fontSize: "16px",
                                  }}
                                  type="checkbox"
                                  checked={selectedProducts.includes(
                                    product.name
                                  )}
                                  onChange={(event) =>
                                    handleProductChange(event, product.name)
                                  }
                                />
                                {product.name}
                              </label>
                              <p style={{ fontSize: "13px", color: "#808191" }}>
                                {product.category}
                              </p>
                            </td>
                            <td
                              className="tdpayments"
                              style={{ color: "#5F75EE", fontSize: "14px" }}
                            >
                              {product.price}
                            </td>
                            <td
                              className="tdpayments"
                              style={{ color: "#7FBA7A", fontSize: "14px" }}
                            >
                              {product.rating}
                            </td>
                          </tr>
                          <tr>
                            <td className="tdpayments" colSpan="3">
                              <hr />
                            </td>
                          </tr>
                        </React.Fragment>
                      ))}
                      {showLoadMore && (
                        <tr>
                          <td colSpan="3">
                            <button
                              className="loadmorebtn"
                              type="button"
                              onClick={handleLoadMore}
                            >
                              Load More
                            </button>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </fieldset>
              </form>
            </div>
            <div style={{ marginBottom: "5%" }} className="col-lg-4">
              <div className="payment-section">
                <div className="paymentcards">
                  <h4 style={{ textAlign: "center" }}>Payments</h4>
                  <img src={card1} alt="credit card 1" />
                  <img src={card2} alt="credit card 1" />
                </div>
                <h6 className="ordersumheading">Order Summary</h6>

                <div className="discount-input">
                  <input
                    placeholder="Discount Code"
                    type="text"
                    id="discount"
                  />
                  <button type="button">Apply</button>
                </div>

                <div className="order-details">
                  <hr />
                  <p>
                    <span className="order-summary-values">Items:</span>
                    <span>
                      {selectedProducts.length > 0
                        ? "Rs " + calculateItemsValue()
                        : "Rs 0"}
                    </span>
                  </p>
                  <p>
                    <span className="order-summary-values">Delivery:</span>
                    <span>
                      {selectedProducts.length > 0 ? "Rs 15" : "Rs 0"}
                    </span>
                  </p>
                  <p>
                    <span className="order-summary-values">Subtotal:</span>
                    <span>
                      {selectedProducts.length > 0
                        ? "Rs " + calculateSubtotal()
                        : "Rs 0"}
                    </span>
                  </p>
                  <p>
                    <span className="order-summary-values">Tax:</span>
                    <span>
                      {selectedProducts.length > 0 ? "Rs 23" : "Rs 0"}
                    </span>
                  </p>
                  <p>
                    <span className="order-summary-values">Discount:</span>
                    <span>Rs 0</span>
                  </p>
                  <hr />
                  <p className="order-total">
                    <span
                      style={{ fontWeight: "600" }}
                      className="order-summary-values"
                    >
                      Order Total:
                    </span>
                    <span style={{ fontWeight: "600" }}>
                      {selectedProducts.length > 0
                        ? "Rs " + calculateOrderTotal()
                        : "Rs 0"}
                    </span>
                  </p>

                  <p className="privacypolicy">
                    By placing your order, you agree to our company Privacy
                    Policy and Conditions of Use.
                  </p>
                  <div className="paynowbtn">
                    <button>Pay Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
