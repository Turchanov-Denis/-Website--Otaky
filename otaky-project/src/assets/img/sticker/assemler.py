import os
dirname = os.path.abspath("sticker")
files = os.listdir(dirname).pop(-1)
print(files)