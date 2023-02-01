#!/usr/bin/python3
""" defines a matrix division function."""

def matrix_division(matrix, div):
	"""divide all elements of a matrix
	args:
		matrix (list): a list of lists of ints or floats.
		div (int/float): the divisor.
	raises:
		TypeError: if the matrix contains non-numbers
		TypeError: if the matrix contains rows of different sizes.
		TypeError: if div is not an int or float.
		ZeroDivisionError: if div is 0.
	Returns:
		A new matrix representing the result of the division
	"""
if not type(div) in (int, float):
	raise TypeError("div must be a number")

if div == 0:
	raise ZeroDivisionError("division by zero")

msg_type = "matrix must be a matrix (list of lists) of integers/floats"

if not matrix or not isinstance(matrix, list):
	raise TypeError(msg_type)

len_e = 0
msg_size = "Each row of the matrix must have the same size"

for elems in matrix:
	if not elems or not isinstance(elems, list):
		raise TypeError(msg_type)

	if len_e != 0 and len(elems) != len_e:
		raise TypeError(msg_size)

	for num in elems:
		if not type(num) in (int, float):
			raise TypeError(msg_type)

	len_e = len(elems)

m = list(map(lambda x: list(map(lamba y: round(y / div, 2), x)), matrix))
return (m)
