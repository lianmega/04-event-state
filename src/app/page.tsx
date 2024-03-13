"use client";
import Tombol_1 from "@/component/button";

export default function Home() {
  function handleClick(){
    alert("Tombol telah ditekan!!");
  }

  function handleMouseOver(){
    alert("Eits, mau pencet tombol ya?");
  }
  return (
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
      onClick={handleClick}
      onMouseOver={handleMouseOver}
    >
        Ini tombol
    </button>
  );
}
