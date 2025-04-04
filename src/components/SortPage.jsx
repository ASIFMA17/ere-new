import React, { useState } from 'react';
import './sortPage.css';
import { Col, Row, Container } from 'react-bootstrap';
import './usersTable.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import TableListing from './TableListing';
import { toast } from 'react-toastify';

function SortPage() {

    const [users, setUsers] = useState([]);
    const [orderData, setOrderData] = useState([]);
    const [view, setView] = useState(false);

    const [inputs, setInputs] = useState({
        sortIteam: '',
        sortType: '',
    });
    console.log(inputs);


    const ascendigOrderName = async () => {

        try {

            const res = await axios.get('https://dummyjson.com/users', {

            });

            if (res.data.users) {
                setUsers(res.data.users);

            } else {

            }

            //console.log(res.data.users);


        } catch (error) {

        }

        console.log(users);


        const data = users.sort((a, b) => a.firstName.localeCompare(b.firstName));

        console.log(data);

        if (data) {
            toast.success('Users sorted successfully');
            setView(true);
            setOrderData(data);
        }

    }

    const ascendigOrderEmail = async () => {

        try {

            const res = await axios.get('https://dummyjson.com/users', {

            });

            if (res.data.users) {
                setUsers(res.data.users);

            } else {

            }

            //console.log(res.data.users);


        } catch (error) {

        }

        console.log(users);


        const data = users.sort((a, b) => a.email.localeCompare(b.email));

        console.log(data);

        if (data) {
            toast.success('Users sorted successfully');
            setView(true);
            setOrderData(data);
        }

    }

    const descendigOrderName = async () => {

        try {

            const res = await axios.get('https://dummyjson.com/users', {

            });

            if (res.data.users) {
                setUsers(res.data.users);

            } else {

            }

            //console.log(res.data.users);


        } catch (error) {

        }

        console.log(users);


        const data = users.sort((a, b) => b.firstName.localeCompare(a.firstName));

        console.log(data);

        if (data) {
            toast.success('Users sorted successfully');
            setView(true);
            setOrderData(data);
        }

    }

    const descendigOrderEmail = async () => {

        try {

            const res = await axios.get('https://dummyjson.com/users', {

            });

            if (res.data.users) {
                setUsers(res.data.users);

            } else {

            }

            //console.log(res.data.users);


        } catch (error) {

        }

        console.log(users);


        const data = users.sort((a, b) => b.email.localeCompare(a.email));

        console.log(data);

        if (data) {
            toast.success('Users sorted successfully');
            setView(true);
            setOrderData(data);
        }

    }

    const onComplete = async () => {

        if (inputs.sortIteam === 'firstName' && inputs.sortType === 'ascending') {
            ascendigOrderName();
        } else if (inputs.sortIteam === 'firstName' && inputs.sortType === 'descending') {
            descendigOrderName();
        } else if (inputs.sortIteam === 'email' && inputs.sortType === 'ascending') {
            ascendigOrderEmail();
        } else if (inputs.sortIteam === 'email' && inputs.sortType === 'descending') {
            descendigOrderEmail();
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
                                    <span className='sortBox-Head'>Sorting users data :-</span>
                                    {/* <input type="number" placeholder='Quantity' className='inpuBox-singup' id='password' name='password' value={inputs.quantity} onChange={(e) => setInputs({ ...inputs, quantity: e.target.value })} onBlur={() => setFocus({ ...focus, errQuantity: true })} focus={focus.errQuantity.toString()} required /> */}

                                    <select id="Quantity" name="Quantity" className='sort-box'
                                        onChange={(e) => setInputs({ ...inputs, sortIteam: e.target.value })}
                                        required>
                                        <option value='' style={{ fontSize: '12px', fontWeight: '500' }}>Select option</option>
                                        <option value='firstName' style={{ fontSize: '12px', fontWeight: '500' }}>Name</option>
                                        <option value='email' style={{ fontSize: '12px', fontWeight: '500' }}>Email</option>
                                    </select>

                                </div>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div>
                                    <span className='sortBox-Head'> Ascending / Descending :-</span>
                                    {/* <input type="number" placeholder='Quantity' className='inpuBox-singup' id='password' name='password' value={inputs.quantity} onChange={(e) => setInputs({ ...inputs, quantity: e.target.value })} onBlur={() => setFocus({ ...focus, errQuantity: true })} focus={focus.errQuantity.toString()} required /> */}

                                    <select id="Quantity" name="Quantity" className='sort-box'
                                        onChange={(e) => setInputs({ ...inputs, sortType: e.target.value })}
                                        required>
                                        <option value='' style={{ fontSize: '12px', fontWeight: '500' }}>Select option</option>
                                        <option value='ascending' style={{ fontSize: '12px', fontWeight: '500' }}>Ascending order</option>
                                        <option value='descending' style={{ fontSize: '12px', fontWeight: '500' }}>Descending order</option>
                                    </select>

                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className='buttonDiv-sort' >
                                    <button className='bg-black text-white sortBox-Button' onClick={onComplete}>Sort Users</button>
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

                        <tbody key={user.id}>

                            <TableListing name={user.firstName} email={user.email} phone={user.phone} companyName={user.company.name} address={user.address.city} />

                        </tbody>

                    ))}

                </Table>

            </div>

        </>
    )
}

export default SortPage
