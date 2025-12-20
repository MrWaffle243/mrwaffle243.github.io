f = open("C:\\Users\\conor\\Desktop\\websites\\main-site\\music-lists\\top-20-songs.html")

page = f.readlines()

data = []
years = []
titles = []
artists = []

i = 0
while i < len(page):
    if "Release Year" in page[i]:
        yearLine = page[i+1]
        year = yearLine.split()[2]
        ## SORT YEARS INTO THE COUNT OF DECADES LIST
        years.append(year)

        songTitle = page[i-12].split(">")[1].split("<")[0]
        titles.append(songTitle)

        artist = page[i-11].split(">")[1].split("<")[0][3:]
        artists.append(artist)

        titleAndYear = (songTitle, artist, year)
        data.append(titleAndYear)

    i += 1

for point in data:
    print(point)


# Count of decades
countOfDecades = [0] * 6 # 0 is 1960s, 5 is 2010s
sortedYears = sorted(years)

decadeIndex = 0
i = 0
while i < len(sortedYears):
    if i != 0 and sortedYears[i][2] != sortedYears[i-1][2]:
        decadeIndex += 1
    countOfDecades[decadeIndex] += 1
    i += 1

# Bar Chart
import matplotlib.pyplot as plt
from matplotlib import font_manager

fig, ax = plt.subplots()
decadeLabels = ["60s", "70s", "80s", "90s", "00s", "10s"]

colors = ["#c90000", "#fffef2", "#141414"] 

ax.bar(decadeLabels, countOfDecades, color=colors, edgecolor="black")

plt.title("Top 20 Songs Decades")
ax.set_ylabel("Count")
ax.set_xlabel("Decade")

# Remove top and right frames
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

# Font
font_path = r'C:\Users\conor\AppData\Local\microsoft\windows\fonts\NataSans-VariableFont_wght.ttf'
font_manager.fontManager.addfont(font_path)
prop = font_manager.FontProperties(fname=font_path)

plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['font.sans-serif'] = prop.get_name()


# Save as a file
plt.savefig("C:\\Users\\conor\\Desktop\\websites\\main-site\\images\\top-songs-decades-stats.png", format='png', dpi=200, transparent=True)

plt.show()
