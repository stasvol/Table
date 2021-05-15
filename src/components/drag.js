import React, { Component } from "react";

import { Container, Draggable } from "react-smooth-dnd";
// import "./styles.css";

export const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;

    const result = [...arr];
    let itemToAdd = payload;

    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
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
                    data: "Draggable" + index
                };
            })
        };
    }
    render() {
        return (
            <div>
                <div className="simple-page">

                    <Container
                        onDrop={e =>
                            this.setState({ items: applyDrag(this.state.items, e) })
                        }
                    >
                        {this.state.items.map(p => {
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

export default Simple
