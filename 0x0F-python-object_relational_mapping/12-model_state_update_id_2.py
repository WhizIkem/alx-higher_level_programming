#!/usr/bin/python3
"""Start link class to table in database"""

import sys
from model_state import Base, State
from sqlalchemy.orm import sessionmaker
from sqlalchemy import (create_engine)
from model_state import Base, State

if __name__ == "__main__":
    engine = create_engine('mysql+mysqldb://{}:{}@localhost:3306/{}'
                           .format(sys.argv[1], sys.argv[2],
                                   sys.argv[3]), pool_pre_ping=True)
    Base.metadata.create_all(engine)
    # generates new Session objects when called 
    Session = sessionmaker(bind=engine)
    mySession = Session()

    query = mySession.query(State)

    for element in query:
        if element.id == 2:
            element.name = "New Mexico"

    mySession.commit()
