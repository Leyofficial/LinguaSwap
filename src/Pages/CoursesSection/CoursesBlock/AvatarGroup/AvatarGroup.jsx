import React from 'react';
// import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';

import { Avatar, Divider, Tooltip } from 'antd';

const AvatarGroupSection = ({icon}) => {
  return (
    <>
    <Avatar.Group>
      <Avatar src={icon} />
      <a href="https://ant.design">
        {/*<Avatar style={{ background:`url(${icon})` }}></Avatar>*/}
      </a>
    </Avatar.Group>
    </>
  );
};

export default AvatarGroupSection;