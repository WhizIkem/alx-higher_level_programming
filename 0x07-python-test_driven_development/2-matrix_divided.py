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

mes0 = "matrix must be a matrix (list of lists) of integers/floats"
mes1 = "Each row of the matrix must have the same size"
res_matrix = []

    if not isinstance(div, (int, float)):
        raise TypeError("div must be a number")

    if div == 0:
        raise ZeroDivisionError("division by zero")

    for lists in matrix:
        if len(lists) != len(matrix[0]):
            raise TypeError(mes1)
        inner_list = []
        for items in lists:
            if not isinstance(items, (int, float)):
                raise TypeError(mes0)
            else:
                inner_list.append(round(items / div, 2))
        res_matrix.append(inner_list)

    return res_matrix
