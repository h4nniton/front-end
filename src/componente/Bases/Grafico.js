import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import axios from 'axios'; 

const BarChartComponent = () => {
  const [chartData, setChartData] = useState({
    series: [],
    categories: [],
  });

  const fetchChartData = async () => {
    try {
      // Faça a chamada para sua API
      const response = await axios.get('http://localhost:8080/v1/jinni/freelancers'); // Substitua pela sua URL
      const data = response.data;

      // Transforme os dados recebidos no formato esperado pelo gráfico
      setChartData({
        series: [
          {
            name: "finalizados",
            data: data.finalizados, // Exemplo: [44, 55, 57, 56, 61, ...]
          },
          {
            name: "em andamento",
            data: data.emAndamento, // Exemplo: [76, 85, 101, ...]
          },
          {
            name: "em negociacao",
            data: data.emNegociacao, // Exemplo: [35, 41, 36, ...]
          },
        ],
        categories: data.categories, // Exemplo: ["Feb", "Mar", "Apr", ...]
      });
    } catch (error) {
      console.error("Erro ao buscar os dados do gráfico:", error);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  const options = {
    colors: ['#065EB1', '#03396C', '#011F4B'],
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
      categories: chartData.categories, // Atualizado dinamicamente
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
          return val + " trabalhos";
        },
      },
    },
  };

  return (
    <div id="chart">
      {chartData.series.length > 0 ? (
        <ApexCharts options={options} series={chartData.series} type="bar" height={350} />
      ) : (
        <p>Carregando dados...</p> // Exibe enquanto os dados não chegam
      )}
    </div>
  );
};

export default BarChartComponent;
