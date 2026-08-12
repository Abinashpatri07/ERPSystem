const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/vendors/CreateVendorPage.jsx',
  'src/pages/sales/CreateQuotePage.jsx',
  'src/pages/sales/CreateSalesOrderPage.jsx',
  'src/pages/sales/CreateInvoicePage.jsx',
  'src/pages/production/ManufacturingOrderDetailsPage.jsx',
  'src/pages/production/CreateManufacturingPage.jsx',
  'src/pages/purchase/CreatePurchaseOrderPage.jsx',
  'src/pages/production/CreateMachinePage.jsx',
  'src/pages/purchase/CreateProcurementPage.jsx',
  'src/pages/purchase/CreateExpensePage.jsx',
  'src/pages/production/CorrugatorJobDetailsPage.jsx',
  'src/pages/purchase/CreateBillPage.jsx',
  'src/pages/customers/CreateCustomerPage.jsx'
];

files.forEach(file => {
  const filePath = path.join('c:\\New folder\\ERPSystem', file);
  if (!fs.existsSync(filePath)) {
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('bg-[#244f5d]')) {
    content = content.replace(
      /bg-\[#244f5d\] text-white text-\[13px\] font-bold shadow-sm hover:bg-\[#1a3842\]/g,
      'bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8] text-white text-[13px] font-bold shadow-sm hover:opacity-90'
    );
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated color in ' + file);
  }
});
