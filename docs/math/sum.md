---
id: sum
title: Sum
sidebar_label: Sum
---

Gets the sum of given numbers.

## Syntax

`sum(a: number, b: number, ...args): number`

### Parameters

`a: number` - First given number.

`b: number` - Second given number.

`...args: number[]` - The rest of the given numbers

> Can be given an infinite number of parameters.

### Returns

`number` - The resulting sum.

### Error

> Throws an error if the length of arguments is less than 2.

## Import

```javascript
import { sum } from '@princedev/calculate';
```

## Examples

Basic usage with two given numbers.

```javascript
const result = sum(12,24);
```

> `result` would be 36

Adding multiple given nnumbers.

```javascript
const result = sum(12,24,36,48,60,72,84,96,108,120,132);
```

> `result` would be 792

If you're using an array, you can use the spread operator like this

```javascript
const result = sum(...[12,24,36,48,60,72,84,96,108,120,132]);
```

> `result` would be 792