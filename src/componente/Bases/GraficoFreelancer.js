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
    setError(null);

    try {
      const response = await axios.get(`http://localhost:8080/v1/jinni/freelancer/${id}`);
      const data = response.data;

      // Organiza os dados do gráfico
      setChartData({
        series: [
          {
            name: 'Quantidade',
            data: [
              data.quantidade_finalizados || 0, // Projetos finalizados
              data.quantidade_andamento || 0,  // Projetos em andamento
              data.quantidade_projetos || 0,   // Projetos em negociação
            ],
          },
        ],
        categories: ['Finalizados', 'Em Andamento', 'Em Negociação'], // Labels das barras
      });
    } catch (err) {
      console.error('Erro ao buscar os dados do gráfico:', err);
      setError('Não foi possível carregar os dados do gráfico.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, [id]);

  const options = {
    colors: ['#065EB1'], // Cor única para as barras
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
          return val + ' trabalhos';
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
