#!/usr/bin/python3
"""
module add-integer
add two integers a and b.
it accepts only integers and floats, otherwise a TypeError is raised.
if an input is float, it is cast automatically to an integer
"""

def add_integer(a, b=98):
	""" function that adds two integer and/or float numbers
	args:
		a: first number
		b: second number
	Returns:
		the addition of the two given numbers
	Raises:
		TypeError: if a or b is not ineger and/or float numbers
	"""

	if not isinstance(a, int) and not isinstance(a, float):
		raise TypeError("a must be an integer")
	if not isinstance(b, int) and not isinstance(b, float):
		raise TypeError("b must be an integer")
	a = int(a)
	b = int(b)
	return (a + b)
