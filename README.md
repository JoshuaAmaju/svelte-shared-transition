# svelte-shared-transition

Transition elements between routes easily.

## Install

```bash
yarn add svelte-shared-transition
```

## Usage

```javascript
import SharedTransition from "svelte-shared-transition";
```

```html
<SharedTransition key="hero" />

<div data-key="hero"></div>
```

Transition starts once the components is mounted.

## Props

| name     | type    | default     | description                                        |
| -------- | ------- | ----------- | -------------------------------------------------- |
| key      | string  |             | the key shared by the elements to be transitioned. |
| easing   | string  | ease-in-out |                                                    |
| delay    | number  | 0.0         |                                                    |
| duration | number  | 250         |                                                    |
| clear    | boolean | false       | clear animation properties                         |

## Methods

- play
- pause
- update

[Demo](https://github.com/JoshuaAmaju/svelte-shared-transition)
