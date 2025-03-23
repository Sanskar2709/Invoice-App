import React from "react";
import { Field, ErrorMessage } from "formik";
import "./InvoiceDetails.css";

const InvoiceDetails = ({ values, errors, touched }) => {
  return (
    <div className="invoice-details">
      <div className="section-header">
        <div className="section-icon">
          <i className="fas fa-file-invoice"></i>
        </div>
        <h2>Invoice Details</h2>
      </div>

      <div className="section-content">
        <h3>General Information</h3>

        <div className="form-group">
          <label htmlFor="purchaseOrderNumber">Purchase Order Number *</label>
          <Field
            as="select"
            id="purchaseOrderNumber"
            name="purchaseOrderNumber"
            className={
              touched.purchaseOrderNumber && errors.purchaseOrderNumber
                ? "error"
                : ""
            }
          >
            <option value="">Select PO Number</option>
            <option value="PO-001">PO-001</option>
            <option value="PO-002">PO-002</option>
          </Field>
          <ErrorMessage
            name="purchaseOrderNumber"
            component="div"
            className="error-message"
          />
        </div>

        <h3>Invoice Details</h3>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="invoiceNumber">Invoice Number *</label>
            <Field
              as="select"
              id="invoiceNumber"
              name="invoiceNumber"
              className={
                touched.invoiceNumber && errors.invoiceNumber ? "error" : ""
              }
            >
              <option value="">Select Invoice</option>
              <option value="INV-001">INV-001</option>
              <option value="INV-002">INV-002</option>
            </Field>
            <ErrorMessage
              name="invoiceNumber"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="invoiceDate">Invoice Date *</label>
            <Field
              type="date"
              id="invoiceDate"
              name="invoiceDate"
              className={
                touched.invoiceDate && errors.invoiceDate ? "error" : ""
              }
            />
            <ErrorMessage
              name="invoiceDate"
              component="div"
              className="error-message"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="totalAmount">Total Amount *</label>
            <div className="currency-input">
              <span>$</span>
              <Field
                type="number"
                id="totalAmount"
                name="totalAmount"
                className={
                  touched.totalAmount && errors.totalAmount ? "error" : ""
                }
              />
            </div>
            <ErrorMessage
              name="totalAmount"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="paymentTerms">Payment Terms *</label>
            <Field
              as="select"
              id="paymentTerms"
              name="paymentTerms"
              className={
                touched.paymentTerms && errors.paymentTerms ? "error" : ""
              }
            >
              <option value="">Select</option>
              <option value="Net 30">Net 30</option>
              <option value="Net 60">Net 60</option>
              <option value="Net 90">Net 90</option>
            </Field>
            <ErrorMessage
              name="paymentTerms"
              component="div"
              className="error-message"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="invoiceDueDate">Invoice Due Date *</label>
            <Field
              type="date"
              id="invoiceDueDate"
              name="invoiceDueDate"
              className={
                touched.invoiceDueDate && errors.invoiceDueDate ? "error" : ""
              }
            />
            <ErrorMessage
              name="invoiceDueDate"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="glPostDate">GL Post Date *</label>
            <Field
              type="date"
              id="glPostDate"
              name="glPostDate"
              className={touched.glPostDate && errors.glPostDate ? "error" : ""}
            />
            <ErrorMessage
              name="glPostDate"
              component="div"
              className="error-message"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="invoiceDescription">Invoice Description</label>
          <Field
            as="textarea"
            id="invoiceDescription"
            name="invoiceDescription"
            rows="3"
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
