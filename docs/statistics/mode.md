---
id: mode
title: Mode
sidebar_label: Mode
---

Gets the mode of given numbers or the most frequent one/s in a list of numbers.

## Syntax

`mode(a: number, b: number, ...args): number`

### Parameters

`a: number` - First given number.

`b: number` - Second given number.

`...args: number[]` - The rest of the given numbers

> Can be given an infinite number of parameters.

### Returns

`number[]` - The resulting mode.

> **Note:** The result would be an array regardless if its unimodal, bimodal, or multimodal.

### Error

> Throws an error if the length of arguments is less than 2.

## Import

```javascript
import { mode } from '@princedev/calculate';
```

## Examples

Basic usage with even length of numbers.

```javascript
const result = mode(2, 1, 8, 3, 2, 7, 4, 2, 6, 8);
```

> `result` would be **[2]**

Getting the mode with an odd length of numbers.

```javascript
const result = mode(2, 1, 8, 3, 2, 7, 4, 2, 6, 8, 8);
```

> `result` would be **[2, 8]**

If you're using an array, you can use the spread operator like this

```javascript
const result = mode(...[2, 1, 8, 3, 2, 7, 4, 2, 6, 8, 8]);
```

> `result` would be **[2, 8]**