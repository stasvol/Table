import React  from 'react';
import {Pagination, PaginationItem, PaginationLink, Table} from 'reactstrap';
import style from "../module.css/module.css";


class PaginationTable extends React.PureComponent {

    constructor(props) {

        super(props);

        // create data set of random length
        // this.dataSet = [...Array(Math.ceil(500 + Math.random() * 500))].map(
        //     (a, i) => "Record " + (i + 1)
        // );



              this.pageSize = 4;

           if (this.props.data.financials && this.props.data.financials.length !== 0 ) {

               this.pagesCount = Math.ceil(this.props.data.financials.length / this.props.pages.pageSize);
           }

           this.state = {
            currentPage: 0,

        };
    }

    handleClick(e, index) {

        e.preventDefault();

        this.setState({
            currentPage: index
        });

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
                        <th >Fiscal Date</th>
                        <th>Accounts Payable</th>
                        <th>Cash Change</th>
                        <th>Cash Flow</th>
                    </tr>
                    </thead>

                {this.props.data.financials  && this.props.data.financials.length !== 0  &&
                    (this.props.data.financials )
                    .slice(
                        currentPage * this.pageSize,
                        (currentPage + 1) * this.pageSize
                    )

                    .map((data, i) =>

                    <tbody key={i} className={style.tab}>
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

                    {[...Array(this.pagesCount)].map((page, i) =>
                        <PaginationItem active={i === currentPage} key={i}>
                            <PaginationLink onClick={e => this.handleClick(e, i)} >
                                { i+1 }
                            </PaginationLink>
                        </PaginationItem>
                    )}

                    <PaginationItem disabled={currentPage >= this.pagesCount + 1}>
                        <PaginationLink
                            onClick={e => this.handleClick(e, currentPage + 1)}
                            next />
                    </PaginationItem>
                    <PaginationItem disabled={currentPage >= this.pagesCount + 1}>
                        <PaginationLink
                            onClick={e => this.handleClick(e,   this.pagesCount+1)}
                            last

                        />
                    </PaginationItem>

                </Pagination>
                    </>

        );

    }

}
export default PaginationTable

