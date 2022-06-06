import React, { useEffect, FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings
} from './components';
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  StackedChart,
  PyramidChart,
  Kanban,
  Customers,
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  FinancialChart,
  ColorMapping,
  ColorPicker,
  Editor
} from './pages';
import { useAppContext } from './contexts/ContextProvider';
import './App.css';

interface Props {};

const renderSideBar = (activeMenu: boolean) : JSX.Element => {
  return activeMenu ? 
  (
    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
      <Sidebar />
    </div>
  ) : (
    <div className='w-0 dark:bg-secondary-dark-bg'>
      <Sidebar />
    </div>
  );
};

const App: FC<Props> = () : JSX.Element => {
  const { activeMenu } = useAppContext();
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='Settings' position='TopCenter'>
              <button 
                type='button' 
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ 
                  background: 'blue',
                  borderRadius: '50%'
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          { renderSideBar(activeMenu) }
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2' }`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          </div>

          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element={<Ecommerce />} />
              <Route path='/ecommerce' element={<Ecommerce />} />

              {/* Pages */}
              <Route path='/orders' element={<Orders />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/customers' element={<Customers />} />

              {/* Apps */}
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/color-picker' element={<ColorPicker />} />

              {/* Charts */}
              <Route path='/line' element={<LineChart />} />
              <Route path='/area' element={<AreaChart />} />
              <Route path='/bar' element={<BarChart />} />
              <Route path='/pie' element={<PieChart />} />
              <Route path='/financial' element={<FinancialChart />} />
              <Route path='/color-mapping' element={<ColorMapping />} />
              <Route path='/pyramid' element={<PyramidChart />} />
              <Route path='/stacked' element={<StackedChart />} />

            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
