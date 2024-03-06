import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserSpecificDetails from '../../molecules/UserSpecificDetails/UserSpecificDetails';

const UserDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUserSpecificData = async () => {
      try {
        const { data } = await axios.get(`https://api.github.com/users/${id}`);
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchUserSpecificData();
  }, []);
  return (
    <UserSpecificDetails data={data} />
    // <Table>
    //   <TableBody>
    //       <TableRow key={data.id}>
    //         <TableCell style={{ width: '100px' }}><Avatar src={data.avatar_url} /></TableCell>
    //         <TableCell>{data.name || '-'}</TableCell>
    //         <TableCell>{data.email || '-'}</TableCell>
    //         <TableCell>{data.company || '-'}</TableCell>
    //         <TableCell>{data.location || '-'}</TableCell>
    //         <TableCell>{data.followers || '-'}</TableCell>
    //         <TableCell>{data.following || '-'}</TableCell>
    //         <TableCell>{data.public_repos || '-'}</TableCell>
    //         <TableCell>{data.twitter_username || '-'}</TableCell>
    //         <TableCell>{data.blog || '-'}</TableCell>
    //       </TableRow>
    //   </TableBody>
    // </Table>
  );
}

export default UserDetails;