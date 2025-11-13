
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Brian Ochieng - Portfolio
        </title>
        <meta name="description" 
        content="This is Brian Ochieng's Webpage portfolio, A python developer and a cybersecurity Engineer" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
