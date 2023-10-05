import React from 'react';

import { Avatar, Divider, Tooltip } from 'antd';

const AvatarGroupSection = ({items,image,maxCount}) => {
  console.log(items)
  return (
    <>
    <Avatar.Group maxCount={maxCount}   maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}  size="large">
      {items?.length >= 1 ? items?.map(item => <Avatar src={image} />) : <p>You will be first</p>}
    </Avatar.Group>
    </>
  );
};

export default AvatarGroupSection;