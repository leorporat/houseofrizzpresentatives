import requests
from bs4 import BeautifulSoup

with open("congressmember.html") as file:
	soup = BeautifulSoup(file, 'html.parser')

images = soup.find_all("img")

for image in images:
	image_url = image.get("src")
	image_name = image.get("alt")

	response = requests.get(image_url)
	with open(image_url.split("/")[-1], "wb") as f:
		f.write(response.content)

print(soup.prettify())