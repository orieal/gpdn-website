import { Urbanist,Poppins } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
  variable: "--font-urbanist",
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "GPDN | Connect. Learn. Lead in Palliative Care",
  description: "GPDN – Global Palliative Doctors Network – is a collaborative platform for palliative care doctors worldwide. Share insights, access expert resources, and engage in discussions to enhance compassionate care for individuals with serious illnesses across the globe.",
  keywords:[
    "connect palliative doctors",
    "doctor network",
    "global health",
    "global medical forum",
    "global palliative doctors",
    "global palliative units",
    "Global Palliative Doctors Network",
    "GPDN",
    "healthcare innovation",
    "hospice care",
    "international palliative care network",
    "medical collaboration",
    "palliative care community",
    "palliative care discussion forum",
    "palliative care doctors",
    "palliative care education",
    "palliative care resources",
    "palliative doctors directory",
    "palliative medicine",
    "palliative research",
    "palliative training",
    "palliative units directory",
    "serious illness care"
  ],
  icons: {
    icon: "/gpdn-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Orieal Technologies LLP" />
        <meta name="language" content="en" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/gpdn-icon.png" type="image/png" />      </head>
      <body className={`${urbanist.className} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
