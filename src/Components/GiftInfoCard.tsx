import React from "react";
import { BiCopy } from "react-icons/bi";
import { CgCreditCard } from "react-icons/cg";


interface GiftInfoCardProps {
  bank: string;
  accountNumber: string;
  name: string;
}

const GiftInfoCard: React.FC<GiftInfoCardProps> = ({ bank, accountNumber, name }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    alert("Nomor rekening disalin!");
  };

  return (
    <div className="bg-[#DBAB82] rounded-xl p-5 w-full max-w-md shadow-md">
      <div className="flex justify-between items-center border-b border-black pb-2 mb-4">
        <span className="text-lg font-semibold">{bank}</span>
        <CgCreditCard size={20}/>
      </div>
      <p className="text-sm">No. Rekening</p>
      <p className="text-xl font-bold my-1">{accountNumber}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 bg-[#8A5529] text-white px-3 py-1 rounded-md"
      >
        <BiCopy size={16} /> Salin
      </button>
      <p className="text-sm text-right mt-4">an <span className="font-medium">{name}</span></p>
    </div>
  );
};

export default GiftInfoCard;
