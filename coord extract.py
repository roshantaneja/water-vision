import json
import re
import csv

def extract_coordinates(file_name):
    """Extract coordinate points from a JSON-like file."""
    coordinates = []
    with open(file_name, 'r') as file:
        data = file.read()
        # Use regular expression to find all point coordinates
        points = re.findall(r'ee\.Geometry\.Point\(\[(\-?\d+\.\d+), (\-?\d+\.\d+)\]\)', data)
        for point in points:
            x, y = float(point[0]), float(point[1])
            coordinates.append((x, y))
    return coordinates

# Example usage
file_name = "coordinates.txt"  # Note: the actual file name may vary
coordinates = extract_coordinates(file_name)
print(coordinates)

with open("output.csv", mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(coordinates)

print("done!")