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

    const [currentPage, setCurrentPage] = useState(0)

    const handleClick = (e, index) => {

        e.preventDefault();
        setCurrentPage(index)
    }


    const mappedData = props?.data?.financials?.map(({
         fiscalDate,
         accountsPayable,
         cashChange,
         cashFlow
     }, i) => ({
        order: i,
        id: Math.ceil(Math.random(new Date().getTime())*100 ),
        fiscalDate,
        accountsPayable,
        cashChange,
        cashFlow
    }));
    const [data, setData] = useState(mappedData)
    const [currentData,setCurrentData] = useState(null)

    // console.log(data);



    // console.log(currentPage)

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


    const dragStartHandler = (e, data) => {

        setCurrentData(data)
        // e.dataTransfer.setData("id",e.target.id)
        console.log('drag', data)
    }
    const dragLeaveHandler = (e) => {
        // e.target.style.background = 'white'
        e.target.style.boxShadow = 'none'
    }
    const dragEndHandler = (e) => {
        // e.target.style.background = 'white'
        e.target.style.boxShadow = 'none'
    }
    const dragOverHandler = (e) => {
        e.preventDefault()
        // setCurrentData(data)
        // if (e.target.className === 'table'){
        e.target.style.boxShadow = '0 4px 8px gray'
        // }
        // e.target.style.background = 'lightgray'
    }
    const dropHandler = (e, data) => {

        e.preventDefault()
        // setCurrentData([data,e.dataTransfer.getData(e.target.id)])
        // let dataAccessKey = e.dataTransfer.getData("id")
        //      console.log(dataAccessKey)
        // e.target.append(dataAccessKey)

        console.log('drop', data)

        setData(data => [...data].map((d, index) => {

                if (d.id === data.id) {
                    return {...d, order:currentData.order }
                }

                if (d.id === currentData.id) {
                    return {...d, order: data.order}
                }
                return d
            })
        );
        // e.target.style.background = 'lightgray'
        e.target.style.boxShadow = 'none'
    }
    const sortData = (a, b) => {

        if (a.order > b.order) {
            return  1
        } else {
            return -1
        }

        // return 0;
    }

    return (

        <>

            <Table bordered hover >


                <thead className={style.head}>

                <tr>
                    <th>#</th>
                    <th>Fiscal Date</th>
                    <th>Accounts Payable</th>
                    <th>Cash Change</th>
                    <th>Cash Flow</th>
                </tr>

                </thead>

                {props.data.financials && props.data.financials.length !== 0 &&
                 data
                    .slice(
                        currentPage * props.pages.pageSize,
                        (currentPage + 1) * props.pages.pageSize
                    )

                    .sort(sortData).map((data, i) =>

                    <tbody key={i} className={style.tr}

                           onDragStart={(e) => dragStartHandler(e, data)}
                           onDragLeave={(e) => dragLeaveHandler(e)}
                           onDragEnd={(e) => dragEndHandler(e)}
                           onDragOver={(e) => dragOverHandler(e)}
                           onDrop={(e) => dropHandler(e, data)}

                           draggable={true}>

                    <tr >

                        <td scope="row" >{i + 1}</td>
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
                    <PaginationLink first onClick={e => handleClick(e, currentPage <= 0)} href="#"/>
                </PaginationItem>
                <PaginationItem disabled={currentPage <= 0}>
                    <PaginationLink previous onClick={e => handleClick(e, currentPage - 1)} href="#"/>
                </PaginationItem>

                {
                    // props.data && props.data.length &&
                [...Array(pagesCount)].map((page, i) =>

                    <PaginationItem active={i === currentPage} key={i}>
                        <PaginationLink onClick={e => handleClick(e, i)} href="#">
                            {i + 1}
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
                    <PaginationLink last onClick={e => handleClick(e, pagesCount - 1)} href="#"/>
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

