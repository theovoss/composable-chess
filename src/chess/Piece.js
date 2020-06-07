import React from 'react';

class Piece extends React.Component {
  render() {
    var content = "";
    var selected = "";
    var index = this.props.index;
    var piece = this.props.piece;

    if(piece.name) {
      content = `${piece.color} ${piece.name}`;
    }
    if(piece.selected) {
      selected = "selectedSource";
    }

    return <div
      onClick={() => this.props.pieceClicked(index)}
      className={`place ${this.props.background} ${selected}`}>
        {content}
    </div>
  }
}

export default Piece;
