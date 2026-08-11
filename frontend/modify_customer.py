import re

with open('src/pages/customers/CreateCustomerPage.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add axios import
if 'import axios' not in content:
    content = content.replace('import React, { useState } from \'react\';', 'import React, { useState } from \'react\';\nimport axios from \'axios\';')

# Add form state
state_code = '''
  const [formData, setFormData] = useState({
    customer_type: 'Business',
    primary_contact_salutation: '',
    primary_contact_first_name: '',
    primary_contact_last_name: '',
    display_name: '',
    customer_language: 'English',
    primary_number: '',
    secondary_number: '',
    msme: '',
    company_name: '',
    email_address: '',
    sales_region: '',
    pan: '',
    gstin: '',
    currency: '',
    opening_balance: '0.00',
    payment_terms: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/customers/', formData);
      if (response.status === 201) {
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error('Error creating customer:', error);
      alert('Failed to create customer');
    }
  };
'''

if 'const [formData' not in content:
    content = content.replace('const [showSuccessModal, setShowSuccessModal] = useState(false);', 'const [showSuccessModal, setShowSuccessModal] = useState(false);\n' + state_code)

# Add onSubmit to form
content = content.replace('<form className="max-w-6xl">', '<form className="max-w-6xl" onSubmit={handleSubmit}>')

# Change button type to submit
content = content.replace('onClick={() => setShowSuccessModal(true)}\n          className="px-6 py-2 bg-gradient-to-r', 'type="submit"\n          className="px-6 py-2 bg-gradient-to-r')

# Now let's try to attach name attributes to some inputs as a demonstration.
# In a real app we'd parse JSX. For now we use some regex to add name/value/onChange to specific inputs based on placeholders or labels.

# First Name
content = re.sub(r'(<input type="text" placeholder="First Name"[^>]*?)(\s*/>)', r'\1 name="primary_contact_first_name" value={formData.primary_contact_first_name} onChange={handleChange}\2', content)

# Last Name
content = re.sub(r'(<input type="text" placeholder="Last Name"[^>]*?)(\s*/>)', r'\1 name="primary_contact_last_name" value={formData.primary_contact_last_name} onChange={handleChange}\2', content)

# Email
content = re.sub(r'(<input type="email" className="w-full min-w-0 border border-gray-200 rounded-md pl-9 pr-3 py-2 text-\[13px\] focus:outline-none focus:border-blue-500 bg-white shadow-sm"[^>]*?)(\s*/>)', r'\1 name="email_address" value={formData.email_address} onChange={handleChange}\2', content)

with open('src/pages/customers/CreateCustomerPage.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
