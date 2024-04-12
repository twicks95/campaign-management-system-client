import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Campaign System Management",
//   description: "A campaign system management app powered by Mitra Mandiri Informatika",
// };

export default function RootLayout({ children }) {
  // const pathName = usePathname()
  return (
    <html lang="en">
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              /* here is your component tokens */
              siderBg: "red",
              // siderBg: "#ffffff !important",
            },
          },
        }}
      >
        <body className={`${inter.className} flex`}>
          <aside>
            <Sidebar />
          </aside>
          <main>
            <Header />
            {children}
          </main>
        </body>
      </ConfigProvider>
    </html>
  );
}
