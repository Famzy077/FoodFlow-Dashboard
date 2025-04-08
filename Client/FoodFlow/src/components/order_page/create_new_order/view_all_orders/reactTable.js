import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
// import data from "../../../../../../utils/reactTableData"
import tablestyles from "../../../styles/tablestyles.module.css"
// REACT TABLE FOR THE "ALL ORDERS"
export default function ReactTable() {

  const columns = [
    {
      name: 'Order Id',
      selector: row => row.orderId,
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.date,
      sortable: true,
    },
    {
      name: 'Customer Name',
      selector: row => row.customerName,
      sortable: true,
    },
    {
        name: 'Location',
        selector: row => row.location,
        sortable: true,
    },
    {
        name: 'Amount',
        selector: row => row.amount,
        sortable: true,
    },
    {
        name: 'Status Order',
        selector: row => row.statusOrder,
        sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      orderId: 2033,
      date: "12 sept, 20204",
      customerName: 'Alvin Frank',
      location: "Nnamdi Azikiwe Uni",
      amount: `1,000`,
      statusOrder: "pending",
    },
    {
        id: 2,
        orderId: 8892,
        date: "10 oct, 20204",
        customerName: 'spiderman verse',
        location: "spider verse",
        amount: 300,
        statusOrder: "Delivered",
    },
    {
        id: 3,
        orderId: 9820,
        date: "10 july, 2034",
        customerName: 'green lantern',
        location: "interplanetary",
        amount: 400,
        statusOrder: "pending",
    },
    {
        id: 4,
        orderId: 3392,
        date: "15 march, 2039",
        customerName: 'Batman',
        location: "Bat cave",
        amount: 500,
        statusOrder: "processing",
    },
    {
        id: 5,
        orderId: 9283,
        date: "10 april, 2050",
        customerName: 'wonder woman',
        location: "Amazon land",
        amount: 950,
        statusOrder: "Delivered",
    },
    {
        id: 6,
        orderId: 7728,
        date: "24 july, 2020",
        customerName: 'Quicksilver',
        location: "New York City",
        amount: `1,000`,
        statusOrder: "processing",
    },
    {
        id: 7,
        orderId: 2238,
        date: "10 june, 2023",
        customerName: 'Sandman',
        location: "Bar beach",
        amount: 100,
        statusOrder: "processing",
    },
    {
        id: 8,
        orderId: 2773,
        date: "10 feb, 2027",
        customerName: 'Elon Musk',
        location: "twt head-quarters",
        amount: `1,000,000`,
        statusOrder: "pending",
    },
    {
        id: 9,
        orderId: 7722,
        date: "10 july, 2034",
        customerName: 'Yellow Flash',
        location: "New York City",
        amount: `1,000`,
        statusOrder: "Delivered",
    },
    {
        id: 10,
        orderId: 2773,
        date: "1 oct, 3000",
        customerName: 'The Flash',
        location: "Mars",
        amount: `3,000,000`,
        statusOrder: "Delivered",
    },
  ];
   
  const [domLoaded , setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true)
  }, []);


  return (
    <div >
        {domLoaded && 
        <DataTable columns={columns} data={data} pagination={true} paginationPerPage={5} paginationRowsPerPageOptions={[ 5 , 10 , 15 ]} className={tablestyles.mytable}
         />
        }
    </div>
  )
}