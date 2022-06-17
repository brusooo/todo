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
                ({ id, title, description, date }, index) => (
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
                        {/* <ShowBadge style={{ margin: 0 }}>
                          {title} {description}
                        </ShowBadge> */}
                        <span />
                        {date && (
                          <p style={{ margin: 0, fontStyle: "italic" }}>
                            {date + " " + title + " " + description}
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
