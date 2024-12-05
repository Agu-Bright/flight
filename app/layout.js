"use client";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <link rel="shortcut icon" href="/img/fav.png" /> */}
        <meta name="author" content="colorlib" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <title>Travel</title>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/linearicons.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/jquery-ui.css" />
        <link rel="stylesheet" href="css/nice-select.css" />
        <link rel="stylesheet" href="css/animate.min.css" />
        <link rel="stylesheet" href="css/owl.carousel.css" />
        <link rel="stylesheet" href="css/main.css" />
      </head>

      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
