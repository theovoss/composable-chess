import React from 'react';
import Row from './Row';

class Board extends React.Component {
  state = {
    selectedPiece: null,
    destinations: [{row: 3, column: 7}, {row: 4, column: 7}],

    location: [
      [
        { name: "rook", color: "white", selected: false},
        { name: "knight", color: "white", selected: false},
        { name: "bishop", color: "white", selected: false},
        { name: "queen", color: "white", selected: false},
        { name: "king", color: "white", selected: false},
        { name: "bishop", color: "white", selected: false},
        { name: "knight", color: "white", selected: false},
        { name: "rook", color: "white", selected: false}
      ],
      [
        { name: "pawn", color: "white", selected: false, destinations: [{row: 2, column: 0}, {row: 3, column: 0}]},
        { name: "pawn", color: "white", selected: false, destinations: [{row: 2, column: 1}, {row: 3, column: 1}]},
        { name: "pawn", color: "white", selected: false, destinations: [{row: 2, column: 2}, {row: 3, column: 2}]},
        { name: "pawn", color: "white", selected: false, destinations: [{row: 2, column: 3}, {row: 3, column: 3}]},
        { name: "pawn", color: "white", selected: false, destinations: [{row: 2, column: 4}, {row: 3, column: 4}]},
        { name: "pawn", color: "white", selected: false, destinations: [{row: 2, column: 5}, {row: 3, column: 5}]},
        { name: "pawn", color: "white", selected: false, destinations: [{row: 2, column: 6}, {row: 3, column: 6}]},
        { name: "pawn", color: "white", selected: false, destinations: [{row: 2, column: 7}, {row: 3, column: 7}]}
      ],
      [{selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}],
      [{selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}],
      [{selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}],
      [{selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}],
      [
        { name: "pawn", color: "black", selected: false},
        { name: "pawn", color: "black", selected: false},
        { name: "pawn", color: "black", selected: false},
        { name: "pawn", color: "black", selected: false},
        { name: "pawn", color: "black", selected: false},
        { name: "pawn", color: "black", selected: false},
        { name: "pawn", color: "black", selected: false},
        { name: "pawn", color: "black", selected: false}
      ],
      [
        { name: "rook", color: "black", selected: false},
        { name: "knight", color: "black", selected: false},
        { name: "bishop", color: "black", selected: false},
        { name: "queen", color: "black", selected: false},
        { name: "king", color: "black", selected: false},
        { name: "bishop", color: "black", selected: false},
        { name: "knight", color: "black", selected: false},
        { name: "rook", color: "black", selected: false}
      ]
    ],
    pieces: {
      knight: {
        name: "knight",
        image: {
          black: null,
          white: null
        }
      },
      pawn: {
        name: "pawn",
        image: {
          black: null,
          white: null
        }
      },
      rook: {
        name: "rook",
        image: {
          black: null,
          white: null
        }
      },
      bishop: {
        name: "bishop",
        image: {
          black: null,
          white: null
        }
      },
      queen: {
        name: "queen",
        image: {
          black: null,
          white: null
        }
      },
      king: {
        name: "king",
        image: {
          black: null,
          white: null
        }
      }
    }
  }

  clearSelected = (location) => {
    for(const row in [...Array(8).keys()]) {
      for(const col in [...Array(8).keys()]) {
        location[row][col].selected = false;
      }
    }
  }

  movePiece = (destination, location) => {
    var source = this.state.selectedPiece;
    this.setLocation(destination, location, this.getLocation(source));
    this.setLocation(source, location, {});
  }
  
  setLocation = (square, location, value) => {
    location[square.row][square.column] = value;
  }

  getLocation = (square) => {
    return this.state.location[square.row][square.column];
  }

  pieceClicked = (clicked) => {
    const sourceRow = parseInt(clicked.split('/')[0]);
    const sourceColumn = parseInt(clicked.split('/')[1]);
    const location = {...this.state.location};
    const destinations = location[sourceRow][sourceColumn].destinations;
    const selectedPiece = this.state.selectedPiece;

    if(selectedPiece) {
      const destinations = this.getLocation(selectedPiece).destinations;
      // if click is in destinations, move piece
      if(destinations && destinations.some(destination => destination.row === sourceRow && destination.column === sourceColumn)){
        this.movePiece({row: sourceRow, column: sourceColumn}, location);
      }
      // clear selected ones
      this.clearSelected(location);
      this.setState({selectedPiece: null, location: location});
    } else {
      for(const index in destinations) {
        const destRow = destinations[index].row;
        const destCol = destinations[index].column;

        const l = location[destRow][destCol];
        l.selected = true;
      }
      this.setState({location});
      this.setState({ selectedPiece: { row: sourceRow, column: sourceColumn }});
    }
  }

  render() {
    return (
      <div className="board">
        <Row index={7} pieces={this.state.pieces} location={this.state.location[7]} pieceClicked={this.pieceClicked}/>
        <Row index={6} pieces={this.state.pieces} location={this.state.location[6]} pieceClicked={this.pieceClicked}/>
        <Row index={5} pieces={this.state.pieces} location={this.state.location[5]} pieceClicked={this.pieceClicked}/>
        <Row index={4} pieces={this.state.pieces} location={this.state.location[4]} pieceClicked={this.pieceClicked}/>
        <Row index={3} pieces={this.state.pieces} location={this.state.location[3]} pieceClicked={this.pieceClicked}/>
        <Row index={2} pieces={this.state.pieces} location={this.state.location[2]} pieceClicked={this.pieceClicked}/>
        <Row index={1} pieces={this.state.pieces} location={this.state.location[1]} pieceClicked={this.pieceClicked}/>
        <Row index={0} pieces={this.state.pieces} location={this.state.location[0]} pieceClicked={this.pieceClicked}/> 
      </div>
    )
  }
};

export default Board;