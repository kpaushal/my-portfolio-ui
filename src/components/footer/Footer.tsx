
import React from 'react';
import { Layout, Row, Col } from 'antd';
import { LinkedinOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const PortfolioFooter = () => {
  return (
    <Footer style={{ backgroundColor: '#001529', padding: '20px 0', color: '#fff' }}>
      <Row justify="center" align="middle" gutter={[16, 16]}>
        <Col span={6} style={{ textAlign: 'center' }}>
          <a
            href="mailto:moislav@gmail.com"
            style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}
          >
            Feel free to contact me
          </a>
        </Col>

        <Col span={6} style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '16px', color: '#fff' }}>
            Email: <a href="kpaushal9582@@gmail.com" style={{ color: '#fff' }}>kpaushal9582@gmailcom</a>
          </span>
        </Col>

        <Col span={6} style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '16px', color: '#fff' }}>
            What's Up: <a style={{ color: '#fff' }}>8287458674</a>
          </span>
        </Col>

        <Col span={6} style={{ textAlign: 'center' }}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#fff', fontSize: '20px', margin: '0 10px' }}
          >
            <LinkedinOutlined />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#fff', fontSize: '20px', margin: '0 10px' }}
          >
            <FacebookOutlined />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#fff', fontSize: '20px', margin: '0 10px' }}
          >
            <InstagramOutlined />
          </a>
        </Col>
      </Row>
    </Footer>
  );
};

export default PortfolioFooter;
