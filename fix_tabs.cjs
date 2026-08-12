const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('C:\\New folder\\ERPSystem\\src\\pages', (filePath) => {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Replace border-blue-500 text-blue-600 with border-black text-black font-bold
    if (content.includes("'border-blue-500 text-blue-600'")) {
      content = content.replace(/'border-blue-500 text-blue-600'/g, "'border-black text-black font-bold'");
      modified = true;
    }
    
    // Also catch space variations if any
    if (content.includes("border-blue-500 text-blue-600")) {
      content = content.replace(/border-blue-500 text-blue-600/g, "border-black text-black font-bold");
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated active tab styling in ' + filePath);
    }
  }
});
