import os

_src = 'enumeratedbomaphotos/notboma/'
_ext = '.jpg'

for i, filename in enumerate(os.listdir(_src)):
    if filename.endswith(_ext):
        os.rename(_src + "/" + filename, 'enumeratedbomaphotos/notboma/' + str(i).zfill(4)+_ext)
        print('Renamed', str(i).zfill(4)+_ext)

print('Done')


