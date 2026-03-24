#!/usr/bin/env python3
import re

file_path = 'octasence-homepage-main/src/website/src/app/(main)/contact/form/FormPage.tsx'

with open(file_path, 'r') as f:
    content = f.read()

print(f"Original length: {len(content)}")

# Count occurrences
count_well = content.count("We'll")
count_wed = content.count("We'd")
print(f"Found We'll: {count_well} times")
print(f"Found We'd: {count_wed} times")

# Replace using regex to be sure
new_content = re.sub(r"We'll", "We'll", content)
new_content = re.sub(r"We'd", "We'd", new_content)

# Also replace any standalone apostrophes in those contexts
# But be careful not to replace other apostrophes

if new_content != content:
    with open(file_path, 'w') as f:
        f.write(new_content)
    print("File updated successfully")
    
    # Verify
    with open(file_path, 'r') as f:
        updated = f.read()
    print(f"Updated length: {len(updated)}")
    print(f"Now has We'll: {'We' + chr(39) + 'll' in updated}")
    print(f"Now has We'll: {'We\'ll' in updated}")
    print(f"Now has We'd: {'We' + chr(39) + 'd' in updated}")
    print(f"Now has We'll: {'We\'ll' in updated}")
else:
    print("No changes needed")