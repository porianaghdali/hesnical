"use client";
import React from "react"; // وارد کردن React به صورت دستی
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import Sidebar from "../../components/Sidebar";
// import Navbar from "../../components/Navbar";
import { useState } from "react";
import Header from "@/components/dashboard/Header/Header";
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import SidebarProvider from "@/components/dashboard/SidebarProvider";
import SidebarOverlay from "@/components/dashboard/Sidebar/SidebarOverlay";
import SidebarNav from "@/components/dashboard/Sidebar/SidebarNav";
export default function DashboardLayout({ children }) {
  const token = Cookies.get("access_token");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [ShowMenu, setshowMenu] = useState(false);
  const [UserData, setuserData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [router, token]);
  if (!token) {
    return null; // می‌توانید لودینگ یا پیام ریدایرکت قرار دهید
  }

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        apiUrl + "/api/identity/account/GetAccountDetail",

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log(response, "Authentication failed");
        setuserData(response.data);

        // هدایت به صفحه داشبورد
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  useEffect(() => {
    handleLogin();
  }, []);
  return (
    // <div className="flex h-screen bg-gray-100">
    //   <div className="hidden lg:block">
    //     <Sidebar />
    //   </div>

    //   <div className="flex-1 flex flex-col">
    //     <div className="bg-gray-400 text-white p-4 grid grid-cols-12 top-0 left-0 w-full z-10">
    //       <div
    //         className={`lg:hidden absolute top-0 right-0  z-40 transition-all duration-300 ease-out bg-gray-3000 ${
    //           ShowMenu ? " translate-x-0" : "translate-x-64"
    //         }`}
    //       >
    //         <Sidebar />
    //       </div>

    //       <button
    //         // onClick={() => {
    //         //   setshowMenu(!ShowMenu);
    //         // }}
    //         onClick={handleLogin}
    //         className="lg:hidden col-span-1"
    //       >
    //         show
    //       </button>

    //       <div className="col-span-11 lg:col-span-12">
    //         <Navbar />
    //       </div>
    //     </div>

    //     <main className="flex-1 overflow-auto p-4 ">
    //       {" "}
    //       {React.cloneElement(children, { UserData })}
    //     </main>
    //   </div>
    // </div>
    <SidebarProvider>
      <SidebarOverlay />
      <Sidebar>
        <SidebarNav />
      </Sidebar>

      <div className="wrapper d-flex flex-column min-vh-100">
        <Header />

        <div className="body flex-grow-1 px-sm-2 mb-4">
          <Container fluid="lg">{children}</Container>
        </div>

        {/* <Footer /> */}
      </div>

      <SidebarOverlay />
    </SidebarProvider>
  );
}
