import React, { useState, useEffect, useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Navigation from "../Navigation/Navigation";
import PDFViewer from "../PDFViewer/PDFViewer";
import VendorDetails from "./VendorDetails";
import InvoiceDetails from "./InvoiceDetails";
import ExpenseDetails from "./ExpenseDetails";
import Comments from "./Comments";
import { dummyData } from "../../utils/dummyData";
import "./InvoiceForm.css";

const InvoiceForm = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [pdfFile, setPdfFile] = useState(null);
  const [activeTab, setActiveTab] = useState("vendor");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }

    // Load saved form data from localStorage if available
    const savedFormData = localStorage.getItem("invoiceFormData");
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      setInitialValues(parsedData);
    }
  }, [isAuthenticated, navigate]);

  const [initialValues, setInitialValues] = useState({
    vendor: "",
    purchaseOrderNumber: "",
    invoiceNumber: "",
    invoiceDate: "",
    totalAmount: "",
    paymentTerms: "",
    invoiceDueDate: "",
    glPostDate: "",
    invoiceDescription: "",
    expenses: [
      {
        amount: "",
        department: "",
        account: "",
        location: "",
        description: "",
      },
    ],
    comments: "",
  });

  const validationSchema = Yup.object({
    vendor: Yup.string().required("Vendor is required"),
    purchaseOrderNumber: Yup.string().required(
      "Purchase Order Number is required"
    ),
    invoiceNumber: Yup.string().required("Invoice Number is required"),
    invoiceDate: Yup.date().required("Invoice Date is required"),
    totalAmount: Yup.number()
      .required("Total Amount is required")
      .positive("Amount must be positive"),
    paymentTerms: Yup.string().required("Payment Terms are required"),
    invoiceDueDate: Yup.date().required("Invoice Due Date is required"),
    glPostDate: Yup.date().required("GL Post Date is required"),
    expenses: Yup.array().of(
      Yup.object({
        amount: Yup.number()
          .required("Amount is required")
          .positive("Amount must be positive"),
        department: Yup.string().required("Department is required"),
        account: Yup.string().required("Account is required"),
        location: Yup.string().required("Location is required"),
      })
    ),
  });

  const handleFileChange = (event) => {
    try {
      const file = event.target.files[0];

      if (file && file.type === "application/pdf") {
        setPdfFile(file);
      } else {
        alert("Please select a PDF file");
      }
    } catch (e) {
      console.error("Error: handleFileChange", e);
    }
  };

  const handleDummyData = (setFieldValue) => {
    // Set form values with dummy data
    Object.keys(dummyData).forEach((key) => {
      setFieldValue(key, dummyData[key]);
    });

    // Set a dummy PDF file
    const dummyPdfBlob = new Blob(["dummy pdf content"], {
      type: "application/pdf",
    });
    const dummyPdfFile = new File([dummyPdfBlob], "dummy.pdf", {
      type: "application/pdf",
    });
    setPdfFile(dummyPdfFile);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Save form data to localStorage
    localStorage.setItem("invoiceFormData", JSON.stringify(values));

    // Handle form submission
    console.log("Form submitted:", values);
    alert("Invoice saved successfully!");
    setSubmitting(false);
  };

  return (
    <div className="invoice-form-container">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, errors, touched, isSubmitting, setFieldValue }) => (
          <Form>
            <div className="invoice-form-content">
              <div className="left-panel">
                <div className="pdf-upload-container">
                  <PDFViewer file={pdfFile} />
                  <div className="upload-actions">
                    <label htmlFor="pdf-upload" className="upload-btn">
                      Upload File
                      <input
                        id="pdf-upload"
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                      />
                    </label>
                    <p className="upload-note">
                      Click to upload or drag and drop
                    </p>
                  </div>
                </div>
              </div>

              <div className="right-panel">
                <div className="form-actions">
                  <button
                    type="button"
                    className="populate-btn"
                    onClick={() => handleDummyData(setFieldValue)}
                  >
                    Populate with Dummy Data
                  </button>
                </div>

                <VendorDetails
                  values={values}
                  errors={errors}
                  touched={touched}
                />
                <InvoiceDetails
                  values={values}
                  errors={errors}
                  touched={touched}
                />
                <ExpenseDetails
                  values={values}
                  errors={errors}
                  touched={touched}
                />
                <Comments />

                <div className="form-buttons">
                  <button type="button" className="save-draft-btn">
                    Save as Draft
                  </button>
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    Submit & New
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InvoiceForm;
