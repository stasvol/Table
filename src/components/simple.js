// import React, { Component } from 'react';
// import { Container, Draggable } from 'react-smooth-dnd';
//
// import { applyDrag, generateItems } from './drag';
//
// class Simple extends Component {
//   constructor(props) {
//   super(props);
//    this.state = {
//     items: generateItems(10, index => {
//       return {
//         id: index,
//         data: `Draggable${index}`,
//       };
//     }),
//   };
//   }
//
//   render() {
//     const { items } = this.state;
//     return (
//       <div>
//         <div className="simple-page">
//           <Container
//             onDrop={e => this.setState({ items: applyDrag(items, e) })}
//           >
//             {items.map(p => {
//               return (
//                 <Draggable key={p.id}>
//                   <div className="draggable-item">{p.data}</div>
//                 </Draggable>
//               );
//             })}
//           </Container>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Simple;
