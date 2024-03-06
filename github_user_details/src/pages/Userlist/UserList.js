import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function UserList() {
  const title = 'GitHub User List';
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = (rowData) => {
    console.log('Clicked row data:', rowData);
    // Handle row click, if needed
  };

  return (
    <>
    <div>{title}</div>
    <Table>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index} onClick={() => handleRowClick(row)}>
            <TableCell style={{ width: '100px' }}><Avatar alt={row.login} src={row.avatar_url} /></TableCell>
            <TableCell>{row.login}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  );
}

export default UserList;
