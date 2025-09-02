#!/usr/bin/env python3

import matplotlib.pyplot as plt
from matplotlib import font_manager

# Chronological
#albums = ["Rubber Soul", "Revolver", "Sgt. Peppers", "The White Album", "Yellow Submarine", "Abbey Road", "Let It Be", "Non-album Singles"]
#amounts = [1, 2, 3, 2, 1, 1, 1, 4]
#colors = ["#c95c19", "#7E7E7E", "#C93545", "#fffef2", "#FDE600", "#5A9FD3", "#000000", "#264D96"]

# By No. On List
albums = ["Non-Album Singles", "Sgt. Peppers", "Revolver", "The White Album", "Rubber Soul", "Yellow Submarine", "Abbey Road", "Let It Be"]
amounts = [4, 3, 2, 2, 1, 1, 1, 1]
colors = ["#264D96", "#C93545", "#7E7E7E", "#fffef2", "#c95c19", "#FDE600", "#5A9FD3", "#000000"]

# Pie Style
#explode = (0, 0, 0.2)
wp = {'linewidth': 0.5, 'edgecolor': "black"}

# Pie Init
patches, texts, autotexts = plt.pie(amounts, labels=albums, autopct='%1.1f%%',
        startangle=180, shadow=True,
        wedgeprops=wp,
        #explode=explode,
        colors=colors)


# Text color
plt.setp(autotexts)
autotexts[0].set_color('white')
#autotexts[6].set_color('white')
autotexts[7].set_color('white')

# Title
plt.title("Album")

# Font
font_path = r'C:\Users\conor\AppData\Local\microsoft\windows\fonts\NataSans-VariableFont_wght.ttf'
font_manager.fontManager.addfont(font_path)
prop = font_manager.FontProperties(fname=font_path)

plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['font.sans-serif'] = prop.get_name()

# Save as a file
plt.savefig('beatles-albums-pie-chart.png', format='png', dpi=200, transparent=True)

# Show
plt.show()