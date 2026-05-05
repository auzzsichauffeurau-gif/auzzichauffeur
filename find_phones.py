import os
import re

root_dir = 'src'
phone_number = '1300 615 165'
phone_number_2 = '9317 9000'

for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        if filename.endswith('.tsx') or filename.endswith('.ts') or filename.endswith('.css'):
            filepath = os.path.join(dirpath, filename)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    found = False
                    if phone_number in content:
                        print(f"Found {phone_number} in: {filepath}")
                        found = True
                    if phone_number_2 in content:
                         print(f"Found {phone_number_2} in: {filepath}")
                         found = True
                    
                    if found:
                         # Extract context
                         match = re.search(r'(.{0,100}' + re.escape(phone_number) + r'.{0,100})', content, re.DOTALL)
                         if match:
                             print(f"Context: {match.group(1).strip()}\n")
            except Exception as e:
                pass
