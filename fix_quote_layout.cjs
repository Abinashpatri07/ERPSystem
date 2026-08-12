const fs = require('fs');
const filePath = 'c:\\New folder\\ERPSystem\\src\\pages\\sales\\CreateQuotePage.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// The misplaced footer string
const misplacedFooterRegex = /\{\/\* ── Fixed Footer ── \*\/\}[\s\S]*?<\/button>\s*<\/div>/;

// Extract it
const match = content.match(misplacedFooterRegex);
let footerBlock = '';
if (match) {
  footerBlock = match[0];
  
  // Replace the misplaced footer with the Calculate button
  const calculateButton = `<div className="flex items-end justify-end">
                <button className="w-full px-6 py-2 rounded-lg bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8] text-white text-[13px] font-bold shadow-md hover:opacity-90 transition-opacity">
                  Calculate
                </button>
              </div>`;
              
  content = content.replace(misplacedFooterRegex, calculateButton);
  
  // Put the footer back right before </main>
  if (!content.includes(footerBlock)) {
     content = content.replace('</main>', `  ${footerBlock}\n    </main>`);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed CreateQuotePage.jsx');
} else {
  console.log('Misplaced footer not found');
}
