import { useState } from 'react';
import './App.css';

function App() {

  
  const [invoices, setInvoices] = useState([])
  const [customerName, setCustomerName] = useState("")
  const [amount, setAmount] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [item, setItem] = useState("")

  const handleAddInvoice = (e) =>{
    e.preventDefault()
  if(customerName && amount && invoiceNumber && item){
    const newInvoice = {
      customerName,
      amount,
      invoiceNumber,
      item

    };
    setInvoices([...invoices, newInvoice]);
    setCustomerName("");
    setAmount("")
    setInvoiceNumber("");
    setItem("");
  }
  }

  return (
    <div className="App">
      <h1>Create Invoice</h1>

      <form className='form' onSubmit={handleAddInvoice}>

        <div>
          <label>Customer Name: </label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter customer name"
            required
          />
        </div>
        <div>
          <label>Amount: </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <div>
          <label>Item: </label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Enter item"
            required
          />
        </div>
        <div>
          <label>Invoice Number: </label>
          <input type="number" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} placeholder="Enter invoice number" required />
        </div>
       
        <button type="submit">Add Invoice</button>
      </form>
     
        <ul>
          {invoices.map((invoice, index) => (
            <li key={index}>
              <b>Customer:</b> {invoice.customerName} 
              <b> Amount:</b> {invoice.amount}  
              <b> Invoice Number:</b> {invoice.invoiceNumber}
              <b> Item:</b> {invoice.item}
            </li>
          ))}
        </ul>
      <button onClick={() => setInvoices([...invoices, { customerName, amount, invoiceNumber, item }])}>Update Invoice</button> 
      <button onClick={() => setInvoices([...invoices.slice(0, -1)])}>Delete Invoice</button>

    </div>
  )
}

export default App;
