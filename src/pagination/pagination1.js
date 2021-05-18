import React, {useState} from 'react';
import {Pagination, PaginationItem, PaginationLink, Table} from 'reactstrap';
import style from "../module.css/module.css";


class PaginationTable extends React.PureComponent {

    constructor(props) {

        super(props);

        // create data set of random length
        // this.dataSet = [...Array(Math.ceil(500 + Math.random() * 500))].map(
        //     (a, i) => "Record " + (i + 1)
        // );

        // this.pageSize = 2;

           // if (this.props.data.financials && this.props.data.financials.length !== 0 ) {

               this.pagesCount = Math.ceil(this.props.data.financials.length / this.props.pages.pageSize);
           // }

           this.state = {
            currentPage: 0,
            currentData: null,
               data: this.mappedData
        };
    }

    handleClick =(e, index)=> {

        e.preventDefault();

        this.setState({
            currentPage: index
        });

    }

     mappedData = this.props?.data?.financials?.map(({

       fiscalDate, accountsPayable, cashChange, cashFlow  }, i)  => ({

        order: i+1,
        id: Math.ceil(Math.random(new Date().getTime())*100 ),
        fiscalDate,
        accountsPayable,
        cashChange,
        cashFlow
    }));


    dragStartHandler=(e,data)=>{

       this.setState({
           currentData:data
       })
        console.log('drag', data)
    }
    dragLeaveHandler=(e)=>{
        // e.target.style.background = 'white'
    }
   dragEndHandler=(e)=>{
        // e.target.style.background = 'white'
    }
    dragOverHandler=(e)=>{
        e.preventDefault()
        // e.target.style.background = 'lightgray'
    }
     dropHandler=(e,card)=>{

        e.preventDefault()
         console.log('drop', card)

         const newData = this.state.data.map(d =>{
             if (d.id === card.id){
                 return {...d,order:this.state.currentData.order}
             }
             if (d.id  === this.state.currentData.id){
                 return {...d,order:card.order}
             }
             return d
         });

        this.setState({ data: newData});
        // e.target.style.background = 'white'
    }
    sortData =(a,b)=>{

        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }

    render() {

        const { currentPage } = this.state;


        return (

            <>

                {/*<div className="pagination-wrapper">*/}

                    {/*<Pagination aria-label="Page navigation example">*/}

                    {/*    <PaginationItem disabled={currentPage <= 0}>*/}

                    {/*        <PaginationLink*/}
                    {/*            onClick={e => this.handleClick(e, currentPage - 1)}*/}
                    {/*            previous*/}
                    {/*            href="#"*/}
                    {/*        />*/}

                    {/*    </PaginationItem>*/}

                    {/*    {[...Array(this.pagesCount)].map((page, i) =>*/}
                    {/*        <PaginationItem active={i === currentPage} key={i}>*/}
                    {/*            <PaginationLink onClick={e => this.handleClick(e, i)} href="#">*/}
                    {/*                {i + 1}*/}
                    {/*            </PaginationLink>*/}
                    {/*        </PaginationItem>*/}
                    {/*    )}*/}

                    {/*    <PaginationItem disabled={currentPage >= this.pagesCount - 1}>*/}

                    {/*        <PaginationLink*/}
                    {/*            onClick={e => this.handleClick(e, currentPage + 1)}*/}
                    {/*            next*/}
                    {/*            href="#"*/}
                    {/*        />*/}

                    {/*    </PaginationItem>*/}

                    {/*</Pagination>*/}

                {/*</div>*/}

                <Table   bordered  hover >


                    <thead>

                    <tr>
                        <th>#</th>
                        <th>Fiscal Date</th>
                        <th>Accounts Payable</th>
                        <th>Cash Change</th>
                        <th>Cash Flow</th>
                    </tr>

                    </thead>

                {this.props.data.financials  && this.props.data.financials.length !== 0  &&
                    // (this.props.data.financials )
                 this.state.data

                    .slice(
                        currentPage * this.props.pages.pageSize,
                        (currentPage + 1) * this.props.pages.pageSize
                    )

                        .sort(this.sortData).map((data, i) =>

                    <tbody key={i} className={style.tab}
                           onDragStart={(e) =>this.dragStartHandler(e,data)}
                           onDragLeave={(e)=>this.dragLeaveHandler(e)}
                           onDragEnd={(e)=>this.dragEndHandler(e)}
                           onDragOver={(e)=>this.dragOverHandler(e)}
                           onDrop={(e)=>this.dropHandler(e,data)}
                           draggable={true}>

                    <tr>

                    <th scope="row">{i + 1}</th>
                    <td>{data.fiscalDate}</td>
                    <td>{data.accountsPayable}</td>
                    <td>{data.cashChange}</td>
                    <td>{data.cashFlow}</td>
                    </tr>
                    </tbody>
                    )
                }
                </Table>

                <Pagination aria-label="Page navigation example">

                    <PaginationItem disabled={currentPage <= 0}>
                        <PaginationLink first onClick={e => this.handleClick(e, currentPage===0)}  />
                    </PaginationItem>

                    <PaginationItem disabled={currentPage <= 0}>

                        <PaginationLink
                            onClick={e => this.handleClick(e, currentPage - 1)}
                            previous

                        />
                    </PaginationItem>

                    { this.pagesCount &&
                        [...Array(this.pagesCount)].map((page, i) =>
                        <PaginationItem active={i === currentPage} key={i}>
                            <PaginationLink onClick={e => this.handleClick(e, i)} >
                                 {i+1}
                            </PaginationLink>
                        </PaginationItem>
                    )}

                    <PaginationItem disabled={currentPage >= this.pagesCount  -1 }>
                        <PaginationLink
                            onClick={e => this.handleClick(e, currentPage  +1 )}
                            next />
                    </PaginationItem>
                    <PaginationItem disabled={currentPage >= this.pagesCount-1}>
                        <PaginationLink
                            onClick={e => this.handleClick(e,   this.pagesCount -1)}
                            last
                        />
                    </PaginationItem>

                </Pagination>
                    </>

        );

    }

}
export default PaginationTable

