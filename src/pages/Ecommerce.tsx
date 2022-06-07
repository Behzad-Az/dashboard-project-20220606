import React, { FC } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

import { StackedChart, PieChart, Button, SparkLineChart } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useAppContext } from '../contexts/ContextProvider';

interface Props {};

const Ecommerce: FC<Props> = () : JSX.Element => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>

        </div>
      </div>
    </div>
  );
};

export default Ecommerce;