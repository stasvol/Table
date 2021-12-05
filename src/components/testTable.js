// import React from 'react';
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
//
// class TestTable extends React.PureComponent {
//   constructor(props) {
//     super(props);
//
//     // create data set of random length
//     this.dataSet = [...Array(Math.ceil(500 + Math.random() * 500))].map(
//       (a, i) => `Record ${i + 1}`,
//     );
//
//     this.pageSize = 50;
//     this.pagesCount = Math.ceil(this.dataSet.length / this.pageSize);
//
//     this.state = {
//       currentPage: 0,
//     };
//   }
//
//   handleClick(e, index) {
//     e.preventDefault();
//
//     this.setState({
//       currentPage: index,
//     });
//   }
//
//   render() {
//     const { currentPage } = this.state;
//
//     return (
//       <>
//         <div className="pagination-wrapper">
//           <Pagination aria-label="Page navigation example">
//             <PaginationItem disabled={currentPage <= 0}>
//               <PaginationLink
//                 href="#"
//                 onClick={e => this.handleClick(e, currentPage - 1)}
//                 previous
//               />
//             </PaginationItem>
//
//             {[...Array(this.pagesCount)].map((page, i) => (
//               <PaginationItem key={i} active={i === currentPage}>
//           <PaginationLink href="#" onClick={e => this.handleClick(e, i)}>
//                   {i + 1}
//                 </PaginationLink>
//               </PaginationItem>
//             ))}
//
//             <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
//               <PaginationLink
//                 href="#"
//                 next
//                 onClick={e => this.handleClick(e, currentPage + 1)}
//               />
//             </PaginationItem>
//           </Pagination>
//         </div>
//
//         {this.dataSet
//      .slice(currentPage * this.pageSize, (currentPage + 1) * this.pageSize)
//           .map((data, i) => (
//             <div key={i} className="data-slice">
//               {data}
//             </div>
//           ))}
//       </>
//     );
//   }
// }
// export default TestTable;
