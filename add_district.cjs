const fs = require('fs');
const filePath = 'C:\\New folder\\ERPSystem\\src\\pages\\customers\\CreateCustomerPage.jsx';
let content = fs.readFileSync(filePath, 'utf8');

const targetString = `<div className="flex flex-col">
                          <label className="text-[13px] font-bold text-[#1a233a] mb-1">State</label>
                          <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" />
                        </div>`;

const newString = `<div className="flex flex-col">
                          <label className="text-[13px] font-bold text-[#1a233a] mb-1">District</label>
                          <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" />
                        </div>
                        <div className="flex flex-col">
                          <label className="text-[13px] font-bold text-[#1a233a] mb-1">State</label>
                          <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" />
                        </div>`;

// We just replace the state div with District + State.
// Let's use a regex that matches the state div, ignoring exact leading whitespace differences.

const regex = /<div className="flex flex-col">\s*<label className="text-\[13px\] font-bold text-\[#1a233a\] mb-1">State<\/label>\s*<input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-\[#1a233a\] focus:outline-none focus:border-blue-500 bg-white shadow-sm" \/>\s*<\/div>/g;

if (regex.test(content)) {
  content = content.replace(regex, newString);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully added District field!');
} else {
  console.log('Could not find the target string!');
}
