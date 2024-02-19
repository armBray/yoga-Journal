import os
import pathlib


# get current directory
path = os.getcwd()
print(path)

for (index,x) in enumerate(os.listdir()):
    src = os.path.abspath(x)
    if (x == 'rename.py') : 
        print('do not rename!')
        continue
    # parent directory
    # parent = os.path.dirname(path)
    dst = path + '/blog-yoga-' + str(index-1) + '.jpg'
    print(dst)
    os.rename(src, dst, src_dir_fd=None, dst_dir_fd=None)


 