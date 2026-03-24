#!/usr/bin/env python3
import re

file_path = 'octasence-homepage-main/src/website/src/app/(main)/contact/form/FormPage.tsx'

with open(file_path, 'r') as f:
    content = f.read()

print("File length:", len(content))

# Check using variables
has_we_ll = "We'll" in content
has_we_escaped_ll = "We'll" in content
has_we_d = "We'd" in content
has_we_escaped_d = "We'd" in content

print("Contains We'll:", has_we_ll)
print("Contains We'll:", has_we_escaped_ll)
print("Contains We'd:", has_we_d)
print("Contains We'd:", has_we_escaped_d)

# Try to find the exact text
matches = re.findall(r"We[']ll", content)
print("Regex matches for We'll:", matches)

# Show a snippet
lines = content.split('\n')
for i, line in enumerate(lines[210:220], start=211):
    if "We" in line:
        print("Line", i, ":", repr(line))