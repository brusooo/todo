import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext } from "react-beautiful-dnd";

import * as data from "./data";
import Container from "./Container";
import DropContainer from "./DropContainer";


const Sam = () => {
  const [state, setState] = useState(data);
  const onDragEnd = ({ source, destination, draggableId }) => {
    if (source && destination) {
      setState((prevState) => {
        const { index: sourceIndex, droppableId: sourceId } = source;
        const { index: destinationIndex, droppableId: destinationId } =
          destination;
        const sourceContainer = prevState.columns.find(
          (column) => column.id === sourceId
        );
        const destinationContainer = prevState.columns.find(
          (column) => column.id === destinationId
        );
        const sourceIds = Array.from(sourceContainer.userIds);
        const destinationIds = Array.from(destinationContainer.userIds);
        const isSameContainer = sourceContainer.id === destinationContainer.id;
        sourceIds.splice(sourceIndex, 1);
        if (isSameContainer) {
          sourceIds.splice(destinationIndex, 0, draggableId);
        } else {
          destinationIds.splice(destinationIndex, 0, draggableId);
        }
        const newSourceContainer = {
          ...sourceContainer,
          userIds: sourceIds,
        };
        const newDestinationContainer = {
          ...destinationContainer,
          userIds: destinationIds,
        };
        const columns = prevState.columns.map((column) => {
          if (column.id === newSourceContainer.id) {
            return newSourceContainer;
          } else if (
            column.id === newDestinationContainer.id &&
            !isSameContainer
          ) {
            return newDestinationContainer;
          } else {
            return column;
          }
        });
        return {
          ...prevState,
          columns,
        };
      });
    }
  };
  const { users, columns } = state;
  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map(({ id, title, userIds }) => (
          <DropContainer
            id={id}
            key={id}
            title={title}
            users={userIds.map((id) => users.find((user) => user.id === id))}
          />
        ))}
      </DragDropContext>
    </Container>
  );
};

export default Sam;
