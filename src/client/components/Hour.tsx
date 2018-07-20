import * as React from 'react';

interface Props {
  hour: number;
}

export default class Hour extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.onMove = this.onMove.bind(this);
  }

  onMove(event: React.PointerEvent) {

  }

  render() {
    return (
      <div
        onPointerMove={this.onMove}
      />
    );
  }
}
