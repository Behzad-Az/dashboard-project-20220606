import React, { FC } from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

interface Props {
  currentColor: string;
  id: string;
  type: 'Line';
  height: string;
  width: string;
  data: { x: number; yval: number }[];
  color: string;
};

const SparkLine: FC<Props> = ({ currentColor, id, type, height, width, data, color }) : JSX.Element => {
  return (
    <SparklineComponent
      id={id}
      height='50px'
      width='200px'
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName='x'
      yName='yval'
      type={type}
      tooltipSettings={{
        visible: true,
        format: '${x}: data ${y}',
        trackLineSettings: {
          visible: true
        }
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;