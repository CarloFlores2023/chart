"use client";

import React, { useState, useEffect } from "react";
import Forms from "@/components/Forms";
import { evaluate } from "mathjs";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const HomePage = () => {
  const [chartData, setChartData] = useState(null);
  const [expression, setExpression] = useState("x"); // Expresión algebraica por defecto
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  useEffect(() => {
    const calcularData = () => {
      const labels = [];
      const datasets = [];

      // Función para evaluar la expresión ingresada
      const func = (x) => {
        try {
          return evaluate(expression.replace(/x/g, x));
        } catch (error) {
          return NaN; // Si hay un error en la evaluación, se mostrará como NaN en la gráfica. Eso quiere decir que no se mostrará nada en la grafica aparecera en blanco.
        }
      };

      for (let i = start; i <= end; i++) {
        labels.push(i);
      }

      // Calcula los datos para la expresión ingresada
      const data = labels.map((x) => func(x));

      datasets.push({
        label: `f(x) = ${expression}`,
        borderColor: "rgba(153, 102, 255, 1)",
        data: data,
        fill: false,
      });

      // Configura los datos para el gráfico
      setChartData({
        labels: labels,
        datasets: datasets,
      });
    };

    calcularData(); // Calcula los datos de la gráfica al cargar la página o cuando cambie la expresión o intervalos
  }, [expression, start, end]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza el cálculo de la gráfica cuando se envía el formulario
    calculateChartData();
  };

  return (
    <div>
      <h1 className="text-center uppercase font-bold text-2xl text-sky-700 my-4">
        Examenen De Practicas 2023 Via Asesores.
      </h1>
      <div className="flex justify-center mb-4">
        <a href="https://www.via-asesores.com/"
        target="_blank">
          <img
            className="flex items-center justify-center h-16 w-20"
            src="https://www.via-asesores.com/logos/logo_vertical/viaasesores_vertical_logo.svg"
            alt="Logo Via Asedores"
          />
        </a>
      </div>
      <div className="grid grid-cols-2  justify-between">
        <div className="max-w-md flex justify-end items-end">
          <Forms
            start={start}
            expression={expression}
            end={end}
            setExpression={setExpression}
            setStart={setStart}
            setEnd={setEnd}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="h-[400px] w-[730px] my-4">
            {chartData && (
              <Line
                className="border border-gray-800 rounded-xl"
                data={chartData}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: {
                        maxTicksLimit: 5,
                      },
                    },
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
