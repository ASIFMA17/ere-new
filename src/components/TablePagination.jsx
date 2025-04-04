import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersTable from './UsersTable';
import { toast } from 'react-toastify';

function TablePagination() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    const getUsers = async () => {

      try {

        const res = await axios.get('https://dummyjson.com/users', {

        });

        if (res.data.users) {
          toast.success('Users fetched successfully');

          setUsers(res.data.users);

        } else {

        }

        console.log(res.data.users);




      } catch (error) {

      }
    }

    getUsers();

  }, [])

  return (
    <>
      <UsersTable data={users} />
    </>
  )
}

export default TablePagination
