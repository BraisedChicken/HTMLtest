import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import { connect } from 'umi';

const Index = ({ dispatch, index }) => {
  function handleDelete() {
    dispatch({
      type: 'index/updateSize',
      payload: {
        height: document.body.offsetHeight,
        width: document.body.offsetWidth,
      },
    });
  }
  return (
    <div>
      <h1
        className={styles.title}
        id="testId"
        onClick={handleDelete}
      >{`My size is height:${index.height} width:${index.width}`}</h1>
    </div>
  );
};

export default connect(({ index }) => ({
  index,
}))(Index);
