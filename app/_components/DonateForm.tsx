"use client";
import { type Goals } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const DonateForm = ({ goal }: { goal: Goals }) => {
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleEvent = async () => {
    setLoading(true);
    const priceNumber = Number(price);
    if (!priceNumber) {
      setError("Please enter a valid amount.");
    } else {
      setError("");
      const res = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({
          price: priceNumber * 100,
          goal,
        }),
      });
      console.log(res);
      const url = await res.json();
      if (!url.startsWith('https://checkout.stripe.com')) {
        setError("Minimum donation is above 2 RON.");
        setLoading(false);
        return;
      }

      router.push(url);
    }
    setLoading(false);
  };

  return (
    <div className="text-center">
      <h3 className="text-3xl font-semibold sm:text-4xl mb-6">Select donation amount</h3>
      <input
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        type="text"
        className="outline-none border border-blue-500 px-5 py-1 shadow-sm rounded-full w-24"
      />
      <span className="font-bold ml-2 text-blue-500">RON</span>
      {error && <p className="pt-1 text-red-600">{error}</p>}
      <button
        disabled={loading}
        onClick={() => handleEvent()}
        className="block border bg-blue-500 text-white rounded-lg px-12 mx-auto w-5/6 py-3 font-bold mt-6 hover:scale-110 transition duration-300 active:bg-blue-300"
      >
        {loading === false ? "Donate now" : "Donating..."}
      </button>
    </div>
  );
};

export default DonateForm;
