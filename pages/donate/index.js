import React, { Fragment, useState } from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Logo from "/images/logo.png";

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const donationOptions = [
    { amount: 25, description: "Provides school supplies for 1 student" },
    { amount: 50, description: "Provides uniform for 1 student" },
    { amount: 100, description: "Supports 1 student for a semester" },
    { amount: 250, description: "Furnishes 1 bed at girls hostel" },
  ];

  const SubmitHandler = (e) => {
    e.preventDefault();
    const amount = customAmount || selectedAmount;
    alert(
      `Thank you for your donation of $${amount}! Please contact us at habteg2@yahoo.com or call 615-351-7055 to complete your donation.`
    );
  };

  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle pageTitle={"Support Our Mission"} pagesub={"Donate"} />
      <div className="wpo-donation-page-area section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="wpo-donate-header">
                <h2>Make a Difference Today</h2>
                <p
                  style={{
                    textAlign: "center",
                    marginBottom: "30px",
                    color: "#666",
                  }}
                >
                  Your donation helps provide school supplies, uniforms, and
                  support for students in Webe Wachile, Ethiopia. Every
                  contribution makes a lasting impact.
                </p>
              </div>

              {/* Impact Section */}
              <div
                style={{
                  background: "#f8f9fa",
                  padding: "30px",
                  borderRadius: "10px",
                  marginBottom: "40px",
                }}
              >
                <h3
                  style={{
                    textAlign: "center",
                    marginBottom: "25px",
                    color: "#2a9d8f",
                  }}
                >
                  Your Impact
                </h3>
                <div className="row">
                  {donationOptions.map((option, index) => (
                    <div
                      key={index}
                      className="col-lg-6 col-md-6 col-12"
                      style={{ marginBottom: "15px" }}
                    >
                      <div
                        onClick={() => {
                          setSelectedAmount(option.amount);
                          setCustomAmount("");
                        }}
                        style={{
                          background:
                            selectedAmount === option.amount
                              ? "#2a9d8f"
                              : "#fff",
                          color:
                            selectedAmount === option.amount ? "#fff" : "#333",
                          padding: "20px",
                          borderRadius: "10px",
                          cursor: "pointer",
                          border: "2px solid #2a9d8f",
                          textAlign: "center",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <h4
                          style={{
                            margin: "0 0 10px 0",
                            color:
                              selectedAmount === option.amount
                                ? "#fff"
                                : "#2a9d8f",
                          }}
                        >
                          ${option.amount}
                        </h4>
                        <p style={{ margin: 0, fontSize: "14px" }}>
                          {option.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="Donations" className="tab-pane">
                <form onSubmit={SubmitHandler}>
                  <div className="wpo-donations-amount">
                    <h2>Donation Amount</h2>
                    <input
                      type="number"
                      className="form-control"
                      name="amount"
                      placeholder="Enter custom amount ($)"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount("");
                      }}
                      style={{ fontSize: "18px", padding: "15px" }}
                    />
                    {(selectedAmount || customAmount) && (
                      <p
                        style={{
                          marginTop: "10px",
                          color: "#2a9d8f",
                          fontWeight: "bold",
                        }}
                      >
                        Selected: ${customAmount || selectedAmount}
                      </p>
                    )}
                  </div>
                  <div className="wpo-donations-details">
                    <h2>Your Information</h2>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="fname"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="lname"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-lg-12 col-12 form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Leave a message (optional)"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Donation Methods */}
                  <div
                    style={{
                      background: "#fff3cd",
                      padding: "25px",
                      borderRadius: "10px",
                      marginBottom: "30px",
                      border: "1px solid #ffc107",
                    }}
                  >
                    <h3 style={{ color: "#856404", marginBottom: "15px" }}>
                      💳 How to Donate
                    </h3>
                    <p style={{ color: "#856404", marginBottom: "15px" }}>
                      After submitting this form, you can complete your donation
                      via:
                    </p>
                    <ul style={{ color: "#856404", marginBottom: "0" }}>
                      <li>
                        <strong>Zelle:</strong> 615-351-7055
                      </li>
                      <li>
                        <strong>PayPal:</strong> habteg2@yahoo.com
                      </li>
                      <li>
                        <strong>Check:</strong> Contact us for mailing address
                      </li>
                      <li>
                        <strong>Phone:</strong> Call 615-351-7055
                      </li>
                    </ul>
                  </div>

                  <div className="submit-area">
                    <button
                      type="submit"
                      className="theme-btn submit-btn"
                      style={{
                        width: "100%",
                        padding: "15px",
                        fontSize: "18px",
                      }}
                    >
                      Submit Donation Request
                    </button>
                  </div>
                </form>
              </div>

              {/* Thank You Message */}
              <div
                style={{
                  textAlign: "center",
                  marginTop: "40px",
                  padding: "30px",
                  background: "#d4edda",
                  borderRadius: "10px",
                }}
              >
                <h3 style={{ color: "#155724" }}>
                  🙏 Thank You for Your Generosity
                </h3>
                <p style={{ color: "#155724", marginBottom: "0" }}>
                  100% of your donation goes directly to supporting students in
                  Ethiopia. Together, we are building classrooms, empowering
                  futures, and changing lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default DonatePage;
