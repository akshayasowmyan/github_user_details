import React from 'react';
import Avatar from '@mui/material/Avatar';

const UserSpecificDetails = ({ data }) => {
  return (
    <div>
      <h2>User Details:</h2>
      <li><Avatar alt={data.login} src={data.avatar_url} /></li>
        <li><strong>Name:</strong> {data.name || '-'}</li>
        <li><strong>Email:</strong> {data.email || '-'}</li>
        <li><strong>Company:</strong> {data.company || '-'}</li>
        <li><strong>Location:</strong> {data.location || '-'}</li>
        <li><strong>No. of followers:</strong> {data.followers || '-'}</li>
        <li><strong>No. of following:</strong> {data.following || '-'}</li>
        <li><strong>No. of public repositories:</strong> {data.public_repos || '-'}</li>
        <li><strong>Twitter Handle:</strong> {data.twitter_username || '-'}</li>
        <li><strong>Blog:</strong> {data.blog || '-'}</li>
    </div>
  );
};

export default UserSpecificDetails;
