import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import CustomerPage from './pages/customers/CustomerPage';
import CreateCustomerPage from './pages/customers/CreateCustomerPage';
import SalesPage from './pages/sales/SalesPage';
import CreateSalesOrderPage from './pages/sales/CreateSalesOrderPage';
import SalesOrderDetailPage from './pages/sales/SalesOrderDetailPage';
import CreateQuotePage from './pages/sales/CreateQuotePage';
import QuoteDetailPage from './pages/sales/QuoteDetailPage';
import QuotesPage from './pages/sales/QuotesPage';
import InvoicesPage from './pages/sales/InvoicesPage';
import CreateInvoicePage from './pages/sales/CreateInvoicePage';
import InvoiceDetailPage from './pages/sales/InvoiceDetailPage';
import VendorsPage from './pages/vendors/VendorsPage';
import CreateVendorPage from './pages/vendors/CreateVendorPage';
import VendorDetailsPage from './pages/vendors/VendorDetailsPage';
import PurchasePage from './pages/purchase/PurchasePage';
import CreatePurchaseOrderPage from './pages/purchase/CreatePurchaseOrderPage';
import PurchaseOrderDetailPage from './pages/purchase/PurchaseOrderDetailPage';

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
          
          {/* Other routes from sidebar */}
          <Route path="sales" element={<Navigate to="/sales/quotes" replace />} />
          <Route path="sales/orders" element={<SalesPage />} />
          <Route path="sales/new" element={<CreateSalesOrderPage />} />
          <Route path="sales/order/:id" element={<SalesOrderDetailPage />} />
          <Route path="sales/quotes" element={<QuotesPage />} />
          <Route path="sales/quotes/new" element={<CreateQuotePage />} />
          <Route path="sales/quotes/:id" element={<QuoteDetailPage />} />
          <Route path="sales/invoices" element={<InvoicesPage />} />
          <Route path="sales/invoices/new" element={<CreateInvoicePage />} />
          <Route path="sales/invoices/:id" element={<InvoiceDetailPage />} />
          <Route path="vendors" element={<VendorsPage />} />
          <Route path="vendors/new" element={<CreateVendorPage />} />
          <Route path="vendors/:id" element={<VendorDetailsPage />} />
          <Route path="purchase" element={<PurchasePage />} />
          <Route path="purchase/new" element={<CreatePurchaseOrderPage />} />
          <Route path="purchase/order/:id" element={<PurchaseOrderDetailPage />} />
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
