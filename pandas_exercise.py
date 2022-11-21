## import pandas as pd
# roster = pd.read_html("https://www.espn.com/nba/team/stats/_/name/gs/golden-state-warriors")
# roster[0]
# roster[1]

## extract tables from pdf
# import camelot

# tables = camelot.read_pdf('foo.pdf', pages='1')
# tables.export('foo.csv', f='csv', compress=True)
# tables[0].to_csv('foo.csv')

## Web Scraping with Selemnium 
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
import pandas as pd
from datetime import datetime
import os
import sys

application_path = os.path.dirname(sys.executable)

now = datetime.now()
now.strftime("$m#d%Y")

website = "https://www.thesun.co.uk/sport/football/"
path = "/Users/wbenarto/Desktop/Projects/codewars"

# headless-mode
options = Options()
options.headless = True

service = Service(executable_path=path)
driver = webdriver.Chrome(service=service, options=options)
driver.get(website)

containers = driver.find_elements(by="xpath", value='//div[@class="teaser__copy-container"]')

titles = []
subtitles = []
links = []


for container in containers:
    title = container.find_element(by="xpath", value='./a/h2').text
    subtitle=container.find_element(by="xpath", value='./a/p').text
    link = container.find_element(by="xpath", value='./a').get_attribute("href")
    titles.append(title)
    subtitles.append(subtitle)
    links.append(link)

my_dict = {'title':titles, 'subtitles': subtitles, 'link': links}

df_headlines = pd.DataFrame(my_dict)
df_headlines.to_csv('headline-headless.csv')

driver.quit()