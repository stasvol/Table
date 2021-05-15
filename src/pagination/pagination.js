import React, {useEffect, useState} from 'react';
import {Pagination, PaginationItem, PaginationLink, Table} from 'reactstrap';
import style from "../module.css/module.css";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";




const PaginationTable = ({...props}) => {

    // props.pageSize = 10;

    // this.state = {
    //     currentPage: 0
    // };

        const pagesCount = Math.ceil(props.data.financials?.length / props.pages.pageSize)

    // let addPages = []
    //
    // for (let i=0; i<pagesCount.length; i++ ){
    //     addPages.push(i)
    // }

    const [currentPage,setCurrentPage] = useState(0)

    const [currentData,setCurrentData] = useState(null)

   const handleClick =(e, index) =>{

        e.preventDefault();
       setCurrentPage(index)

    }

   console.log(currentPage)

    // const pagesCount = Math.ceil(props.pages.countData / props.pages.pageDataCount)  // к-ть стор.= заг. к-ть даних / поділ. на к-ть даних на стор.
    // const pagesAdd = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //     pagesAdd.push(i)
    // }
    //
    //     const pagesPartCount = Math.ceil(pagesCount / pageButtonCount) // заг. к-ть стор. поділити к-ть кноп. на стор.
    //     const [pageNumber, setPageNumber] = useState(1)     // номер стор. i + f
    //     const leftBorder = (pageNumber - 1) * pageButtonCount + 1       // ліва границя = номер стор. помнож. на к-ть кноп. на стор.
    //     const rightBorder = pageNumber * pageButtonCount


    const dragStartHandler=(e)=>{

            // setCurrentData(data)
        e.dataTransfer.setData("id",e.target.id)
    }
    const dragLeaveHandler=(e)=>{

    }
    const dragEndHandler=(e)=>{
        // e.target.style.background = 'lightgray'
    }
    const dragOverHandler=(e)=>{
         e.preventDefault()
        // e.target.style.background = 'white'
    }
    const dropHandler=(e,data)=>{

            e.preventDefault()
     let dataAccessKey = e.dataTransfer.getData("id")
          console.log(dataAccessKey)
        // e.target.append(dataAccessKey)

        setCurrentData(props.data.financials.map(d =>{
            if (d.accountsPayable === data.accountsPayable){
                return {...d,accountsPayable:currentData.accountsPayable}
            }
            if (d.accountsPayable  === currentData.accountsPayable){
                return {...d,accountsPayable:data.accountsPayable}
            }
            return d
        }))
         e.target.style.background = 'lightgray'
    }
    const sortData =(a,b)=>{
          if (a.data > b.data) {
              return 1
          } else {
              return -1
          }
    }

        return (

            <>

                <Table   bordered  hover >


                    <thead className={style.head} >

                    <tr>
                        <th>#</th>
                        <th>Fiscal Date</th>
                        <th>Accounts Payable</th>
                        <th>Cash Change</th>
                        <th>Cash Flow</th>
                    </tr>

                    </thead>

                    {props.data.financials  && props.data.financials.length !== 0  &&
                    props.data.financials
                        .slice(
                            currentPage * props.pages.pageSize,
                            (currentPage + 1) * props.pages.pageSize
                        )

                        .sort(sortData).map((data, i) =>

                            <tbody key={i} className={style.tab} id={i+1}

                                   onDragStart={(e) =>dragStartHandler(e)}
                                   onDragLeave={(e)=>dragLeaveHandler(e)}
                                   onDragEnd={(e)=>dragEndHandler(e)}
                                   onDragOver={(e)=>dragOverHandler(e)}
                                   onDrop={(e)=>dropHandler(e)}

                                   draggable={true}>

                            <tr>

                                <td scope="row">{i+1}</td>
                                <td>{data.fiscalDate}</td>
                                <td>{data.accountsPayable} </td>
                                <td>{data.cashChange} </td>
                                <td>{data.cashFlow} </td>

                            </tr>

                            </tbody>

                        )
                    }
                </Table>
            <Pagination aria-label="Page navigation example">

                <PaginationItem disabled={currentPage <= 0}>
                    <PaginationLink first onClick={e => handleClick(e, currentPage <=0)}  href="#"/>
                </PaginationItem>
                <PaginationItem disabled={currentPage <= 0}>
                    <PaginationLink previous  onClick={e => handleClick(e, currentPage - 1)}   href="#"/>
                </PaginationItem>

                {  props.data && props.data.length &&
                    [...Array(pagesCount)].map((page, i ) =>

                        <PaginationItem active={i===currentPage} key={i}>
                            <PaginationLink onClick={e =>handleClick(e, i)} href="#">
                               {i + 1} {page+i}
                            </PaginationLink>
                        </PaginationItem>
                    )
                }
                <PaginationItem disabled={currentPage >= pagesCount - 1}>
                    <PaginationLink onClick={e => handleClick(e, currentPage + 1)} next href="#"/>
                </PaginationItem>

                {/*<PaginationItem>*/}
                {/*    <PaginationLink next />*/}
                {/*</PaginationItem>*/}
                <PaginationItem disabled={currentPage >= pagesCount - 1}>
                    <PaginationLink last onClick={e => handleClick(e,  pagesCount -1)} href="#" />
                </PaginationItem>
            </Pagination>

           {/*{ props.data*/}

           {/*    .slice(*/}
           {/*        currentPage * props.pageSize,*/}
           {/*        (currentPage + 1) * props.pageSize*/}
           {/*    )*/}
           {/*    .map((data, i) =>*/}
           {/*        <div className="data-slice" key={i}>*/}
           {/*            {data}*/}
           {/*        </div>*/}
           {/*    )}*/}

       </>
        );

}

export default PaginationTable;

