import "./CSS/Modal.css";
import DonateForm from "./DonateForm";
import donate from "./pic/donate.jpg";

export default function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal-container">
        <img className="modal-pic" src={donate} alt="modal-donate" />
        <div className="modal-right">
          <p onClick={onClose} className="close-btn">
            X
          </p>
          <div className="text-content">
            <p>Do you want to </p>
            <p>
              Donate <span className="highlight">$100</span>
            </p>
            <p>to make your life better</p>
          </div>
          <DonateForm onClose={onClose}></DonateForm>
        </div>
      </div>
    </>
  );
}
