"use client";
import CustomButton from "@/components/CustomButton";

export default function me() {
  return (
    <div>
      <h1>Soy felipe</h1>
      <CustomButton
        text="Click me "
        onClick={() => console.log("me hiciste click pedrito")}
      />
    </div>
  );
}
