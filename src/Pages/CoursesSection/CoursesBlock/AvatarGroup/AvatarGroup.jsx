import React from 'react';

import { Avatar, Divider, Tooltip } from 'antd';

const AvatarGroupSection = ({items,image,maxCount}) => {
  return (
    <>
    <Avatar.Group maxCount={maxCount}   maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}  size="large">
      {items.map(item => <Avatar src={image} />)}
    </Avatar.Group>
    </>
  );
};

export default AvatarGroupSection;