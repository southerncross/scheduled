import * as React from 'react';
import styled from '../../../../node_modules/styled-components';

interface Props {
  className?: string;
  name: string;
  color: string;
}

class Item extends React.Component<Props, {}> {
  render() {
    const { className, name, color } = this.props;

    return (
      <div className={className}>
        {name}
      </div>
    );
  }
}

const StyledItem = styled(Item)`
  width: 60px;
  padding: 12px 20px;
  margin: 4px 0;
  text-align: right;
  background-color: ${(props) => props.color};
  color: white;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  cursor: pointer;
  transition: width .2s

  &:hover {
    width: 120px;
  }
`;

export default StyledItem;
