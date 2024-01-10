import React from "react";

export default function Footer() {
  const footerStyle = {
    marginTop: "35rem", // Adjust the margin-top as needed
  };

  return (
    <footer className="mb-10 px-4 text-center text-gray-500" style={footerStyle}>
      <small className="mb-2 block text-xs">
        &copy; 2024 Ismalaj. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:<br /> </span> Built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, Vercel hosting. <br />
        ----Created partly through the use of online courses and documentation----
      </p>
      
    </footer>
  );
}
