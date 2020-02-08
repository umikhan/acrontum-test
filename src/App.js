import React from 'react';
import logo from './logo.svg';
import './App.css';

function Repeat(props) {
  const list = []
  for(let i=0; i<props.repeat; i++) {
    list.push(props.children(i, props.row, props.level))
  }
  return <>{list}</>
}
class App extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      parkings: {},
      levels: [0,0,0]
    };
  }

markParking (i,r,l) {
  const { parkings, levels } = this.state
  if (parkings[this.getkey(i, r, l)]) {
    parkings[this.getkey(i, r, l)] = false
    levels[l-1] = levels[l-1] - 1
  } else if((l === 2 && levels[l-2] === 36) || (l === 3 && levels[l-2] === 36 && levels[l-3] === 36) || (l === 1)) {
      parkings[this.getkey(i, r, l)] = true
      levels[l-1] = levels[l-1] + 1
  } else {
    alert('lower level empty')
  }
  this.setState({parkings, levels})
}
getkey(i, r, l) {
  return `${i},${r},${l}`
}


render() {
  const { parkings, levels } = this.state

  return (
    <div className="App">
      <h1>Car parking slots</h1>
      <h1>Empty : {108 - levels[0] - levels[1] - levels[2]} - Filled : {levels[0] + levels[1] + levels[2]}</h1>
      <h2>Level : 1</h2>
      <h4>Empty : {36 - levels[0]} - Filled : {levels[0]}</h4>
      <table>
        <tbody>
          <tr>
            <Repeat level={1} row={1} repeat={9}>
              {(i, r, l) => <td key={i+r+l} onClick={() => {this.markParking(i, r, l)}}>{parkings[this.getkey(i, r, l)] ? 'X' : 'O'}</td>}
            </Repeat>
          </tr>
          <tr>
            <Repeat level={1} row={2} repeat={9}>
              {(i, r, l) => <td key={i+r+l} onClick={() => {this.markParking(i, r, l)}}>{parkings[this.getkey(i, r, l)] ? 'X' : 'O'}</td>}
            </Repeat>
          </tr>
          <tr>
            <Repeat level={1} row={3} repeat={9}>
              {(i, r, l) => <td key={i+r+l} onClick={() => {this.markParking(i, r, l)}}>{parkings[this.getkey(i, r, l)] ? 'X' : 'O'}</td>}
            </Repeat>
          </tr>
          <tr>
            <Repeat level={1} row={4} repeat={9}>
              {(i, r, l) => <td key={i+r+l} onClick={() => {this.markParking(i, r, l)}}>{parkings[this.getkey(i, r, l)] ? 'X' : 'O'}</td>}
            </Repeat>
          </tr>
        </tbody>
      </table>
      <h2>Level : 2</h2>
      <h4>Empty : {36 - levels[1]} - Filled : {levels[1]}</h4>
      <table>
        <tbody>
          <tr>
            <Repeat level={2} row={1} repeat={9}>
              {(i, r, l) => <td key={i+r+l} onClick={() => {this.markParking(i, r, l)}}>{parkings[this.getkey(i, r, l)] ? 'X' : 'O'}</td>}
            </Repeat>
          </tr>
          <tr>
            <Repeat level={2} row={2} repeat={9}>
              {(i, r, l) => <td key={i+r+l} onClick={() => {this.markParking(i, r, l)}}>{parkings[this.getkey(i, r, l)] ? 'X' : 'O'}</td>}
            </Repeat>
          </tr>
          <tr>
            <Repeat level={2} row={3} repeat={9}>
              {(i, r, l) => <td key={i+r+l} onClick={() => {this.markParking(i, r, l)}}>{parkings[this.getkey(i, r, l)] ? 'X' : 'O'}</td>}
            </Repeat>
          </tr>
          <tr>
            <Repeat level={2} row={4} repeat={9}>
              {(i, r, l) => <td key={i+r+l} onClick={() => {this.markParking(i, r, l)}}>{parkings[this.getkey(i, r, l)] ? 'X' : 'O'}</td>}
            </Repeat>
          </tr>
        </tbody>
      </table>
      <h2>Level : 3</h2>
      <h4>Empty : {36 - levels[2]} - Filled : {levels[2]}</h4>
      <table>
        <tbody>
          <tr>
            <Repeat level={3} row={1} repeat={9}>
              {(i, r, l) => <td key={i+r+l} onClick={() => {this.markParking(i, r, l)}}>{parkings[this.getkey(i, r, l)] ? 'X' : 'O'}</td>}
            </Repeat>
          </tr>
          <tr>
            <Repeat level={3} row={2} repeat={9}>
              {(i, r, l) => <td key={i+r+l} onClick={() => {this.markParking(i, r, l)}}>{parkings[this.getkey(i, r, l)] ? 'X' : 'O'}</td>}
            </Repeat>
          </tr>
          <tr>
            <Repeat level={3} row={3} repeat={9}>
              {(i, r, l) => <td key={i+r+l} onClick={() => {this.markParking(i, r, l)}}>{parkings[this.getkey(i, r, l)] ? 'X' : 'O'}</td>}
            </Repeat>
          </tr>
          <tr>
            <Repeat level={3} row={4} repeat={9}>
              {(i, r, l) => <td key={i+r+l} onClick={() => {this.markParking(i, r, l)}}>{parkings[this.getkey(i, r, l)] ? 'X' : 'O'}</td>}
            </Repeat>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
}
export default App;
