import { useState } from "react";
import Header from "../Components/Header";
import { useFetchMessages, useSendMessage } from "../Hooks/Rsvp";
import toast from "react-hot-toast";

interface LocalMessageItem {
  name: string;
  message: string;
  present: boolean;
  createdAt: string
}

const Rsvp = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    present: true,
    message: "",
  });

  const { sendMessage, loading } = useSendMessage();
  const { message: rawMessages, refetch } = useFetchMessages();
  
  const ucapanList: LocalMessageItem[] = rawMessages.map((item: any) => ({
    ...item,
    createdAt: item.createdAt || new Date().toISOString(),
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      phone: form.phone,
      message: form.message,
      present: form.present === true,
    };

    const res = await sendMessage(payload);
    if (res?.success) {
      setForm({
        name: "",
        phone: "",
        present: true,
        message: "",
      });

      toast.success("Pesan Berhasil Dikirim", {
      });

      refetch();
    } else {
      toast.error("Gagal Mengirim Pesan", {
      })
    }
  };

  return (
    <>
      <Header
        mainTitle="REPLY TO THE HEADLINE"
        subtitle="RSVP & LET LOVE KNOW YOU'RE COMING"
      />

      <div className="font-serif text-center">
        <h2 className="text-xl font-bold mx-5 mt-3 border-y py-3 mb-4 tracking-wider" data-aos-once="true" data-aos="fade-down">
          RSVP & GREETING
        </h2>
        <p className="max-w-md mx-auto text-sm text-neutral-700 px-4 mb-6" data-aos-once="true" data-aos="fade-down">
          Konfirmasi kehadiranmu dan kirimkan ucapan serta doa terbaik untuk
          kedua mempelai di hari istimewa mereka melalui kolom di bawah ini
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto font-serif px-4 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nama"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-md p-2 bg-[#DBAB82]"
          data-aos-once="true" data-aos="fade-up"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Alamat / Kontak"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-md p-2 bg-[#DBAB82]"
          data-aos-once="true" data-aos="fade-up"
          required
        />

        <div className="text-left space-y-1 text-sm" data-aos-once="true" data-aos="fade-up">
          <p>Konfirmasi:</p>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="present"
              value="hadir"
              checked={form.present === true}
              onChange={handleChange}
              className="accent-[rgb(121,85,72)]"
            />
            <span>Iya, Saya akan datang</span>
          </label>
          <label className="flex items-center space-x-2" data-aos-once="true" data-aos="fade-up">
            <input
              type="radio"
              name="present"
              value="tidak"
              checked={form.present === false}
              onChange={handleChange}
              className="accent-[rgb(121,85,72)]"
            />
            <span>Maaf, Saya tidak bisa datang</span>
          </label>
        </div>

        <textarea
          name="message"
          placeholder="Ucapan"
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-md p-2 h-24 bg-[#DBAB82]"
          data-aos-once="true" data-aos="fade-up"
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-900 text-white py-2 rounded-full"
          data-aos-once="true" data-aos="fade-up"
          disabled={loading}
        >
          {loading ? "Mengirim..." : "Kirim Ucapan"}
        </button>
      </form>


      <div className="border-t mt-8 pb-20 max-w-md mx-auto px-4" data-aos-once="true" data-aos="fade-up">
        {Array.isArray(ucapanList) && ucapanList.length > 0 ? (
          ucapanList.map((item: LocalMessageItem, index: number) => (
            <div key={index} className="bg-orange-200 p-4 my-2 rounded-md">
              <div className="flex items-center space-x-2 font-semibold">
              <div className="bg-orange-300 text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full">
                {item.name.charAt(0).toUpperCase()}
              </div>
              <span>{item.name}</span>
              <span className="text-xs text-gray-600">
                {item.present ? "(Hadir)" : "(Tidak Hadir)"}
              </span>
              </div>
              <p className="mt-2">{item.message}</p>
              <div className="text-right text-xs text-gray-500">
              {new Date(item.createdAt || "").toLocaleString("id-ID")}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 my-4 pb-2" data-aos-once="true" data-aos="fade-down">
            Jadilah yang pertama mengucapkan.
          </div>
        )}
      </div>
    </>
  );
};

export default Rsvp;
