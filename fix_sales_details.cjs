const fs = require('fs');

// Fix QuoteDetailPage.jsx
const quotePath = 'c:\\New folder\\ERPSystem\\src\\pages\\sales\\QuoteDetailPage.jsx';
if (fs.existsSync(quotePath)) {
  let quoteContent = fs.readFileSync(quotePath, 'utf8');
  quoteContent = quoteContent.replace(/from-\[#ff6b6b\] via-\[#9333ea\] to-\[#4338ca\]/g, 'from-[#ff7a59] via-[#d54a88] to-[#402de8]');
  quoteContent = quoteContent.replace(/from-\[#ff6b6b\] to-\[#b649d8\]/g, 'from-[#ff7a59] via-[#d54a88] to-[#402de8]');
  quoteContent = quoteContent.replace(/from-pink-500 to-purple-600/g, 'from-[#ff7a59] via-[#d54a88] to-[#402de8]');
  fs.writeFileSync(quotePath, quoteContent, 'utf8');
}

// Fix InvoiceDetailPage.jsx button text class
const invoicePath = 'c:\\New folder\\ERPSystem\\src\\pages\\sales\\InvoiceDetailPage.jsx';
if (fs.existsSync(invoicePath)) {
  let invoiceContent = fs.readFileSync(invoicePath, 'utf8');
  invoiceContent = invoiceContent.replace(
    /text-\[12px\] font-medium hover:opacity-90 transition-opacity/g,
    'text-xs font-bold transition-opacity hover:opacity-90'
  );
  fs.writeFileSync(invoicePath, invoiceContent, 'utf8');
}
