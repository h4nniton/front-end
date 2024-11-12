import React from 'react';
import ApexCharts from 'react-apexcharts';

const grafico = () => {
  // Defina a série de dados, como no seu código original
  const series = {
    monthDataSeries1: {
      prices: [100, 120, 130, 125, 140, 160], // Exemplo de dados de preços
      dates: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01'], // Exemplo de datas
    },
  };

  // Configurações do gráfico
  const options = {
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'Fundamental Analysis of Stocks',
      align: 'left',
    },
    subtitle: {
      text: 'Price Movements',
      align: 'left',
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: 'left',
    },
  };

  // Definir os dados de série
  const chartData = [
    {
      name: 'STOCK ABC',
      data: series.monthDataSeries1.prices,
    },
  ];

  return (
    <div id="chart">
      <ApexCharts options={options} series={chartData} type="area" height={350} />
    </div>
  );
};

export default grafico;
