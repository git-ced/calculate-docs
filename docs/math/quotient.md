---
id: quotient
title: Quotient
sidebar_label: Quotient
---

Gets the quotient of given numbers.

## Syntax

`quotient(a: number, b: number, ...args): number`

> **Note:** It divides number from left to right with this behavior ((a / b) / c) / ... and so on.

### Parameters

`a: number` - First given number.

`b: number` - Second given number.

`...args: number[]` - The rest of the given numbers

> Can be given an infinite number of parameters.

### Returns

`number` - The resulting quotient.

### Error

> Throws an error if the length of arguments is less than 2.

## Import

```javascript
import { quotient } from '@princedev/calculate';
```

## Examples

Basic usage with two given numbers.

```javascript
const result = quotient(24,12);
```

> `result` would be **2**

Dividing multiple given nnumbers.

```javascript
const result = quotient(8, 4, 2);
```

> `result` would be **1** as it is evaluated as (8 / 4) / 2

If you're using an array, you can use the spread operator like this

```javascript
const result = quotient(...[8, 4, 2]);
```

> `result` would be **1**