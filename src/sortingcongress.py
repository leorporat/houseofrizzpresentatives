fileNames = open('congresspeoplenames.txt', 'r')
fileURLs = open('congresspeopleimages.txt', 'r')
namelines = fileNames.readlines()
imagelines = fileURLs.readlines()

maleNames = open('./Views/congressmalenames.txt', 'a')
femaleNames = open('./Views/congressfemalenames.txt', 'a')
maleURLs = open('./Views/congressmaleimages.txt', 'w')
femaleURLs = open('./Views/congressfemaleimages.txt', 'w')

for i in range(len(namelines)):
	if namelines[i][-2] == 'M':
		maleNames.write(namelines[i][0:-2] + '\n')
		maleURLs.write(imagelines[i] + '\n')
	elif namelines[i][-2] == 'F':
		femaleNames.write(namelines[i][0:-2] + '\n')
		femaleURLs.write(imagelines[i] + '\n')

fileNames.close()
fileURLs.close()
maleNames.close()
femaleNames.close()
maleURLs.close()
femaleURLs.close()
