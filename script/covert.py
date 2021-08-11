import re

# 'linearLight' | -> NLINEAR_LIGHT = 'linearLight'

origin = """
"""

def to_upper(s):
    return '_'.join(s.upper() for s in re.sub('([A-Z][a-z]+)', r' \1', re.sub('([A-Z]+)', r' \1', s)).split())

def c(line):
    p = re.compile(r"'(.+)' \|")
    match = p.search(line)
    if match:
        name = match[1]
        new_name = to_upper(name)
        return f"{new_name} = '{name}',"
    return ''

lines = origin.splitlines()

print('\n'.join(c(l) for l in lines))

