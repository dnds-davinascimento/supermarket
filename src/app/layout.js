import { Inter } from "next/font/google";
import "./globals.css";
import Menu_Toogle from "../componets/menu/menu";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My marketplace",
  description: "A marketplace for buying and selling goods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Menu_Toogle />
        {children}
        
        </body>
    </html>
  );
}
