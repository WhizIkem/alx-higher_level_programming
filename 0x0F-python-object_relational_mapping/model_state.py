#!/usr/bin/python3
""" Import neccesary librearies of ORM """
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String

# Factory function that constructs a base class for declarative class
# definitions
Base = declarative_base()


class State(Base):
    """ First state model """
    __tablename__ = 'states'
    id = Column(Integer, primary_key=True, unique=True,
                autoincrement=True, nullable=False)

    name = Column(String(128), nullable=False)
