import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = (props: any) => {
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
    <Modal
      size="7xl"
      show={props.openModal}
      onClose={() => {
        setPageNumber(1)
        props.setOpenModal(false);
      }}
    >
      <Modal.Header></Modal.Header>
      <Modal.Body>
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
                if (pageNumber != 100) {
                  setPageNumber(pageNumber + 1);
                }
              }}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              <BsChevronRight />
            </button>
          </div>
          <div className="flex justify-center border border-slate-950">
            <Document file={props.pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
              <Page  pageNumber={pageNumber} />
            </Document>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PdfViewer;
