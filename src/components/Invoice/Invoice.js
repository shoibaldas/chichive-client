import React, { useEffect, useState } from "react";

const Invoice = ({ product }) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="container mx-auto p-4 sm:p-8 bg-white text-gray-800">
      <div className="flex flex-col sm:flex-row justify-between items-center border-b-2 pb-4 mb-8">
        <h1 className="text-2xl font-bold">Booking Invoice</h1>
        <p className="text-gray-600">Invoice #001</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mb-8">
        <div className="w-full sm:w-1/3">
          <h2 className="text-lg font-bold mb-4">Booking Date:</h2>
          <p className="text-gray-600">{currentDate}</p>
        </div>
      </div>
      <table className="w-full mb-8">
        <thead>
          <tr>
            <th className="text-left font-bold">Item</th>
            <th className="text-right font-bold">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-4 border-t-2">
              <div className="flex items-center">
                <img
                  src={product.picture}
                  alt="Product"
                  className="h-20 w-20 mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">{product.title}</h3>
                  <p className="text-gray-600">(+include VAT.)</p>
                </div>
              </div>
            </td>
            <td className="text-right py-4 border-t-2">{product.price}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-col sm:flex-row justify-end">
        <div className="w-full sm:w-1/3">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="text-right py-2">Subtotal:</td>
                <td className="text-right py-2">{product.price}</td>
              </tr>
              <tr>
                <td className="text-right py-2">Shipping:</td>
                <td className="text-right py-2">$00.00</td>
              </tr>
              <tr>
                <td className="text-right py-2">Total:</td>
                <td className="text-right py-2 font-bold">{product.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
