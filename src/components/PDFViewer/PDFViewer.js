import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./PDFViewer.css";
import * as pdfjsLib from "pdfjs-dist/build/pdf";

// pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.1.266/pdf.worker.js`;
// import 'react-pdf/dist/Page/TextLayer.css';
// import * as pdfjs from 'pdfjs-dist/build/pdf';
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
// Set the worker source directly using a specific version that exists on CDN
// pdfjs.GlobalWorkerOptions.workerSrc = `${window.location.origin}/pdf.worker.js`;
const PDFViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-viewer">
      {file ? (
        <div className="pdf-document">
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <div className="pdf-controls">
            <button
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              Previous
            </button>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <button
              disabled={pageNumber >= numPages}
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="upload-section">
          <div className="upload-icon">
            <img src="/invoice-icon.svg" alt="Upload Invoice" />
          </div>
          <h3>Upload Your Invoice</h3>
          <p>To auto-populate fields and save time</p>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
