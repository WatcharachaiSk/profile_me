// import React from 'react'

import { useEffect, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Document, Page } from 'react-pdf';
// import { PDF } from '../../configs/pdf-index';
import pdfread2 from '../../assets/pdf/1703580428_6022.pdf';
import Tesseract from 'tesseract.js';
import Dropzone from 'react-dropzone';
import _ from 'lodash';
import TdInput from './compo/TdInput';
import axios from 'axios';
import configAxios from '../../axios/configAxios';
import { API } from '../../axios/endpoint';
import Load from './compo/Load';

function TextPDF() {
  const pdfUrl = pdfread2;
  const headers = [
    'filename',
    'chapter',
    'page',
    'ministry',
    'department',
    'budget_plan_type',
    'budget_plan_name',
    'budget_plan_amount',
    'off_budget_money',
    'off_budget_money_amount',
    'lv',
    'no',
    'category',
    'categoryLV1',
    'categoryLV2',
    'categoryLV3',
    'categoryLV4',
    'categoryLV5',
    'categoryLV6',
    'categoryLVX',
    'categoryLVXX',
    'category_amount',
    'category_amount_E',
    'category_page',
    'anotherLV',
  ];
  const [loading, setLoading] = useState<boolean>(false);
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

  const [arrtext, setArrText] = useState<any>([]);
  // const [newText, setNewText] = useState<any[]>([]);

  const [tableData, setTableData] = useState<any[]>([]);
  // console.log('tableDataOBJ is ', tableData);

  const handleInputChangeText = (rowIndex: any, colName: any, value: any) => {
    const newData = [...tableData];
    newData[rowIndex][colName] = value;
    setTableData(newData);
  };
  const handleAddRow = () => {
    const newRow: any = {};
    headers.forEach((header) => (newRow[header] = ''));
    setTableData([...tableData, newRow]);
  };
  const handleDeleteRow = (rowIndex: any) => {
    const newData = [...tableData];
    newData.splice(rowIndex, 1);
    setTableData(newData);
  };

  useEffect(() => {
    // ใช้ regex เพื่อตัดวรรคและดึงตัวเลข
    const newArrOBJ: any[] = [];
    _.map(arrtext, (item) => {
      const replaceText = item.text.replace(/\s{2,}/g, ' ');
      const match = replaceText.match(/\S+/g);

      const resultObject: any = {};
      for (let i: any = 0; i < headers.length; i++) {
        if (i == 10) {
          // console.log(`i is ${i - 10} match is ${match[i - 10]}`);
          // console.log('match is ', match[i]);
          resultObject[headers[i]] = match[i - 10] || '';
        } else if (i == 11) {
          resultObject[headers[i]] = '';
        } else if (i > 11) {
          resultObject[headers[i]] = match[i - 11] || '';
        } else {
          resultObject[headers[i]] = '';
        }
      }

      newArrOBJ.push(resultObject);
    });
    setTableData(newArrOBJ);
  }, [arrtext]);

  const handleDrop = async (acceptedFiles: File[]) => {
    setLoading(true);
    const imageFile = acceptedFiles[0];
    const { data } = await Tesseract.recognize(imageFile, 'tha', {
      logger: (info) => console.log(info),
    });
    console.log('data is  ', data.lines);

    setArrText(data.lines);
    setLoading(false);
  };

  const setTitleSum = (rowIndex: any) => {
    const resultString = Object.values(tableData[rowIndex]).join(' ');

    return resultString;
    // const sumText = []
  };

  const submitEvent = async () => {
    // const paylode = tableData;
    setLoading(true);

    const paylode = tableData.map((obj) => {
      const updatedObj: any = {};
      for (const key in obj) {
        updatedObj[key] = obj[key] === '' ? null : obj[key];
      }
      return updatedObj;
    });
    // console.log('paylode is ', paylode);

    let res = [];
    const url = API.create;
    for (const item of paylode) {
      // console.log("item is ");
      try {
        const resData = await axios(configAxios('post', url, item));
        res.push({ status: resData.status, data: resData.data });
      } catch (error: any) {
        res.push({ status: error.response.status, data: error.response.data });
        console.log(error);
      }
    }
    console.log(res);

    setLoading(false);
  };
  return (
    <div className="flex flex-col w-full justify-center">
      <div>
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
              <input {...getInputProps()} />
              <p>ลากและวางรูปภาพที่นี่</p>
              {loading == true && (
                <>
                  <Load />
                </>
              )}
            </div>
          )}
        </Dropzone>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className=" text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border-b">
                <th>รวมคำ</th>
                {headers.map((header, colIndex) => (
                  <th key={colIndex} className="px-16 py-3">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <p className="absolute border-gray-300 text-slate-950">{setTitleSum(rowIndex)}</p>
                  {Object.keys(row).map((colName, colIndex) => (
                    <td key={colIndex} className="p-2 border border-gray-300 py-5">
                      <input
                        type="text"
                        value={row[colName]}
                        onChange={(e) => handleInputChangeText(rowIndex, colName, e.target.value)}
                        className="w-full h-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      />
                    </td>
                  ))}
                  <button
                    onClick={() => handleDeleteRow(rowIndex)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
                  >
                    Delete
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-900 focus:outline-none focus:shadow-outline-red active:bg-emerald-400"
            onClick={handleAddRow}
          >
            Add Row
          </button>
        </div>
        {/*  */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className=" text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border-b">
                {headers.map((header, colIndex) => (
                  <th key={colIndex} className="px-16 py-3">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <TdInput tableData={tableData} setTableData={setTableData} />
            </tbody>
          </table>
        </div>
        {/*  */}
        <div className="flex flex-col justify-center items-center">
          <button
            className="px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-900 focus:outline-none focus:shadow-outline-red active:bg-cyan-400"
            onClick={() => {
              if (loading == false) {
                submitEvent();
              }
            }}
          >
            ส่งไป BE
          </button>
          {loading == true && (
            <>
              <Load />
            </>
          )}
        </div>

        {arrtext && (
          <div className="flex flex-col justify-center items-center">
            <h2>ผลลัพธ์:</h2>
            {_.map(arrtext, (item, idx) => {
              return (
                <div key={idx}>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
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
