import React, {useState} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


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

   const handleClick =(e, index) =>{

        e.preventDefault();
       setCurrentPage(index)

    }
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

        return (
            <>
            <Pagination aria-label="Page navigation example">

                <PaginationItem disabled={currentPage <= 0}>
                    <PaginationLink first onClick={e => handleClick(e, currentPage - 1)}  href="#"/>
                </PaginationItem>
                <PaginationItem disabled={currentPage <= 0}>
                    <PaginationLink previous  onClick={e => handleClick(e, currentPage - 1)}   href="#"/>
                </PaginationItem>

                {  props.data && props.data.length &&
                    [...Array(pagesCount)].map((page, i) =>

                        <PaginationItem active={i===currentPage} key={i}>
                            <PaginationLink onClick={e =>handleClick(e, i)} href="#">
                                {i+1}
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
                    <PaginationLink last onClick={e => handleClick(e, currentPage + 1)}  />
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

