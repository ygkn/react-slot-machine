import React from 'react';
import Slot from '../src/Slot';

const list = [
  { name: '? ? ?', color: '#000' },
  { name: 'Sakuranomiya\nMaika', color: '#f05274' },
  { name: 'Hinata\nKaho', color: '#48cefb' },
  { name: 'Hoshikawa\nMahuyu', color: '#fedf38' },
  { name: 'Amano\nMiu', color: '#ba5ad1' },
  { name: 'Kanzaki\nHideri', color: '#5bd096' },
  { name: 'Dino', color: '#9fa0a0' },
  { name: 'Akiduki\nKouyou', color: '#50b15c' },
];

class SlotMacine extends React.Component {
  constructor() {
    super();
    this.state = {
      target: 1,
      times: 1,
      duration: 3000,
      turn: false,
    };
  }
  render() {
    return (
      <div>
        <style jsx>
          {`
            div > :global(.slot) {
              font-size: 5em;
              height: 3em;
            }
            .slot-item {
              height: 100%;
              width: 100%;
            }
            button {
              color: #000;
              background: #fff;
              border: solid 1px;
              border-radius: 3px;
            }
            label {
              display: block;
              margin: 1em 0;
            }
          `}
        </style>
        <label>
          Target
          <input
            type="number"
            min="1"
            max={list.length - 1}
            onInput={e => this.setState({ target: parseInt(e.target.value) })}
            value={this.state.target}
          />
          <button
            onClick={() =>
              this.setState({ target: Math.floor(Math.random() * (list.length - 2)) + 1 })
            }
          >
            set random
          </button>
        </label>
        <label>
          Duration(ms)
          <input
            type="number"
            min="0"
            step="100"
            onInput={e => this.setState({ duration: parseInt(e.target.value) })}
            value={this.state.duration}
          />
        </label>
        <label>
          Turn times
          <input
            type="number"
            min="1"
            value={this.state.times}
            onInput={({ target }) => this.setState({ times: parseInt(target.value) })}
            placeholder="input turn times"
          />
        </label>
        <label>
          Turning
          <input
            type="checkbox"
            onChange={({ target }) => this.setState({ turn: target.checked })}
            checked={this.state.turn}
          />
        </label>
        <Slot
          className="slot"
          duration={this.state.duration}
          target={this.state.turn ? this.state.target : 0}
          times={this.state.times}
        >
          {list.map(({ name, color }) => (
            <div className="slot-item" style={{ color }}>
              {name.split('\n').map(v => <div>{v}</div>)}
            </div>
          ))}
        </Slot>
        <h2>List</h2>
        <table>
          {list.map(({ name, color }, i) => (
            <tr style={{ color }}>
              <th>{i}</th>
              <td>{name}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default SlotMacine;
