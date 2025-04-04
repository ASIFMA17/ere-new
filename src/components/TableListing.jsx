import React from 'react'

function TableListing({ name, phone, email, companyName, address }) {

    //console.log(name);
    //console.log(phone);
    //console.log(email);
    //console.log(companyName);
    //console.log(address);




    return (
        <tr>
            <td className='tableText'>{name}</td>
            <td className='tableText emailText'>{email}</td>
            <td className='tableText'>{phone}</td>
            <td className='tableText'>{companyName}</td>
            <td className='tableText'>{address}</td>
        </tr>
    )
}

export default TableListing
