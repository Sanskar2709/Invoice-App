import React from "react";
import { Field, ErrorMessage, FieldArray } from "formik";
import "./ExpenseDetails.css";

const ExpenseDetails = ({ values, errors, touched }) => {
  return (
    <div className="expense-details">
      <div className="expense-header">
        <h2>Expense Details</h2>
        <div className="expense-total">
          <span>
            ${" "}
            {values.expenses
              .reduce(
                (total, expense) => total + (parseFloat(expense.amount) || 0),
                0
              )
              .toFixed(2)}
          </span>
          <span className="divider">/</span>
          <span>$ {values.totalAmount || 0}</span>
        </div>
      </div>

      <FieldArray name="expenses">
        {({ push, remove }) => (
          <>
            {values.expenses.map((expense, index) => (
              <div key={index} className="expense-item">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`expenses.${index}.amount`}>
                      Line Amount *
                    </label>
                    <div className="currency-input">
                      <span>$</span>
                      <Field
                        type="number"
                        id={`expenses.${index}.amount`}
                        name={`expenses.${index}.amount`}
                        className={
                          touched.expenses &&
                          touched.expenses[index] &&
                          touched.expenses[index].amount &&
                          errors.expenses &&
                          errors.expenses[index] &&
                          errors.expenses[index].amount
                            ? "error"
                            : ""
                        }
                      />
                    </div>
                    <ErrorMessage
                      name={`expenses.${index}.amount`}
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor={`expenses.${index}.department`}>
                      Department *
                    </label>
                    <Field
                      as="select"
                      id={`expenses.${index}.department`}
                      name={`expenses.${index}.department`}
                      className={
                        touched.expenses &&
                        touched.expenses[index] &&
                        touched.expenses[index].department &&
                        errors.expenses &&
                        errors.expenses[index] &&
                        errors.expenses[index].department
                          ? "error"
                          : ""
                      }
                    >
                      <option value="">Select Department</option>
                      <option value="IT">IT</option>
                      <option value="HR">HR</option>
                      <option value="Finance">Finance</option>
                    </Field>
                    <ErrorMessage
                      name={`expenses.${index}.department`}
                      component="div"
                      className="error-message"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`expenses.${index}.account`}>
                      Account *
                    </label>
                    <Field
                      as="select"
                      id={`expenses.${index}.account`}
                      name={`expenses.${index}.account`}
                      className={
                        touched.expenses &&
                        touched.expenses[index] &&
                        touched.expenses[index].account &&
                        errors.expenses &&
                        errors.expenses[index] &&
                        errors.expenses[index].account
                          ? "error"
                          : ""
                      }
                    >
                      <option value="">Select Account</option>
                      <option value="Operating Expenses">
                        Operating Expenses
                      </option>
                      <option value="Capital Expenses">Capital Expenses</option>
                    </Field>
                    <ErrorMessage
                      name={`expenses.${index}.account`}
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor={`expenses.${index}.location`}>
                      Location *
                    </label>
                    <Field
                      as="select"
                      id={`expenses.${index}.location`}
                      name={`expenses.${index}.location`}
                      className={
                        touched.expenses &&
                        touched.expenses[index] &&
                        touched.expenses[index].location &&
                        errors.expenses &&
                        errors.expenses[index] &&
                        errors.expenses[index].location
                          ? "error"
                          : ""
                      }
                    >
                      <option value="">Select Location</option>
                      <option value="HQ">HQ</option>
                      <option value="Branch Office">Branch Office</option>
                      <option value="Remote">Remote</option>
                    </Field>
                    <ErrorMessage
                      name={`expenses.${index}.location`}
                      component="div"
                      className="error-message"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group full-width">
                    <label htmlFor={`expenses.${index}.description`}>
                      Description
                    </label>
                    <Field
                      as="textarea"
                      id={`expenses.${index}.description`}
                      name={`expenses.${index}.description`}
                    />
                  </div>
                </div>

                {values.expenses.length > 1 && (
                  <button
                    type="button"
                    className="remove-expense-btn"
                    onClick={() => remove(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              className="add-expense-btn"
              onClick={() =>
                push({
                  amount: "",
                  department: "",
                  account: "",
                  location: "",
                  description: "",
                })
              }
            >
              + Add Another Expense
            </button>
          </>
        )}
      </FieldArray>
    </div>
  );
};

export default ExpenseDetails;
