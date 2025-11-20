import React, { useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    LineController,
    BarController,
    DoughnutController
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

// Registrar componentes de Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    LineController,
    BarController,
    DoughnutController
);

export const ChartComponent = ({ type, data, options }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Limpiar el gráfico cuando el componente se desmonte
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <Chart
            ref={chartRef}
            type={type}
            data={data}
            options={options}
        />
    );
};

export default ChartComponent;
