---
id: median
title: Median
sidebar_label: Median
---

Gets the median of given numbers or the middle number in a sorted list of numbers.

## Syntax

`median(a: number, b: number, ...args): number`

### Parameters

`a: number` - First given number.

`b: number` - Second given number.

`...args: number[]` - The rest of the given numbers

> Can be given an infinite number of parameters.

### Returns

`number` - The resulting median.

### Error

> Throws an error if the length of arguments is less than 2.

## Import

```javascript
import { median } from '@princedev/calculate';
```

## Examples

Basic usage with even length of numbers.

```javascript
const result = median(21, 4, 8, 6);
```

> `result` would be **7**

Getting the median with an odd length of numbers.

```javascript
const result = median(21, 4, 8, 6, 12);
```

> `result` would be **8**

If you're using an array, you can use the spread operator like this

```javascript
const result = median(...[21, 4, 8, 6, 12]);
```

> `result` would be **8**