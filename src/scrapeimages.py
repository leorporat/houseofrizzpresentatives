import requests
import csv
from bs4 import BeautifulSoup

filenames = open('congresspeoplenames.txt', 'w')
fileimages = open('congresspeopleimages.txt', 'w')

##First webpage
with open("congressmembers1.html") as file:
	soup = BeautifulSoup(file, 'html.parser')

images = soup.find_all("img")
i = 0
for image in images:
	image_url = image.get("src")
	image_name = image.get("alt")

	if image_url[-3:] == 'jpg':
		if i % 2 == 0:
			filenames.write(image_name + '\n')
			fileimages.write(image_url + '\n')
		i += 1
file.close()


##Second webpage
with open("congressmembers2.html") as file:
	soup = BeautifulSoup(file, 'html.parser')

images = soup.find_all("img")
i = 0
for image in images:
	image_url = image.get("src")
	image_name = image.get("alt")

	if image_url[-3:] == 'jpg':
		if i % 2 == 0:
			filenames.write(image_name + '\n')
			fileimages.write(image_url + '\n')
		i += 1
file.close()

##Third webpage
with open("congressmembers3.html") as file:
	soup = BeautifulSoup(file, 'html.parser')

images = soup.find_all("img")
i = 0
for image in images:
	image_url = image.get("src")
	image_name = image.get("alt")
	if image_url[-3:] == 'jpg':
		if i % 2 == 0:
			filenames.write(image_name + '\n')
			fileimages.write(image_url + '\n')
		i += 1
file.close()
filenames.close()
fileimages.close()


	
	

#print(soup.prettify())