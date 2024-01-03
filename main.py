
import json


import ee

# Trigger the authentication flow.
with (open("credentials.json", "r")) as f:
    credentials = json.load(f)

#print(credentials)

ee.Authenticate()
ee.Initialize(project=credentials["project_id"])
print(ee.Image("NASA/NASADEM_HGT/001").get("title").getInfo())