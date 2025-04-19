import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { getRsvp, postRsvp } from "../Hooks/Rsvp";

const Rsvp = () => {
  const [form, setForm] = useState({
    nama: "",
    alamat: "",
    kehadiran: true,
    ucapan: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const [ucapanList, setUcapanList] = useState<any[]>([]);

  useEffect(() => {
    getRsvp().then((response) => {
      setUcapanList(
        Array.isArray(response) ? response.map((item: any) => ({
          nama: item.name,
          alamat: item.address,
          kehadiran: item.present,
          pesan: item.message,
        })) : []
      );
    });
  }
    , []);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    postRsvp(
      {
        name: form.nama,
        present: form.kehadiran,
        phone: form.alamat,
        message: form.ucapan
      }
    ).then(() => {
      setForm({
        nama: "",
        alamat: "",
        kehadiran: true,
        ucapan: "",
      });

      getRsvp().then((response) => {
        setUcapanList(
          Array.isArray(response) ? response.map((item: any) => ({
            nama: item.name,
            alamat: item.address,
            kehadiran: item.present,
            pesan: item.message,
          })) : []
        );
      });
    });
  };

  return (
    <>
      <Header
        mainTitle="REPLY TO THE HEADLINE"
        subtitle="RSVP & LET LOVE KNOW YOU'RE COMING"
      />

      <div className="font-serif text-center">
        <h2 className="text-xl font-bold mx-5 mt-3 border-y py-3 mb-4 tracking-wider">
          RSVP & GREETING
        </h2>
        <p className="max-w-md mx-auto text-sm text-neutral-700 px-4 mb-6">
          Konfirmasi kehadiranmu dan kirimkan ucapan serta doa terbaik untuk
          kedua mempelai di hari istimewa mereka melalui kolom di bawah ini
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto font-serif px-4 space-y-4"
      >
        <input
          type="text"
          name="nama"
          placeholder="Nama"
          value={form.nama}
          onChange={handleChange}
          className="w-full rounded-md p-2 bg-[#DBAB82]"
        />
        <input
          type="text"
          name="alamat"
          placeholder="Alamat"
          value={form.alamat}
          onChange={handleChange}
          className="w-full rounded-md p-2 bg-[#DBAB82]"
        />
        <div className="text-left space-y-1 text-sm">
          <p>Konfirmasi:</p>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="kehadiran"
              value="hadir"
              checked={form.kehadiran === "hadir"}
              onChange={handleChange}
              className="accent-[rgb(121,85,72)]"
            />
            <span>Iya, Saya akan datang</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="kehadiran"
              value="tidak"
              checked={form.kehadiran === "tidak"}
              onChange={handleChange}
              className="accent-[rgb(121,85,72)]"
            />
            <span>Maaf, Saya tidak bisa datang</span>
          </label>
        </div>

        <textarea
          name="ucapan"
          placeholder="Ucapan"
          value={form.ucapan}
          onChange={handleChange}
          className="w-full rounded-md p-2 h-24 bg-[#DBAB82]"
        />
        <button
          type="submit"
          className="w-full bg-orange-900 text-white py-2 rounded-full"
        >
          Kirim Ucapan
        </button>
      </form>

      <div className="border-t mt-8 pb-20 max-w-md mx-auto px-4">
        {ucapanList.map((item, index) => (

          <div key={index} className="bg-orange-200 p-4 my-2 rounded-md">
            <div className="flex items-center space-x-2 font-semibold">
              <div className="bg-orange-300 text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full">
                {item.nama.charAt(0).toUpperCase()}
              </div>
              <span>{item.nama}</span>
            </div>
            <p className="mt-2">{item.pesan}</p>
          </div>
        ))}
      </div>

    </>
  );
};

export default Rsvp;
