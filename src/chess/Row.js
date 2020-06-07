import React from 'react';
import Piece from './Piece';

class Row extends React.Component {

  get = (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o);

  render() {
    var first = "dark";
    var second = "light";

    if(this.props.index % 2 === 0) {
      first = "light";
      second = "dark";
    }

    return (
      <React.Fragment>
          <Piece index={`${this.props.index}/0`} background={first} piece={this.get(['location', 0], this.props)} pieceClicked={this.props.pieceClicked}/>
          <Piece index={`${this.props.index}/1`} background={second} piece={this.get(['location', 1], this.props)} pieceClicked={this.props.pieceClicked}/>
          <Piece index={`${this.props.index}/2`} background={first} piece={this.get(['location', 2], this.props)} pieceClicked={this.props.pieceClicked}/>
          <Piece index={`${this.props.index}/3`} background={second} piece={this.get(['location', 3], this.props)} pieceClicked={this.props.pieceClicked}/>
          <Piece index={`${this.props.index}/4`} background={first} piece={this.get(['location', 4], this.props)} pieceClicked={this.props.pieceClicked}/>
          <Piece index={`${this.props.index}/5`} background={second} piece={this.get(['location', 5], this.props)} pieceClicked={this.props.pieceClicked}/>
          <Piece index={`${this.props.index}/6`} background={first} piece={this.get(['location', 6], this.props)} pieceClicked={this.props.pieceClicked}/>
          <Piece index={`${this.props.index}/7`} background={second} piece={this.get(['location', 7], this.props)} pieceClicked={this.props.pieceClicked}/>
      </React.Fragment>
    )
  }
}

export default Row;