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

      // Organiza os dados do gráfico com os valores de quantidade de projetos
      setChartData({
        series: [
          {
            name: 'Quantidade',
            data: [
              data.freelancers && data.freelancers.length > 0
                ? data.freelancers[0].quantidade_projetos :  0, // Projetos totais
              data.freelancers && data.freelancers.length > 0
                ? data.freelancers[0].quantidade_andamento :  0,  // Projetos em andamento
              data.freelancers && data.freelancers.length > 0
                ? data.freelancers[0].quantidade_finalizados :  0,  // Projetos finalizados
            ],
          },
        ],
        categories: ['Projetos totais', 'Em Andamento', 'Finalizados'], // Labels das barras
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
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
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
      type: 'gradient', // Define o tipo de preenchimento para gradiente
      gradient: {
        type: 'linear', // Define o tipo como linear
        shadeIntensity: 10, // Intensidade da cor de sombra
        gradientToColors: ['#011F4B'], // Cor para o final do gradiente
        inverseColors: false, // Inverte a direção do gradiente
        opacityFrom: 10, // Opacidade inicial
        stops: [0, 100], // Onde começa e termina o gradiente
      },
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
