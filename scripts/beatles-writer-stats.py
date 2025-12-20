#!/usr/bin/env python3

import matplotlib.pyplot as plt
from matplotlib import font_manager

# Pie Style
labels = ["Paul", "John", "Paul & John"]
explode = (0, 0, 0.2)
colors = ["#c90000", "#fffef2", "#141414"]
wp = {'linewidth': 0.5, 'edgecolor': "black"}

# Pie Init
patches, texts, autotexts = plt.pie([6, 8, 1], labels=labels, autopct='%1.1f%%',
        startangle=75, shadow=True,
        wedgeprops=wp,
        explode=explode, colors=colors)

# Text color
plt.setp(autotexts)
autotexts[2].set_color('white')

# Title
plt.title("Primary Songwriter")

# Font
font_path = r'C:\Users\conor\AppData\Local\microsoft\windows\fonts\NataSans-VariableFont_wght.ttf'
font_manager.fontManager.addfont(font_path)
prop = font_manager.FontProperties(fname=font_path)

plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['font.sans-serif'] = prop.get_name()

# Save as a file
#plt.savefig('beatles-writer-pie-chart.png', format='png', dpi=200, transparent=True)

# Show
plt.show()