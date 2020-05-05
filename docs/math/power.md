---
id: power
title: Power
sidebar_label: Power
---

Gets the power of given numbers.

## Syntax

`power(a: number, b: number, ...args): number`

> **Note:** It gets the power of a number from left to right with this behavior ((a ^ b) ^ c) ^ ... and so on.

### Parameters

`a: number` - First given number.

`b: number` - Second given number.

`...args: number[]` - The rest of the given numbers

> Can be given an infinite number of parameters.

### Returns

`number` - The resulting power.

### Error

> Throws an error if the length of arguments is less than 2.

## Import

```javascript
import { power } from '@princedev/calculate';
```

## Examples

Basic usage with two given numbers.

```javascript
const result = power(2,3);
```

> `result` would be **8**

Getting the power of multiple given nnumbers.

```javascript
const result = power(2, 3, 4);
```

> `result` would be **4096** as it is evaluated as (2 ^ 3) ^ 4

If you're using an array, you can use the spread operator like this

```javascript
const result = power(...[2, 3, 4]);
```

> `result` would be **4096**