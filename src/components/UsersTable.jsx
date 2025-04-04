import React, { useEffect, useState } from 'react';
import './usersTable.css';
import Table from 'react-bootstrap/Table';
import TableListing from './TableListing';
import ReactPaginate from 'react-paginate';

function UsersTable({ data }) {


    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [currentIteam, setCurrentIteam] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    useEffect(() => {

        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentIteam(data.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(data.length / itemsPerPage));

    }, [itemOffset, itemsPerPage, data]);


    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };


    return (
        <div className='tableMargin'>


            <Table striped >
                <thead >
                    <tr style={{ backgroundColor: '#121618' }}>
                        <th className='tableHead'>Full Name</th>
                        <th className='tableHead'>Email</th>
                        <th className='tableHead'>Phone</th>
                        <th className='tableHead'>Company Name</th>
                        <th className='tableHead' >Address</th>
                    </tr>
                </thead>

                {currentIteam && currentIteam.map((user) => (

                    <tbody key={user.index}>

                        <TableListing name={user.firstName} email={user.email} phone={user.phone} companyName={user.company.name} address={user.address.city} />

                    </tbody>

                ))}

            </Table>

            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageLinkClassName='page-num'
                previousLinkClassName='page-button'
                nextLinkClassName='page-button'
                activeLinkClassName='active'
            />

        </div>
    )
}

export default UsersTable
