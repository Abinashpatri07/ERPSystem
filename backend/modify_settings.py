with open('core/settings.py', 'r') as f:
    content = f.read()

if 'corsheaders' not in content:
    content = content.replace(\"'django.contrib.staticfiles',\", \"'django.contrib.staticfiles',\n    'corsheaders',\n    'rest_framework',\")
    content = content.replace(\"'django.middleware.common.CommonMiddleware',\", \"'corsheaders.middleware.CorsMiddleware',\n    'django.middleware.common.CommonMiddleware',\")
    
    # Add CORS_ALLOW_ALL_ORIGINS
    content += '\nCORS_ALLOW_ALL_ORIGINS = True\n'
    
    with open('core/settings.py', 'w') as f:
        f.write(content)
