import os
from deep_translator import GoogleTranslator #pip install deep-translator

fileRead = open("/home/abray/Desktop/yoga journal/others/fromWeb.txt", "r")
Lines = fileRead.readlines()

fileWrite = open("demofile2.js", "a")
fileWrite.write('article: [')


for (index,line) in enumerate(Lines):
    translated = GoogleTranslator(source='italian', target='english').translate(line)
    if (index%2 == 0) :
        stringLine = '\n\t{\n\t\tsubTitle: "' + translated[:-1].replace('"',"'") + '",'
        fileWrite.write(stringLine)
    else :
        stringLine = '\n\t\tparagraph: "' + translated[:-1].replace('"',"'") + '"\n\t},'
        fileWrite.write(stringLine)

fileWrite.write('\n]')
fileWrite.close()

# translated = GoogleTranslator(source='italian', target='english').translate_file('/home/abray/Desktop/yoga journal/others/fromWeb.txt')
# print(translated)
