import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import CustomerPage from './pages/customers/CustomerPage';
import CreateCustomerPage from './pages/customers/CreateCustomerPage';
import OrderCreationPage from './pages/customers/OrderCreationPage';
import SalesPage from './pages/sales/SalesPage';
import CreateSalesOrderPage from './pages/sales/CreateSalesOrderPage';
import SalesOrderDetailPage from './pages/sales/SalesOrderDetailPage';

// Placeholder for other pages to avoid errors
const PlaceholderPage = ({ title }) => (
  <div className="flex-1 flex items-center justify-center text-gray-500 bg-white m-4 rounded-xl border border-gray-100 shadow-sm">
    <h2 className="text-xl font-medium">{title} Page - Coming Soon</h2>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Default redirect to customers since that's our main view currently */}
          <Route index element={<Navigate to="/customers" replace />} />
          
          <Route path="customers" element={<CustomerPage />} />
          <Route path="customers/new" element={<CreateCustomerPage />} />
          <Route path="customers/new/order" element={<OrderCreationPage />} />
          
          {/* Other routes from sidebar */}
          <Route path="sales" element={<SalesPage />} />
          <Route path="sales/new" element={<CreateSalesOrderPage />} />
          <Route path="sales/order/:id" element={<SalesOrderDetailPage />} />
          <Route path="vendors" element={<PlaceholderPage title="Vendors" />} />
          <Route path="purchase" element={<PlaceholderPage title="Purchase" />} />
          <Route path="inventory" element={<PlaceholderPage title="Inventory" />} />
          <Route path="production" element={<PlaceholderPage title="Production" />} />
          <Route path="supply-chain" element={<PlaceholderPage title="Supply Chain" />} />
          <Route path="accounting" element={<PlaceholderPage title="Accounting" />} />
          <Route path="hrms" element={<PlaceholderPage title="HRMS" />} />
          <Route path="report" element={<PlaceholderPage title="Report" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
