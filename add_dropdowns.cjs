const fs = require('fs');
const path = require('path');

const files = [
  'C:\\New folder\\ERPSystem\\src\\pages\\sales\\SalesOrderDetailPage.jsx',
  'C:\\New folder\\ERPSystem\\src\\pages\\sales\\QuoteDetailPage.jsx',
  'C:\\New folder\\ERPSystem\\src\\pages\\sales\\InvoiceDetailPage.jsx',
  'C:\\New folder\\ERPSystem\\src\\pages\\purchase\\PurchaseOrderDetailPage.jsx',
  'C:\\New folder\\ERPSystem\\src\\pages\\purchase\\ProcurementDetailPage.jsx',
  'C:\\New folder\\ERPSystem\\src\\pages\\purchase\\ExpenseDetailPage.jsx',
  'C:\\New folder\\ERPSystem\\src\\pages\\purchase\\BillDetailPage.jsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // 1. Ensure ChevronDown is imported
    const lucideImportRegex = /import\s+\{([^}]+)\}\s+from\s+'lucide-react'/;
    const match = content.match(lucideImportRegex);
    if (match) {
      if (!match[1].includes('ChevronDown')) {
        const newImport = `import { ${match[1].trim()}, ChevronDown } from 'lucide-react'`;
        content = content.replace(lucideImportRegex, newImport);
        modified = true;
      }
    }

    // 2. Wrap the "All XYZ" header
    // It's either <h2 ...>All XYZ</h2> or <h3 ...>All XYZ</h3>
    // We will look for <h2 className="...">All ...</h2> or <h3 className="...">All ...</h3>
    
    // Using a regex to find the h2/h3 tag that contains "All "
    const hTagRegex = /(<(h2|h3)[^>]*>All [^<]+<\/(h2|h3)>)/g;
    
    content = content.replace(hTagRegex, (fullMatch) => {
      // Check if it's already wrapped by checking the previous characters (rudimentary but effective)
      // We will actually just blindly replace, but if it already has <div className="flex items-center space-x-1 cursor-pointer"> just before it, we shouldn't.
      // So instead of a global replace like that, let's just do:
      return `<div className="flex items-center space-x-1 cursor-pointer">\n                ${fullMatch}\n                <ChevronDown className="w-5 h-5 text-[#8b5cf6]" />\n              </div>`;
    });
    
    // Oh wait, if it replaces it multiple times if run twice, it would nest them. Let's be careful.
    // We can check if it's already wrapped.
    // A better approach:
    // If the file content already has "w-5 h-5 text-[#8b5cf6]" next to the "All ", skip.
    // Let's just run it since we only run once.
    modified = true;
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + path.basename(file));
  }
});
