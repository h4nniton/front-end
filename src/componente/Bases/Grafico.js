import React from 'react';
import ApexCharts from 'react-apexcharts';

const BarChartComponent = () => {
  const options = {
    colors: ['#065EB1', '#03396C', '#011F4B'],
    series: [
      {
        name: 'finalizados',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'em andamento',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'em negociacao',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '65%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: 'Trabalhos',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return  val + " trabalhos";
        },
      },
    },
  };

  return (
    <div id="chart">
      <ApexCharts options={options} series={options.series} type="bar" height={350} />
    </div>
  );
};

export default BarChartComponent;
