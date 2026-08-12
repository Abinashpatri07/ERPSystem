const fs = require('fs');
const filePath = 'c:\\New folder\\ERPSystem\\src\\pages\\sales\\CreateQuotePage.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// The Fixed Footer block I appended at the end
const fixedFooterRegex = /\{\/\* ── Fixed Footer ── \*\/\}[\s\S]*?<\/button>\s*<\/div>\s*<\/main>/;

// Replace it, putting back just </main>
if (fixedFooterRegex.test(content)) {
  content = content.replace(fixedFooterRegex, '</main>');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Removed duplicate Fixed Footer');
} else {
  console.log('Duplicate Fixed Footer not found');
}
