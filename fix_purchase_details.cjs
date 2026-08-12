const fs = require('fs');
const path = require('path');

const dir = 'c:\\New folder\\ERPSystem\\src\\pages\\purchase';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  let modified = false;
  
  if (content.includes('from-[#ff6b6b] via-[#9333ea] to-[#4338ca]')) {
    content = content.replace(/from-\[#ff6b6b\] via-\[#9333ea\] to-\[#4338ca\]/g, 'from-[#ff7a59] via-[#d54a88] to-[#402de8]');
    modified = true;
  }
  if (content.includes('from-[#ff6b6b] to-[#b649d8]')) {
    content = content.replace(/from-\[#ff6b6b\] to-\[#b649d8\]/g, 'from-[#ff7a59] via-[#d54a88] to-[#402de8]');
    modified = true;
  }
  if (content.includes('from-pink-500 to-purple-600')) {
    content = content.replace(/from-pink-500 to-purple-600/g, 'from-[#ff7a59] via-[#d54a88] to-[#402de8]');
    modified = true;
  }

  // Update button text styling if there are buttons with slightly different text styling
  // e.g., text-[12px] font-medium -> text-xs font-bold
  if (content.includes('text-[12px] font-medium hover:opacity-90')) {
    content = content.replace(/text-\[12px\] font-medium hover:opacity-90 transition-opacity/g, 'text-xs font-bold hover:opacity-90 transition-opacity');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated gradients in ' + file);
  }
});
