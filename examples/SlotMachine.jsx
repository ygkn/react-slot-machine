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
    this.state = { index: 0, times: 1 };
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
          `}
        </style>
        <button onClick={() => this.setState({ index: Math.floor(Math.random() * list.length) })}>
          Slottle!
        </button>
        <input
          type="number"
          min="1"
          value={this.state.times}
          onInput={({ target }) => this.setState({ times: target.value })}
          placeholder="input slottle times"
        />
        <p>{this.state.index + list[this.state.index].name}</p>
        <Slot className="slot" target={this.state.index} times={this.state.times}>
          {list.map(({ name, color }) => (
            <div className="slot-item" style={{ color }}>
              {name.split('\n').map(v => <div>{v}</div>)}
            </div>
          ))}
        </Slot>
      </div>
    );
  }
}

export default SlotMacine;
