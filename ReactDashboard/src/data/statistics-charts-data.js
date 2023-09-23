import { chartsConfig } from "@/configs";

const websiteViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Views",
      data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#fff",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
};

const websiteDataChart = {
  type: "area",
  height: 220,
  series: [
    {
      name: "FY21_22",
      data: [50, 20, 10, 22, 50, 10, 40],
    },

    {
      name: "FY22_23",
      data: [40, 10, 50, 24, 10, 20, 50],
    },
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  options: {
    ...chartsConfig,
    colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
    stroke: {
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
};
const optionsData = {
  type: "line",
  height: 400,
  series: [
    {
      name: "TEAM A",
      type: "area",
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
    },
    {
      name: "TEAM B",
      type: "line",
      data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#2E93fA", "#66DA26"],
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "solid",
      opacity: [0.35, 1],
    },
    labels: [
      "Dec 01",
      "Dec 02",
      "Dec 03",
      "Dec 04",
      "Dec 05",
      "Dec 06",
      "Dec 07",
      "Dec 08",
      "Dec 09",
      "Dec 10",
      "Dec 11",
    ],
    markers: {
      size: 0,
    },
    yaxis: [
      {
        title: {
          text: "Series A",
        },
      },
      {
        opposite: true,
        title: {
          text: "Series B",
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  },
};

const production = {
  type: "bar",
  height: 450,
  series: [
    {
      name: "Uttar Pradesh",
      data: [9.83, 2, 10.83, 1.5, 13.7, 1.7, 36.61, 48, 34, 55],
    },
    {
      name: "Punjab",
      data: [3, 24.39, 3.34, 4, 5.76, 21, 67, 5.67, 39.5, 70.67],
    },
    {
      name: "West Bengal",
      data: [6, 7.56, 4.5, 7.6, 15.6, 17.4, 39.8, 14.67, 30.56, 70.8],
    },
    {
      name: "Andhra Pradesh",
      data: [9, 7, 5, 8, 6, 9, 4],
    },
    {
      name: "Orissa",
      data: [25, 12, 19, 32, 25, 24, 10],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Arhar",
        "Cotton",
        "Gram",
        "GroundNut",
        "Maize",
        "Moong",
        "Paddy",
        "Sugarcane",
        "Wheat",
        "Rice",
      ],
    },
    yaxis: {
      ...chartsConfig.yaxis,
      tickAmount: 20, // Divide the y-axis into 10 ticks
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    // title: {
    //   text: "100% Stacked Bar",
    // },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 10,
    },
  },
};

const dailySalesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#fff"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

const completedTasksChart = {
  ...dailySalesChart,
  series: [
    {
      name: "Tasks",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
  ],
};

export const statisticsChartsData = [
  {
    color: "blue",
    title: "Agriculture Imports",
    description: "Last Campaign Performance",
    footer: "campaign sent 2 days ago",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "Agriculture Imports",
    description: "Last Campaign Performance",
    footer: "campaign sent 2 days ago",
    chart: websiteDataChart,
  },
  {
    color: "white",
    title: "Production Statistics",
    description: "Last Campaign Performance",
    footer: "Last Year performance",
    chart: production,
  },
  {
    color: "pink",
    title: "Daily Sales",
    description: "15% increase in today sales",
    footer: "updated 4 min ago",
    chart: dailySalesChart,
  },
  {
    color: "pink",
    title: "Daily Sales",
    description: "15% increase in today sales",
    footer: "updated 4 min ago",
    chart: optionsData,
  },
  {
    color: "green",
    title: "Completed Tasks",
    description: "Last Campaign Performance",
    footer: "just updated",
    chart: completedTasksChart,
  },
];

export default statisticsChartsData;
