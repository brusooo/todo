import React from "react";
import isEmpty from "lodash/isEmpty";
import { Droppable, Draggable } from "react-beautiful-dnd";

import Column from "./Column";
import Nothing from "./Nothing";
import User from "./User";
import ShowBadge from "./ShowBadge";
import Title from "./Title";
import UserContainer from "./UserContainer";

const DropContainer = ({ id, title, users }) => {
  return (
    <Column>
      <Title style={{ marginBottom: 5 }} msg={title} />
      <Droppable droppableId={id}>
        {({ innerRef, placeholder }, { isDraggingOver }) => (
          <UserContainer isDraggingOver={isDraggingOver} prop1={innerRef}>
            {!isEmpty(users) ? (
              users.map(
                ({ id, firstName, lastName, response, notes }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(
                      {
                        draggableProps,
                        dragHandleProps: eventHandlers,
                        innerRef,
                      },
                      { isDragging }
                    ) => (
                      <User
                        isDragging={isDragging}
                        prop1={innerRef}
                        prop2={draggableProps}
                        prop3={eventHandlers}
                      >
                        <ShowBadge response={response} style={{ margin: 0 }}>
                          {firstName} {lastName}
                        </ShowBadge>
                        <span />
                        {notes && (
                          <p style={{ margin: 0, fontStyle: "italic" }}>
                            {notes}
                          </p>
                        )}
                      </User>
                    )}
                  </Draggable>
                )
              )
            ) : (
              <Nothing />
            )}
            {placeholder}
          </UserContainer>
        )}
      </Droppable>
    </Column>
  );
};

export default DropContainer;
