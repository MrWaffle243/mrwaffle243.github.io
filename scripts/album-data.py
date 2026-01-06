f = open("C:\\Users\\conor\\Desktop\\websites\\main-site\\music-lists\\top-20-albums.html")

page = f.readlines()

data = []
years = []
titles = []
artists = []

i = 0
while i < len(page):
    # EXCEPTION for morning glory as its text was made smaller
    if "Morning Glory?" in page[i]:
        yearLine = page[i]
        year = yearLine.split()[-3].split("(")[1].split(")")[0]
        ## SORT YEARS INTO THE COUNT OF DECADES LIST
        years.append(year)

        albumTitle = page[i].split(';">')[1].split("<")[0]
        titles.append(albumTitle)

        artist = page[i+1].split(">")[1].split("<")[0][3:]
        artists.append(artist)

        titleAndYear = (albumTitle, artist, year)
        data.append(titleAndYear)

    # General case
    elif "album-title" in page[i]:
        yearLine = page[i]
        year = yearLine.split()[-2].split("(")[1].split(")")[0]
        ## SORT YEARS INTO THE COUNT OF DECADES LIST
        years.append(year)

        albumTitle = page[i].split(">")[1].split("<")[0]
        titles.append(albumTitle)

        artist = page[i+1].split(">")[1].split("<")[0][3:]
        artists.append(artist)

        titleAndYear = (albumTitle, artist, year)
        data.append(titleAndYear)

    i += 1

for point in data:
    print(point)


# Count of decades
countOfDecades = [0] * 6 # 0 is 1960s, 7 is 2020s
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
decadeLabels = ["60s", "70s", "80s", "90s", "00s", "20s"]

colors = ["#c90000", "#fffef2", "#141414"] 

ax.bar(decadeLabels, countOfDecades, color=colors, edgecolor="black")

plt.title("Top 20 Albums Decades")
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
plt.savefig("C:\\Users\\conor\\Desktop\\websites\\main-site\\images\\top-albums-decades-stats.png", format='png', dpi=200, transparent=True)

plt.show()
