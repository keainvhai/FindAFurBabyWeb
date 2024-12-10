import { useState } from "react";

export default function DonateForm({ onClose }) {
  const initialValues = {
    fullname: "",
    email: "",
    money: "",
    cardnumber: "",
    expiration: "",
    cvv: "",
  };
  const [formValues, setFormValue] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cardNumberRegex = /^[0-9]{16}$/;
    const expirationRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // MM/YY 格式
    const cvvRegex = /^[0-9]{3}$/; // CVV 必须是3位数字
    const moneyRegex = /^[1-9][0-9]*$/;
    if (!values.fullname) {
      errors.fullname = "Full name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email format!";
    }
    if (!values.money) {
      errors.money = "Donate Number is required!";
    } else if (!moneyRegex.test(values.money)) {
      errors.money = "Donate Number must be a number!";
    }
    if (!values.cardnumber) {
      errors.cardnumber = "Credit Card Number is required!";
    } else if (!cardNumberRegex.test(values.cardnumber)) {
      errors.cardnumber = "Card number must be a 16 number";
    }
    if (!values.expiration) {
      errors.expiration = "Expiration is required!";
    } else if (!expirationRegex.test(values.expiration)) {
      errors.expiration = "Expiration must be in MM/YY format!";
    }
    if (!values.cvv) {
      errors.cvv = "Pin number is required!";
    } else if (!cvvRegex.test(values.cvv)) {
      errors.cvv = "CVV must be exactly 3 digits!";
    }
    return errors;
  };

  return (
    <>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="success-message">
          <h2>Payment Successfully!</h2>
          <p>
            Thank you for your generous donation. Your support helps us make a
            difference!
          </p>
          <button className="btn-outline" onClick={onClose}>
            Close
          </button>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="field">
              <label>Full Name</label>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formValues.fullname}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.fullname}</p>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field ">
              <label>Donate Number</label>
              <div className="money-number">
                <div className="money-symbol">
                  <span>$</span>
                </div>
                <input
                  type="text"
                  name="money"
                  placeholder="Donate Number"
                  value={formValues.money}
                  onChange={handleChange}
                />
              </div>
            </div>
            <p>{formErrors.money}</p>
            <div className="field">
              <label>Credit Card Number</label>
              <input
                type="text"
                name="cardnumber"
                value={formValues.cardnumber}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.cardnumber}</p>
            <div className="cardInfo-container">
              <div className="field">
                <label>Expiration</label>
                <input
                  type="text"
                  name="expiration"
                  placeholder="MM/YY"
                  value={formValues.expiration}
                  onChange={handleChange}
                />
                <p>{formErrors.expiration}</p>
              </div>
              <div className="field">
                <label>CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formValues.cvv}
                  onChange={handleChange}
                />
                <p>{formErrors.cvv}</p>
              </div>
            </div>
          </div>
          <div className="btn-container">
            <button className="btn-primary">Confirm</button>
            <button className="btn-outline" onClick={onClose}>
              Maybe Later
            </button>
          </div>
        </form>
      )}
    </>
  );
}
