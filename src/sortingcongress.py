fileNames = open('congresspeoplenames.txt', 'r')
fileURLs = open('congresspeopleimages.txt', 'r')
namelines = fileNames.readlines()
imagelines = fileURLs.readlines()

maleNames = open('./Views/congressmalenames.txt', 'w')
femaleNames = open('./Views/congressfemalenames.txt', 'w')
maleURLs = open('./Views/congressmaleimages.txt', 'w')
femaleURLs = open('./Views/congressfemaleimages.txt', 'w')
maleNames.write('[')
maleURLs.write('[')
femaleNames.write('[')
femaleURLs.write('[')
for i in range(len(namelines)):
	if namelines[i][-2] == 'M':
		maleNames.write('\'' + namelines[i][0:-2] + '\', ')
		maleURLs.write('\'' + imagelines[i][:-1] + '\', ')
	elif namelines[i][-2] == 'F':
		femaleNames.write('\'' + namelines[i][0:-2] + '\', ')
		femaleURLs.write('\'' + imagelines[i][:-1] + '\', ')
maleNames.write(']')
maleURLs.write(']')
femaleNames.write(']')
femaleURLs.write(']')

fileNames.close()
fileURLs.close()
maleNames.close()
femaleNames.close()
maleURLs.close()
femaleURLs.close()
