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

  // Skip if we already standardized it with the exact new footer
  if (content.includes('bg-[#244f5d] text-white text-[13px] font-bold') && content.includes('rounded-lg border border-gray-300')) {
    console.log('Already updated ' + file);
    return;
  }

  // Find the exact footer div bounds
  // Usually it is the last </div> before </main> or </form> or similar.
  // Look for a div that contains Save Draft and Save
  const footerStartRegex = /(?:\{\/\*.*?(?:Footer|Actions).*?\*\/\}\s*)?<div[^>]+flex[^>]+justify-end[^>]*>/;
  let match = content.match(footerStartRegex);
  
  if (!match) {
     // try another search for a div that contains "Save Draft"
     match = content.match(/<div[^>]*>[\s\S]{0,200}Save Draft[\s\S]{0,300}<\/div>/);
  }

  if (match) {
    const startIndex = match.index;
    // Find the matching closing div
    let openDivs = 0;
    let endIndex = -1;
    
    // We parse from startIndex to end of file to find the closing div of the footer
    const remaining = content.slice(startIndex);
    const divRegex = /<\/?div[^>]*>/g;
    let token;
    while ((token = divRegex.exec(remaining)) !== null) {
      if (token[0].startsWith('</div')) {
        openDivs--;
      } else {
        openDivs++;
      }
      if (openDivs === 0) {
        endIndex = startIndex + token.index + token[0].length;
        break;
      }
    }

    if (endIndex !== -1) {
      const footerBlock = content.slice(startIndex, endIndex);
      
      // Extract routing
      let cancelRoute = '';
      const cancelMatch = footerBlock.match(/onClick=\{\(\)\s*=>\s*navigate\('([^']+)'\)\}[^<]+Cancel/);
      if (cancelMatch) cancelRoute = cancelMatch[1];
      else {
        const cancelMatch2 = footerBlock.match(/onClick=\{\(\)\s*=>\s*navigate\((-[0-9]+)\)\}[^<]+Cancel/);
        if (cancelMatch2) cancelRoute = cancelMatch2[1];
      }
      
      // Save route might be custom e.g., setShowPreview(true)
      let saveOnClick = '';
      const saveMatch = footerBlock.match(/onClick=\{([^}]+)\}[^>]+>(\s*<[^>]+>\s*)*Save/);
      if (saveMatch) saveOnClick = saveMatch[1];

      if (!cancelRoute) {
        if (file.includes('purchase')) cancelRoute = '/purchase';
        else if (file.includes('sales')) cancelRoute = '/sales';
        else if (file.includes('production')) cancelRoute = '/production';
        else if (file.includes('vendors')) cancelRoute = '/vendors';
        else if (file.includes('customers')) cancelRoute = '/customers';
        else cancelRoute = '-1';
      }
      
      const isNavNum = !cancelRoute.startsWith("'") && !cancelRoute.startsWith("/");
      const cancelOnClick = isNavNum ? `() => navigate(${cancelRoute})` : `() => navigate('${cancelRoute}')`;
      
      const newFooter = `{/* ── Fixed Footer ── */}
      <div className="flex-shrink-0 bg-white border-t border-gray-200 px-8 py-3 flex justify-end items-center gap-3 z-20">
        <button 
          onClick={${cancelOnClick}}
          className="px-4 py-1.5 rounded-lg border border-gray-300 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors bg-white shadow-sm"
        >
          Cancel
        </button>
        <button className="px-4 py-1.5 rounded-lg bg-gray-100 text-[13px] font-semibold text-gray-700 hover:bg-gray-200 transition-colors flex items-center shadow-sm">
          <Bookmark className="w-3.5 h-3.5 mr-1.5 text-gray-500" />
          Save Draft
        </button>
        <button 
          ${saveOnClick ? `onClick={${saveOnClick}}` : `onClick={${cancelOnClick}}`}
          className="px-6 py-1.5 rounded-lg bg-[#244f5d] text-white text-[13px] font-bold shadow-sm hover:bg-[#1a3842] transition-colors"
        >
          Save
        </button>
      </div>`;

      content = content.slice(0, startIndex) + newFooter + content.slice(endIndex);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Successfully updated ' + file);
    } else {
      console.log('Failed to find closing div for ' + file);
    }
  } else {
    console.log('Could not match footer start in ' + file);
  }
});
