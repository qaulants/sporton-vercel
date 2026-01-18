"use client"

import TransactionTable from "../../components/transactions/transactions-table";
import { useState } from "react";
import TransactionModal from "../../components/transactions/transactions-modal";

const Transaction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleViewDetails = () => {
    setIsOpen(true);
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Transactions</h1>
          <p className="opacity-50">Verify incoming payments and manage orders.</p>
        </div>
        
      </div>
      <TransactionTable onViewDetails={handleViewDetails} />
      <TransactionModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Transaction;