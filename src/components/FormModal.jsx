import React, { useState } from "react";

const FormModal = ({ isOpen, onClose, selectedMovie }) => {
  const [formData, setFormData] = useState({
    userName: "",
    city: "",
    email: "",
    phoneNo: "",
    pincode: "",
  });
  const handleChange = (e) => {
    // Retrieve existing data from local storage
    const existingData = JSON.parse(localStorage.getItem("userData")) || [];

    let updatedData;

    if (Array.isArray(existingData)) {
      // Update the specific data field in the existing array
      updatedData = existingData.map((data) => {
        if (data.userName === formData.userName) {
          return {
            ...data,
            [e.target.name]: e.target.value,
          };
        }
        return data;
      });
    } else {
      // If existingData is not an array, create a new array with the current formData
      updatedData = [{ ...formData, [e.target.name]: e.target.value }];
    }

    // Save the updated array back to local storage
    localStorage.setItem("userData", JSON.stringify(updatedData));

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display a message or perform any other actions
    alert("Ticket booked successfully!");
    // Close the modal
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <>
          <div
            className="modal-backdrop"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          ></div>

          <div
            className={`modal ${isOpen ? "show" : ""}`}
            tabIndex="-1"
            role="dialog"
            style={{ display: isOpen ? "block" : "none" }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    Movie Name - {selectedMovie && selectedMovie.show.name}
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={onClose}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="userName">User Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNo">Phone No</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phoneNo"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pincode">Pincode</label>
                      <input
                        type="text"
                        className="form-control"
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">
                      Book Your Ticket
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FormModal;
