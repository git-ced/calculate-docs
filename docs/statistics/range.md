---
id: range
title: Range
sidebar_label: Range
---

Gets the range of given numbers or difference between the highest and the lowest number in a list.

## Syntax

`range(a: number, b: number, ...args): number`

### Parameters

`a: number` - First given number.

`b: number` - Second given number.

`...args: number[]` - The rest of the given numbers

> Can be given an infinite number of parameters.

### Returns

`number` - The resulting range.

### Error

> Throws an error if the length of arguments is less than 2.

## Import

```javascript
import { range } from '@princedev/calculate';
```

## Examples

Basic usage with even length of numbers.

```javascript
const result = range(21, 4, 8, 6);
```

> `result` would be **17**

If you're using an array, you can use the spread operator like this

```javascript
const result = range(...[21, 4, 8, 6]);
```

> `result` would be **17**