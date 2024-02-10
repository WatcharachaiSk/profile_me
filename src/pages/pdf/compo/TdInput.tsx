import { useState } from 'react';

function TdInput(props: any) {
  const [filename, setFilename] = useState('');
  const [chapter, setChapter] = useState('');
  const [page, setPage] = useState('');
  const [ministry, setMinistry] = useState('');
  const [department, setDepartment] = useState('');
  const [budget_plan_type, setBudget_plan_type] = useState('');
  const [budget_plan_name, setBudget_plan_name] = useState('');
  const [budget_plan_amount, setBudget_plan_amount] = useState('');
  const [off_budget_money, setOff_budget_money] = useState('');
  const [off_budget_money_amount, setOff_budget_money_amount] = useState('');
  const [category_page, setCategory_page] = useState('');

  const handleFilenameChange = (event: any) => {
    const newFilename = event.target.value;
    setFilename(newFilename);

    // อัปเดตทุก object ใน array ด้วยค่า filename ใหม่
    const updatedData = props.tableData.map((obj: any) => ({
      ...obj,
      filename: newFilename,
    }));
    props.setTableData(updatedData);
  };
  const handleChapterChange = (event: any) => {
    const newChapter = event.target.value;
    setChapter(newChapter);

    // อัปเดตทุก object ใน array ด้วยค่า Chapter ใหม่
    const updatedData = props.tableData.map((obj: any) => ({
      ...obj,
      chapter: newChapter,
    }));
    props.setTableData(updatedData);
  };
  const handlePageChange = (event: any) => {
    const newPage = event.target.value;
    setPage(newPage);

    // อัปเดตทุก object ใน array ด้วยค่า Page ใหม่
    const updatedData = props.tableData.map((obj: any) => ({
      ...obj,
      page: newPage,
    }));
    props.setTableData(updatedData);
  };
  const handleMinistryChange = (event: any) => {
    const newMinistry = event.target.value;
    setMinistry(newMinistry);

    // อัปเดตทุก object ใน array ด้วยค่า Ministry ใหม่
    const updatedData = props.tableData.map((obj: any) => ({
      ...obj,
      ministry: newMinistry,
    }));
    props.setTableData(updatedData);
  };

  const handleDepartmentChange = (event: any) => {
    const newDepartment = event.target.value;
    setDepartment(newDepartment);

    // อัปเดตทุก object ใน array ด้วยค่า Department ใหม่
    const updatedData = props.tableData.map((obj: any) => ({
      ...obj,
      department: newDepartment,
    }));
    props.setTableData(updatedData);
  };

  const handleBudget_plan_typeChange = (event: any) => {
    const newBudget_plan_type = event.target.value;
    setBudget_plan_type(newBudget_plan_type);

    // อัปเดตทุก object ใน array ด้วยค่า budget_plan_type ใหม่
    const updatedData = props.tableData.map((obj: any) => ({
      ...obj,
      budget_plan_type: newBudget_plan_type,
    }));
    props.setTableData(updatedData);
  };

  const handleBudget_plan_nameChange = (event: any) => {
    const newBudget_plan_name = event.target.value;
    setBudget_plan_name(newBudget_plan_name);

    // อัปเดตทุก object ใน array ด้วยค่า Budget_plan_name ใหม่
    const updatedData = props.tableData.map((obj: any) => ({
      ...obj,
      budget_plan_name: newBudget_plan_name,
    }));
    props.setTableData(updatedData);
  };

  const handleBudget_plan_amountChange = (event: any) => {
    const newBudget_plan_amount = event.target.value;
    setBudget_plan_amount(newBudget_plan_amount);

    // อัปเดตทุก object ใน array ด้วยค่า Budget_plan_amount ใหม่
    const updatedData = props.tableData.map((obj: any) => ({
      ...obj,
      budget_plan_amount: newBudget_plan_amount,
    }));
    props.setTableData(updatedData);
  };
  const handleOff_budget_moneyChange = (event: any) => {
    const newOff_budget_money = event.target.value;
    setOff_budget_money(newOff_budget_money);

    // อัปเดตทุก object ใน array ด้วยค่า Off_budget_money ใหม่
    const updatedData = props.tableData.map((obj: any) => ({
      ...obj,
      off_budget_money: newOff_budget_money,
    }));
    props.setTableData(updatedData);
  };
  const handleOff_budget_money_amountChange = (event: any) => {
    const newOff_budget_money_amount = event.target.value;
    setOff_budget_money_amount(newOff_budget_money_amount);

    // อัปเดตทุก object ใน array ด้วยค่า Off_budget_money_amount ใหม่
    const updatedData = props.tableData.map((obj: any) => ({
      ...obj,
      off_budget_money_amount: newOff_budget_money_amount,
    }));
    props.setTableData(updatedData);
  };

  const handleCategory_pageChange = (event: any) => {
    const newCategory_page = event.target.value;
    setCategory_page(newCategory_page);

    // อัปเดตทุก object ใน array ด้วยค่า Category_page ใหม่
    const updatedData = props.tableData.map((obj: any) => ({
      ...obj,
      category_page: newCategory_page,
    }));
    props.setTableData(updatedData);
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-2 border border-gray-300 py-5">
        <input
          type="text"
          value={filename}
          onChange={handleFilenameChange}
          placeholder="Enter filename"
          className="w-full h-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </td>
      <td className="p-2 border border-gray-300 py-5">
        <input
          type="text"
          placeholder="Enter chapter"
          value={chapter}
          onChange={handleChapterChange}
          className="w-full h-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </td>
      <td className="p-2 border border-gray-300 py-5">
        <input
          type="text"
          placeholder="Enter page"
          value={page}
          onChange={handlePageChange}
          className="w-full h-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </td>
      <td className="p-2 border border-gray-300 py-5">
        <input
          type="text"
          placeholder="Enter ministry"
          value={ministry}
          onChange={handleMinistryChange}
          className="w-full h-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </td>
      <td className="p-2 border border-gray-300 py-5">
        <input
          type="text"
          placeholder="Enter department"
          value={department}
          onChange={handleDepartmentChange}
          className="w-full h-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </td>
      <td className="p-2 border border-gray-300 py-5">
        <input
          type="text"
          placeholder="Enter budget_plan_type"
          value={budget_plan_type}
          onChange={handleBudget_plan_typeChange}
          className="w-full h-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </td>
      <td className="p-2 border border-gray-300 py-5">
        <input
          type="text"
          placeholder="Enter budget_plan_name"
          value={budget_plan_name}
          onChange={handleBudget_plan_nameChange}
          className="w-full h-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </td>
      <td className="p-2 border border-gray-300 py-5">
        <input
          type="text"
          placeholder="Enter budget_plan_amount"
          value={budget_plan_amount}
          onChange={handleBudget_plan_amountChange}
          className="w-full h-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </td>
      <td className="p-2 border border-gray-300 py-5">
        <input
          type="text"
          placeholder="Enter off_budget_money"
          value={off_budget_money}
          onChange={handleOff_budget_moneyChange}
          className="w-full h-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </td>
      <td className="p-2 border border-gray-300 py-5">
        <input
          type="text"
          placeholder="Enter off_budget_money_amount"
          value={off_budget_money_amount}
          onChange={handleOff_budget_money_amountChange}
          className="w-full h-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </td>
      <td className="p-2 border border-gray-300 py-5">-</td>
      <td className="p-2 border border-gray-300 py-5">-</td>
      <td className="p-2 border border-gray-300 py-5">-</td>
      <td className="p-2 border border-gray-300 py-5">-</td>
      <td className="p-2 border border-gray-300 py-5">-</td>
      <td className="p-2 border border-gray-300 py-5">-</td>
      <td className="p-2 border border-gray-300 py-5">-</td>
      <td className="p-2 border border-gray-300 py-5">-</td>
      <td className="p-2 border border-gray-300 py-5">-</td>
      <td className="p-2 border border-gray-300 py-5">-</td>
      <td className="p-2 border border-gray-300 py-5">-</td>
      <td className="p-2 border border-gray-300 py-5">-</td>
      <td className="p-2 border border-gray-300 py-5">-</td>
      <td className="p-2 border border-gray-300 py-5">
        <input
          type="text"
          placeholder="Enter category_page"
          value={category_page}
          onChange={handleCategory_pageChange}
          className="w-full h-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </td>
      <td className="p-2 border border-gray-300 py-5">-</td>
    </tr>
  );
}

export default TdInput;
