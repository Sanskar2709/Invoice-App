import React from "react";
import { Field, ErrorMessage } from "formik";
import "./VendorDetails.css";

const VendorDetails = ({ values, errors, touched }) => {
  return (
    <div className="vendor-details">
      <div className="section-header">
        <div className="section-icon">
          <i className="fas fa-building"></i>
        </div>
        <h2>Vendor Details</h2>
      </div>

      <div className="section-content">
        <h3>Vendor Information</h3>

        <div className="form-group">
          <label htmlFor="vendor">Vendor *</label>
          <Field
            as="select"
            id="vendor"
            name="vendor"
            className={touched.vendor && errors.vendor ? "error" : ""}
          >
            <option value="">Select Vendor</option>
            <option value="A+ Examinations">A+ Examinations</option>
            <option value="XYZ Corp">XYZ Corp</option>
            <option value="ABC Inc">ABC Inc</option>
          </Field>
          <ErrorMessage
            name="vendor"
            component="div"
            className="error-message"
          />
        </div>

        <div className="form-group">
          <label>Vendor Address</label>
          <div className="vendor-address">
            <p>
              {values.vendor === "A+ Examinations" ? "520 Main St, Lynn" : ""}
            </p>
          </div>
        </div>

        <div className="form-action">
          <button type="button" className="view-details-btn">
            View Vendor Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
