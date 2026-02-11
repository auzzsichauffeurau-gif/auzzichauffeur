import os
import re

root_dir = 'src/app'

# Define replacements. Order matters! more specific first.
replacements = [
    # Context 1: Footer text in pages
    (
        r'Contact our friendly team on 1300 615 165 or',
        r'Contact our friendly team via email at',
        0
    ),
    # Context 2: Contact Section in location pages (multiline)
    (
        r'Need help with your .*? booking\? Call us 24/7\.\s*<br />\s*<span style=\{\{ fontWeight: \'bold\', color: \'#1e3a8a\' \}\}>1300 615 165</span>',
        r'Need help with your booking? Contact us 24/7.<br /><span style={{ fontWeight: \'bold\', color: \'#1e3a8a\' }}>info@auzziechauffeur.com.au</span>',
        re.DOTALL
    ),
    # Context 3: Catch any remaining specific links
    (
        r'<a href="tel:1300615165">1300 615 165</a>',
        r'<a href="mailto:info@auzziechauffeur.com.au">info@auzziechauffeur.com.au</a>',
        0
    ),
    # Context 4: Simple text replacement (risky but needed if above fail)
    (
        r'1300 615 165',
        r'info@auzziechauffeur.com.au',
        0
    )
]

for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        if filename.endswith('.tsx') or filename.endswith('.ts'):
            filepath = os.path.join(dirpath, filename)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                original_content = content
                
                for pattern, repl, flags in replacements:
                    content = re.sub(pattern, repl, content, flags=flags)
                
                if content != original_content:
                    print(f"Updating {filepath}")
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
            except Exception as e:
                print(f"Error processing {filepath}: {e}")
