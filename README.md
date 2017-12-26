# react-slot-machine

A slot machine library for React

![DEMO](./demo.gif)

[DEMO](https://ygkn.github.io/react-slot-machine/)

## Installation

```bash
npm i --save react-slot-machine
# or
yarn add react-slot-machine
```

## Usage

```jsx
import React from 'react';
import Slot from 'react-slot-machine';

import list from './my-list';

const YourComponent = props => (
  <div>
    <Slot /* props */>
      {
        list.map(value =>
          <div style={width: '100%', height: '100%'}>
            {value}
          </div>
        )
          // Children of `Slot` be sure to be `width` and `height` are 100%.
      }
    </Slot>
  </div>
)
```

### props

| Name      | Type     | Required | Description                       |
| --------- | -------- | -------- | --------------------------------- |
| target    | Number   | [x]      | Index to target item              |
| duration  | Number   | [ ]      | Duration of scrolling             |
| easing    | Function | [ ]      | Easing function (see below)       |
| times     | Number   | [ ]      | Times to spin                     |
| onEnd     | Function | [ ]      | Event fires on ended of scrolling |
| className | String   | [ ]      | className                         |

#### Easing Function

Function receive `(elapsed, initialValue, amountOfChange, duration)` and return value to change.

It is compatible with [bameyrick/js-easing-functions](https://github.com/bameyrick/js-easing-functions).

## LICENSE

Written by [MIT LICENSE](./LICENSE)
