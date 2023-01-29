import requests
from bs4 import BeautifulSoup

with open("congressmembers1.html") as file:
	soup = BeautifulSoup(file, 'html.parser')

images = soup.find_all("img")

for image in images:
	image_url = image.get("src")
	image_name = image.get("alt")

	print(image_name)
	print(image_url)

#print(soup.prettify())