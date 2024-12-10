import { useState } from "react";
import "./CSS/Application.css";

function AdoptionApplication({}) {
  const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    address: "",
    petType: "",
    petPreference: "",
    experience: "",
    reason: "",
    homeType: "",
    hoursAway: "",
    vetReference: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
    }
  };

  const handleReset = () => {
    // Reset the form to its initial state
    setFormValues(initialValues);
    setFormErrors({});
    setIsSubmit(false);
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;
    const hoursRegex = /^[0-9]+$/;

    if (!values.fullname) {
      errors.fullname = "Full name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = "Phone number must be 10-15 digits!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.petType) {
      errors.petType = "Pet type is required!";
    }
    if (!values.reason) {
      errors.reason = "Reason for adoption is required!";
    }
    if (!values.hoursAway) {
      errors.hoursAway = "Hours away per day is required!";
    } else if (!hoursRegex.test(values.hoursAway)) {
      errors.hoursAway = "Hours away must be a number!";
    }

    return errors;
  };

  return (
    <>
      {isSubmit ? (
        <div className="success-message">
          <h2>Application Submitted Successfully!</h2>
          <p>
            Thank you for your interest in adoption. We will contact you soon!
          </p>
          <button className="btn-outline" onClick={handleReset}>
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Adoption Application</h1>

          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="fullname"
              value={formValues.fullname}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            <p className="error">{formErrors.fullname}</p>
          </div>

          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <p className="error">{formErrors.email}</p>
          </div>

          <div>
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />{" "}
            <p className="error">{formErrors.phone}</p>
          </div>

          <div>
            <label>Address</label>
            <textarea
              name="address"
              value={formValues.address}
              onChange={handleChange}
              placeholder="Enter your address"
              rows="3"
            />{" "}
            <p className="error">{formErrors.address}</p>
          </div>

          <div>
            <label>Type of Pet</label>
            <select
              name="petType"
              value={formValues.petType}
              onChange={handleChange}
            >
              <option value="">--Select Pet Type--</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="other">Other</option>
            </select>
            <p className="error">{formErrors.petType}</p>
          </div>

          <div>
            <label>
              Do you have a specific pet preference? (e.g., breed, age)
            </label>
            <input
              type="text"
              name="petPreference"
              value={formValues.petPreference}
              onChange={handleChange}
              placeholder="Enter your preference"
            />
          </div>

          <div>
            <label>Have you owned a pet before?</label>
            <select
              name="experience"
              value={formValues.experience}
              onChange={handleChange}
            >
              <option value="">--Select--</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label>Why do you want to adopt a pet?</label>
            <textarea
              name="reason"
              value={formValues.reason}
              onChange={handleChange}
              placeholder="Explain briefly"
            />
            <p className="error">{formErrors.reason}</p>
          </div>

          <div>
            <label>What type of home do you live in?</label>
            <select
              name="homeType"
              value={formValues.homeType}
              onChange={handleChange}
            >
              <option value="">--Select Home Type--</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label>How many hours per day will the pet be left alone?</label>
            <input
              type="number"
              name="hoursAway"
              value={formValues.hoursAway}
              onChange={handleChange}
              placeholder="e.g., 4"
            />
            <p className="error">{formErrors.hoursAway}</p>
          </div>

          <div>
            <label>Veterinarian Reference (optional)</label>
            <input
              type="text"
              name="vetReference"
              value={formValues.vetReference}
              onChange={handleChange}
              placeholder="Enter veterinarian's name or clinic"
            />
          </div>

          <button type="submit">Submit Application</button>
        </form>
      )}
    </>
  );
}

export default AdoptionApplication;
