import React from "react";

// TODO: Import React Bootstrap components

import { useState } from "react";
import ResultsModal from "./ResultsModal";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function Calculator() {

   // TODO: Add state variables and functions to change the variable

   const [isModalVisible, setIsModalVisible] = useState(false)

   const showModal = () => setIsModalVisible(true);
   const hideModal = () => setIsModalVisible(false);

   // Results to display
   const [results, setResults] = useState({
      monthlyPayment: "",
      totalPayment: "",
      totalInterest: ""
   });

   // Provide some default values
   const [inputs, setInputs] = useState({
      amount: 2000,
      apr: 5,
      years: 10
   });

   function handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({ ...values, [name]: value }));
   }

   function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
   }

   function handleSubmit(event) {
      event.preventDefault();

      if (isNumeric(inputs.amount) && isNumeric(inputs.apr) && isNumeric(inputs.years)) {
         // Calculate loan payments and interest
         const amount = parseFloat(inputs.amount);
         const interest = parseFloat(inputs.apr) / 1200;
         const numPayments = parseFloat(inputs.years) * 12;
         const x = Math.pow(1 + interest, numPayments);
         const monthly = (amount * x * interest) / (x - 1);

         // Currency formatter for displaying dollars
         const formatter = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
         });
         
         showModal();
         // Show results
         setResults({
            monthlyPayment: formatter.format(monthly),
            totalPayment: formatter.format(monthly * numPayments),
            totalInterest: formatter.format(monthly * numPayments - amount)
         });

         // TODO: Show ResultsModal
         
      }
   }

   return (
      <>
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
               <Form.Label>Amount $:</Form.Label>
               <Form.Control
                  type="text"
                  name="amount"
                  value={inputs.amount}
                  onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
               <Form.Label>APR %:</Form.Label>
               <Form.Control
                  type="text"
                  name="apr"
                  value={inputs.apr}
                  onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
               <Form.Label>Years:</Form.Label>
               <Form.Control
                  type="text"
                  name="years"
                  value={inputs.years}
                  onChange={handleChange} />
            </Form.Group>
            <Button type="submit">
               Calculate
            </Button>
         </Form>

         { /* TODO: Add additional props to ResultsModal */ }
         <ResultsModal
            monthlyPayment={results.monthlyPayment}
            totalPayment={results.totalPayment}
            totalInterest={results.totalInterest}
            show={isModalVisible}
            hide={hideModal} />
      </>
   );
}

export default Calculator;