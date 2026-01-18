import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal"
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";

type TBankModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BankInfoModal = ({isOpen, onClose}: TBankModalProps) => {
  return ( 
    <Modal isOpen={isOpen} onClose={onClose} title="Add Bank Account">
      <div className="flex flex-col gap-6">
        <div>
          <div className="input-group-admin mb-2">
            <label htmlFor="bankName">Bank Name</label>
            <input type="text" id="bankName" name="bankName" placeholder="e. g. Mandiri, BCA, BRI" />
          </div>
          <div className="input-group-admin mb-2">
            <label htmlFor="accountNumber">Account Number</label>
            <input type="text" id="accountNumber" name="accountNumber" placeholder="123124344234234" />
          </div>
          <div className="input-group-admin mb-2">
            <label htmlFor="accountHolder">Account Holder</label>
            <input type="text" id="accountHolder" name="accountHolder" placeholder="Holder Name as registered on the account" />
          </div>
        </div>
       
        <Button className="ml-auto mt-3 rounded-lg">Add Bank Account</Button>
      </div>
    </Modal>
  )
};

export default BankInfoModal;