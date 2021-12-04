import React, { Component } from 'react';

import { Container, Draggable } from 'react-smooth-dnd';

export const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;

  const result = [...arr].splice(removedIndex, 1)[0];
  let itemToAdd = payload;

  if (removedIndex !== null) {
    itemToAdd = result;
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }

  return result;
};

export const generateItems = (count, creator) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(creator(i));
  }
  return result;
};

class Simple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: generateItems(10, index => {
        return {
          id: index,
          data: `Draggable${index}`,
        };
      }),
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <div className="simple-page">
          <Container
            onDrop={e => this.setState({ items: applyDrag(items, e) })}
          >
            {items.map(p => {
              return (
                <Draggable key={p.id}>
                  <div className="draggable-item">{p.data}</div>
                </Draggable>
              );
            })}
          </Container>
        </div>
      </div>
    );
  }
}

export default Simple;
