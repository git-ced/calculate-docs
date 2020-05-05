---
id: remainder
title: Remainder
sidebar_label: Remainder
---

Gets the remainder of given numbers.

## Syntax

`remainder(a: number, b: number, ...args): number`

> **Note:** It gets the modulo of a number from left to right with this behavior ((a % b) % c) % ... and so on.

### Parameters

`a: number` - First given number.

`b: number` - Second given number.

`...args: number[]` - The rest of the given numbers

> Can be given an infinite number of parameters.

### Returns

`number` - The resulting remainder.

### Error

> Throws an error if the length of arguments is less than 2.

## Import

```javascript
import { remainder } from '@princedev/calculate';
```

## Examples

Basic usage with two given numbers.

```javascript
const result = remainder(24,12);
```

> `result` would be **0**

Getting the remainder of multiple given nnumbers.

```javascript
const result = remainder(4, 3, 3);
```

> `result` would be **1** as it is evaluated as (4 % 3) % 3

If you're using an array, you can use the spread operator like this

```javascript
const result = remainder(...[4, 3, 3]);
```

> `result` would be **1**