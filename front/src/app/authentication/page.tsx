"use client";
import Login from "@/components/Login";
import Register from "@/components/Register";

function Authentication() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <div className="flex items-center justify-center w-full max-w-4xl space-x-10">
        <Register />
        <div
          className="bg-gray-400 shadow-xl"
          style={{
            height: "500px",
            width: "4px",

            borderRadius: "2px",
          }}
        ></div>
        <Login />
      </div>
    </div>
  );
}

export default Authentication;
