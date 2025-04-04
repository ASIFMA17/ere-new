import React, { useState } from 'react';
import './searchPage.css';
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import './usersTable.css';
import Table from 'react-bootstrap/Table';
import TableListing from './TableListing';
import { toast } from 'react-toastify';

function SearchPage() {

    const [users , setUsers] = useState([]);
    const [orderData , setOrderData] = useState([]);
    const [view , setView] = useState(false);

    const [inputs, setInputs] = useState({
        searchIteam: '',
        searchLetter: '',
    })

    console.log(inputs);

    const getUsers = async () => {

        try {

            const res = await axios.get('https://dummyjson.com/users', {

            });

            if (res.data.users) {
                setUsers(res.data.users);

            } else {

            }

            console.log(res.data.users);




        } catch (error) {

        }
    }

    const searchNameLetter = async () => {

        if ( inputs.searchIteam === 'firstName' && inputs.searchLetter ) {
            getUsers();
        }

        const letter = inputs.searchLetter.toLocaleUpperCase();
       console.log(letter);

        const data = users.filter((user) => user.firstName.toLocaleUpperCase().includes(letter));
        console.log(data);

        if (data && data.length > 0) {
            toast.success('Users filtered successfully');
            setView(true);
            setOrderData(data);
        } else {
            toast.error('Users not found');
        }
        
        
    }

    const searchEmailLetter = async () => {

        if ( inputs.searchIteam === 'email' && inputs.searchLetter ) {
            getUsers();
        }

        const letter = inputs.searchLetter.toLocaleUpperCase();
       console.log(letter);

        const data = users.filter((user) => user.email.toLocaleUpperCase().includes(letter));
        console.log(data);

        if (data && data.length > 0) {
            toast.success('Users filtered successfully');
            setView(true);
            setOrderData(data);
        } else {
            toast.error('Users not found');
        }
        
        
    }

    const searchCompanyLetter = async () => {

        if ( inputs.searchIteam === 'companyName' && inputs.searchLetter ) {
            getUsers();
        }

        const letter = inputs.searchLetter.toLocaleUpperCase();
       console.log(letter);

        const data = users.filter((user) => user.company.name.toLocaleUpperCase().includes(letter));
        console.log(data);

        if (data && data.length > 0) {
            toast.success('Users filtered successfully');
            setView(true);
            setOrderData(data);
        } else {
            toast.error('Users not found');
        }
        
        
    }

    const onComplete = async () => {
         
        if (inputs.searchIteam === '' || inputs.searchLetter === '' ) {
            alert('Please fill all the fields');
        } else if ( inputs.searchIteam === 'firstName' && inputs.searchLetter ) {
            searchNameLetter();
        } else if ( inputs.searchIteam === 'email' && inputs.searchLetter ) {
            searchEmailLetter();
        } else if ( inputs.searchIteam === 'companyName' && inputs.searchLetter ){
            searchCompanyLetter();
        }
    }
    

    return (
        <>

            <div className='sortPage'>
                <Container>
                    <div >
                        <Row>
                            <Col xs={12} sm={6}>
                                <div>
                                    <span className='sortBox-Head'>Search user iteam :-</span>
                                    {/* <input type="number" placeholder='Quantity' className='inpuBox-singup' id='password' name='password' value={inputs.quantity} onChange={(e) => setInputs({ ...inputs, quantity: e.target.value })} onBlur={() => setFocus({ ...focus, errQuantity: true })} focus={focus.errQuantity.toString()} required /> */}

                                    <select id="Quantity" name="Quantity" className='sort-box'
                                        onChange={(e) => setInputs({ ...inputs, searchIteam: e.target.value })}
                                        required>
                                        <option value='' style={{ fontSize: '12px', fontWeight: '500' }}>Select option</option>
                                        <option value='firstName' style={{ fontSize: '12px', fontWeight: '500' }}>Name</option>
                                        <option value='email' style={{ fontSize: '12px', fontWeight: '500' }}>Email</option>
                                        <option value='companyName' style={{ fontSize: '12px', fontWeight: '500' }}>Company Name</option>
                                    </select>

                                </div>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div>
                                    <span className='sortBox-Head'>Search by users :-</span>
                                    <input type="letter" placeholder='Search user name or email or company name' className='sort-box' id='password' name='password' value={inputs.quantity} onChange={(e) => setInputs({ ...inputs, searchLetter: e.target.value })}  required />

                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className='sortBox-ButtonDiv' >
                                    <button className='bg-black text-white sortBox-Button' onClick={onComplete}>Search Users</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className='tableMargin'>


                <Table striped >
                    {view && (
                        <thead >
                            <tr style={{ backgroundColor: '#121618' }}>
                                <th className='tableHead'>Full Name</th>
                                <th className='tableHead'>Email</th>
                                <th className='tableHead'>Phone</th>
                                <th className='tableHead'>Company Name</th>
                                <th className='tableHead' >Address</th>
                            </tr>
                        </thead>
                    )}


                    {orderData && orderData.map((user) => (

                        <tbody key={user.id} style={{backgroundColor: '#121618'}}>

                            <TableListing name={user.firstName} email={user.email} phone={user.phone} companyName={user.company.name} address={user.address.city} />

                        </tbody>

                    ))}

                </Table>

            </div>

        </>
    )
}

export default SearchPage
