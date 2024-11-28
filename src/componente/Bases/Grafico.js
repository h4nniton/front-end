import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApexCharts from 'react-apexcharts';
import axios from 'axios';

const BarChartComponent = () => {
  const [chartData, setChartData] = useState({
    series: [],
    categories: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const fetchChartData = async () => {
    setLoading(true);
    setError(null); // Reseta o estado de erro antes da requisição

    try {
      const response = await axios.get(`http://localhost:8080/v1/jinni/freelancer/${id}`);
      const data = response.data;

      // Certifique-se de que os dados estejam no formato esperado
      setChartData({
        series: [
          {
            name: "Finalizados",
            data: data.quantidade_finalizados || [], // Garantir array padrão
          },
          {
            name: "Em andamento",
            data: data.quantidade_andamento || [], // Garantir array padrão
          },
          {
            name: "Em negociação",
            data: data.quantidade_projetos || [], // Garantir array padrão
          },
        ],
        categories: data.categories || [], // Garantir array padrão
      });
    } catch (err) {
      console.error("Erro ao buscar os dados do gráfico:", err);
      setError("Não foi possível carregar os dados do gráfico.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, [id]); // Atualiza quando o ID muda

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
      {loading ? (
        <p>Carregando dados do gráfico...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ApexCharts options={options} series={chartData.series} type="bar" height={350} />
      )}
    </div>
  );
};

export default BarChartComponent;
