import * as React from 'react';

import styled from '../styled-component';

import Sidebar from './sidebar/Sidebar';

const Container = styled.div`
  border: 1px solid red;
`;

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
        <Sidebar/>
      </Container>
    );
  }
}
