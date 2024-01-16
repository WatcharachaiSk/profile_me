// import React from 'react'

import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Document, Page } from 'react-pdf';
// import { PDF } from '../../configs/pdf-index';

import pdfread1 from '../../assets/pdf/1703579517_3754.pdf'
import pdfread2 from '../../assets/pdf/1703580428_6022.pdf'


function TextPDF() {
  const pdfUrl = pdfread2;
  const [numPages, setNumPages] = useState<any>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };

  const handleInputChange = (e: any) => {
    let value = e.target.value;
    // แปลงค่าให้เป็นตัวเลข
    value = parseInt(value, 10);

    // ตรวจสอบว่าค่าอยู่ระหว่าง 1 ถึง 100
    if (!isNaN(value) && value >= 1 && value <= numPages) {
      setPageNumber(value);
    }
  };
  return (
    <div className="flex flex-col w-full justify-center">
      <div className="flex w-full justify-end mb-2">
        <p>
          หน้า {pageNumber} จาก {numPages}
        </p>
      </div>

      <div className="flex w-full justify-between">
        <button
          onClick={() => {
            if (pageNumber != 1) {
              setPageNumber(pageNumber - 1);
            }
          }}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          <BsChevronLeft />
        </button>
        <input
          type="number"
          name="กรอกเลขหน้า"
          value={pageNumber}
          onChange={handleInputChange}
          className="border rounded-md border-spacing-1 border-gray-600 w-20 h-10"
          max={100}
          min={1}
        />

        <button
          onClick={() => {
            if (pageNumber != numPages) {
              setPageNumber(pageNumber + 1);
            }
          }}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          <BsChevronRight />
        </button>
      </div>
      <div className="flex justify-center border border-slate-950">
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
}

export default TextPDF;
