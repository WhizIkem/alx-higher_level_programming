#!/usr/bin/python3
"""This module defines a JSON file-writing function"""
import json

def save_to_json_file(my_obj, filename):
	"""write an object to a text file using JSON format"""
	with open(filename, "w", encoding="utf-8") as f:
	json_str = json.dumps(my_obj)
	f.write(json_str)
