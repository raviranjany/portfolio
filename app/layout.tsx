import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Raviranjan Kumar | MERN Stack Developer",
  description:
    "Portfolio of Raviranjan Kumar, a MERN Stack Developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
};

const themeScript = `
  (function () {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme");

      const theme =
        savedTheme === "light" || savedTheme === "dark"
          ? savedTheme
          : "dark";

      document.documentElement.setAttribute(
        "data-theme",
        theme
      );
    } catch (error) {
      document.documentElement.setAttribute(
        "data-theme",
        "dark"
      );
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>

      <body>
        <ThemeProvider>
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


// import type { Metadata } from "next";
// import "./globals.css";
// import { ThemeProvider } from "@/components/ThemeProvider";

// export const metadata: Metadata = {
//   title: "Raviranjan Kumar | MERN Stack Developer",
//   description:
//     "Portfolio of Raviranjan Kumar, a MERN Stack Developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
// };

// const themeScript = `
//   (function () {
//     try {
//       const savedTheme = localStorage.getItem("portfolio-theme");

//       const theme =
//         savedTheme === "light" || savedTheme === "dark"
//           ? savedTheme
//           : "dark";

//       document.documentElement.setAttribute(
//         "data-theme",
//         theme
//       );
//     } catch (error) {
//       document.documentElement.setAttribute(
//         "data-theme",
//         "dark"
//       );
//     }
//   })();
// `;

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <script
//           dangerouslySetInnerHTML={{
//             __html: themeScript,
//           }}
//         />
//       </head>

//       <body>
//         <ThemeProvider>{children}</ThemeProvider>
//       </body>
//     </html>
//   );
// }

