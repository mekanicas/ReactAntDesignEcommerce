import React from 'react';
import { Avatar, Flex, Typography } from 'antd';
import Search from 'antd/es/input/Search'
import {MessageOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons'

const CustomHeader = () => {
    return <Flex align='center' justify="space-between">
        <Typography.Title level={3} type='secondary' >
            Bienvenido de vuelta, Bruno
        </Typography.Title>

        <Flex align='center' gap="3rem">
            <Search placeholder='Seach Dashboard' allowClear />
            <Flex align='center' gap='10px'> </Flex>
        </Flex>
        <Flex align='center' gap="10px">
            <MessageOutlined className='header-icon' />
            <NotificationOutlined className='header-icon' />
            <Avatar icon={<UserOutlined />} />
        </Flex>
    </Flex>
};

export default CustomHeader;