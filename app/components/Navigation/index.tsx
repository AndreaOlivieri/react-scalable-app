/**
 *
 * Navigation
 *
 */
import React, { memo } from 'react';
import Topic from '../../types/topic';

// import styled from 'styles/styled-components';

interface Props {
  topics: Topic[];
}

function Navigation(props: Props) {
  const {
    topics,
  } = props;

  return (
    <div>
      The number of Topic is {topics.length}
    </div>
  );
}

export default memo(Navigation);
