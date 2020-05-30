import React from 'react';
import styles from './home.css';
import { Row, Col } from 'antd';
import LaborerList from '@/components/LaborerList';

export default () => {
  return (
    <Row className={styles.home}>
      <Col span={10} push={0} className={styles.leftSide}>
        <div className={styles.leftContent}>
          <LaborerList></LaborerList>
        </div>
      </Col>
      <Col span={14} pull={0} className={styles.rightSide}></Col>
    </Row>
  );
};
