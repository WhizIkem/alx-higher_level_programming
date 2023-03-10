#!/usr/bin/python3
"""Documentation for square class"""

class Square():
	"""Square class"""

	def __init__(self, size=0):
		"""Sets the size of the square on instantiation
			Throws an error if the size called with it is not an integer
		Args:
			size (int, optional): The size of the square object
		Raises:
			TypeError: When the value passed in is not an integer
			ValueError: Whene the value passsed in is less than 0
		"""

		if not isinstance(size, int):
			raise TypeError("size must be an integer")
		elif size < 0:
			raise ValueError("size must be >= 0")
		else:
			self.__size = size 

	def area(self):
		"""returns the current square area"""
		area = self.__size ** 2
		return area           
