import React from 'react';

import { Avatar, Divider, Tooltip } from 'antd';

const AvatarGroupSection = ({items,image}) => {
  return (
    <>
    <Avatar.Group maxCount={2}   maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}  size="large">
      {items.map(item => <Avatar src={image} />)}
    </Avatar.Group>
    </>
  );
};

export default AvatarGroupSection;