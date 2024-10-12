import React from 'react'
import { Card } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
import type { ConfigProviderProps } from 'antd';

const { Meta } = Card;
type SizeType = ConfigProviderProps['componentSize'];

const ProjectPage = () => {
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
      
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  )
}

export default ProjectPage