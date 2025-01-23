// "use client";
// import BarChart from "@/utiles/charts/barChart";
// import DoughnutChart from "@/utiles/charts/doughnutChart";
// import LineChart from "@/utiles/charts/lineChart";
// import PieChart from "@/utiles/charts/pieChart";
// import PolarAreaChart from "@/utiles/charts/polarAreaChart";
// import RadarChart from "@/utiles/charts/radarChart";
// import GaugeChart from "@/utiles/charts/gaugeChart";
// import PersianCalendar from "@/utiles/calendar";
// import Card from "@/utiles/card";
import Dashboard from "./dashboard";

const Page = () => {
  // const data = {
  //   labels: ["January", "February", "March", "April", "May", "June"],
  //   datasets: [
  //     {
  //       label: "Sales 2025 ($)",
  //       data: [70, 70, 70, 70, 70, 60],
  //       backgroundColor: "rgba(54, 162, 235, .1)",
  //       borderColor: "rgba(54, 162, 235, 1)",
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: "top",
  //     },
  //     title: {
  //       display: true,
  //       text: "Monthly Sales",
  //     },
  //   },
  // };

  return (
    <div>
    <Dashboard/>
    </div>
  );
};

export default Page;
