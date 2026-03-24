#!/usr/bin/env python3
import re

file_path = 'octasence-homepage-main/src/website/src/app/(main)/contact/form/FormPage.tsx'

with open(file_path, 'r') as f:
    content = f.read()

print(f"Before: 'We\\'ll' in content = {'We\\'ll' in content}")
print(f"Before: 'We'll' in content = {'We'll' in content}")

# Do the replacement
new_content = content.replace("We'll", "We'll")
new_content = new_content.replace("We'd", "We'd")

if new_content != content:
    with open(file_path, 'w') as f:
        f.write(new_content)
    print("File updated")
    
    # Verify
    with open(file_path, 'r') as f:
        updated = f.read()
    print(f"After: 'We\\'ll' in content = {'We\\'ll' in updated}")
    print(f"After: 'We'll' in content = {'We'll' in updated}")
else:
    print("No changes - content already has escaped apostrophes?")
    # Let's check character by character
    idx = content.find("We'll")
    if idx != -1:
        print(f"Found 'We'll' at position {idx}")
        print(f"Context: {content[idx-10:idx+20]}")
    else:
        print("Could not find 'We'll'")