const fs = require('fs');
const path = require('path');

const targetFiles = [
  'C:\\New folder\\ERPSystem\\src\\pages\\sales\\CreateQuotePage.jsx',
  'C:\\New folder\\ERPSystem\\src\\pages\\sales\\CreateSalesOrderPage.jsx',
  'C:\\New folder\\ERPSystem\\src\\pages\\sales\\CreateInvoicePage.jsx'
];

targetFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // We want to replace:
    // <nav className="flex space-x-8">
    // with <nav className="flex space-x-1">
    content = content.replace(/<nav className="flex space-x-8">/g, '<nav className="flex space-x-1">');
    
    // We want to replace:
    // className={`py-2.5 text-sm font-medium border-b-2 transition-colors ${tab.name === 'XYZ'
    // with
    // className={`flex items-center gap-1 px-4 py-2 text-[13px] border-b-2 transition-colors whitespace-nowrap ${tab.name === 'XYZ'
    
    // Let's use a regex to match the button class prefix
    const classRegex = /className={`py-2\.5 text-sm font-medium border-b-2 transition-colors \$\{tab\.name === '([^']+)'/g;
    content = content.replace(classRegex, "className={`flex items-center gap-1 px-4 py-2 text-[13px] border-b-2 transition-colors whitespace-nowrap ${tab.name === '$1'");
    
    // Also change border-black text-black font-bold -> text-black font-bold border-black for consistency, although they do the same thing.
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated tabs in ${path.basename(filePath)}`);
  }
});
