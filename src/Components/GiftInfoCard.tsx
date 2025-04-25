import React from "react";
import toast from "react-hot-toast";
import { BiCopy } from "react-icons/bi";
import { CgCreditCard } from "react-icons/cg";

interface GiftInfoCardProps {
  bank: string;
  accountNumber: string;
  name: string;
}

const GiftInfoCard: React.FC<GiftInfoCardProps> = ({
  bank,
  accountNumber,
  name,
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    toast.success("No. Rek Berhasil Disalin");
  };

  return (
    <div
      className="bg-[#DBAB82] hover:bg-[#DBAB82] rounded-xl p-5 w-full max-w-md shadow-md hover:shadow-xl"
      data-aos="fade-up"
      data-aos-once={true}
    >
      <div className="mb-4">
        <div className="w-1/2 ml-auto border-b border-black pb-2 text-right">
          <span className="text-lg font-semibold">{bank}</span>
        </div>
        <div className="flex justify-end mt-1 text-[#8A5529]">
          <CgCreditCard size={30} />
        </div>
      </div>

      <p className="text-sm">No. Rekening</p>
      <p className="text-xl font-bold my-1">{accountNumber}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 bg-[#8A5529] text-white px-3 py-1 rounded-md"
      >
        <BiCopy size={16} /> Salin
      </button>
      <p className="text-sm text-right mt-4">
        an <span className="font-medium">{name}</span>
      </p>
    </div>
  );
};

export default GiftInfoCard;
