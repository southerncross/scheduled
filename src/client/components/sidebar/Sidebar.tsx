import * as React from 'react';
import styled from '../../styled-component';

import Item from './Item';

interface Props {
  className?: string;
}

class Sidebar extends React.Component<Props, {}> {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <Item name="会议室" color="#2196f3"/>
        <Item name="Zoom" color="#4caf50"/>
        <Item name="测试机" color="#ffc107"/>
      </div>
    )
  }
}

const StyledSidebar = styled(Sidebar)`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
`;

export default StyledSidebar;
