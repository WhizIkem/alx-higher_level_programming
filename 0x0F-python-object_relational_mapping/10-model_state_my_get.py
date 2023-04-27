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
    myquer = mySession.query(State).order_by(State.id)

    count = 0
    # state name to search (SQL injection free)
    for element in myquer:
        if sys.argv[4] == element.name:
            count = 1
            print("{}".format(element.id))

    if count == 0:
        print("Not found")
