import React, { FC } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

interface Props {
  width: string;
  height: string;
};

const Stacked: FC<Props> = ({ width, height }) : JSX.Element => {
  return (
    <ChartComponent
      width={width}
      height={height}
      highlightColor='red'
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
    </ChartComponent>
    
  );
};

export default Stacked;