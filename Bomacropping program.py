import os
import time
import PIL
from PIL import Image
from os import listdir
place = "C:\\Users\\Yuvi\\Downloads\\very cool cropping wow\\bomaphotos"
# get the path/directory
folder_dir = place
counter = 0
def crop_top_right(image_path, crop_height=100):
    # Open the image
    img = Image.open("C:\\Users\\Yuvi\\Downloads\\very cool cropping wow\\bomaphotos\\" + image_path)

    # Get the width and height of the image
    width, height = img.size

    # Define the region to be cropped (top right corner)
    left = 310
    top = 220
    right = 410
    bottom = 320

    # Crop the image
    cropped_img = img.crop((left, top, right, bottom))

    return cropped_img
for images in os.listdir(folder_dir):
    # check if the image ends with png
    crop_top_right(images).save("C:\\Users\\Yuvi\\Downloads\\very cool cropping wow\\croppedbomaphotos\\" + images)