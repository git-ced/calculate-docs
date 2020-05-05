---
id: difference
title: Difference
sidebar_label: Difference
---

Gets the difference of given numbers.

## Syntax

`difference(a: number, b: number, ...args): number`

> **Note:** It subtracts number from left to right. For example, a - b - c - ... and so on.

### Parameters

`a: number` - First given number.

`b: number` - Second given number.

`...args: number[]` - The rest of the given numbers

> Can be given an infinite number of parameters.

### Returns

`number` - The resulting difference.

### Error

> Throws an error if the length of arguments is less than 2.

## Import

```javascript
import { difference } from '@princedev/calculate';
```

## Examples

Basic usage with two given numbers.

```javascript
const result = difference(12,24);
```

> `result` would be **-12**

Subtracting multiple given nnumbers.

```javascript
const result = difference(24,12,8);
```

> `result` would be **4** as it is evaluated as 24 - 12 - 8.

If you're using an array, you can use the spread operator like this

```javascript
const result = difference(...[24,12,8]);
```

> `result` would be **4**