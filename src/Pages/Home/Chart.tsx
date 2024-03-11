import * as React from 'react';
//@ts-ignore
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { useTranslation } from 'react-i18next';

const chartSetting = {
    yAxis: [
        {
            label: 'rainfall (mm)',
        },
    ],
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
        },
    },
};


const BarsDataset = () => {
    const [t] = useTranslation()
    const dataset = [
        {london: 59, paris: 57, newYork: 86, seoul: 21, month: t('January')},
        {london: 59, paris: 57, newYork: 86, seoul: 21, month: t('February')},
        {london: 59, paris: 57, newYork: 86, seoul: 21, month: t('March')},
        {london: 59, paris: 57, newYork: 86, seoul: 21, month: t('April')},

    ];

    const series = [
        { dataKey: 'london', label: t('London'), valueFormatter: (value: number) => `${value}mm` },
        { dataKey: 'paris', label: t('Paris'), valueFormatter: (value: number) => `${value}mm` },
        { dataKey: 'newYork', label: t('New York'), valueFormatter: (value: number) => `${value}mm` },
        { dataKey: 'seoul', label: t('Seoul'), valueFormatter: (value: number) => `${value}mm` },
    ];

    const months = dataset.map(data => data.month);

    return (
        <div className="Card BarChart" >
            <BarChart
                dataset={dataset}
                xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={series}
                {...chartSetting}
            />
            
        </div>
    );
};

export default BarsDataset;
