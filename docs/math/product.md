---
id: product
title: Product
sidebar_label: Product
---

Gets the product of given numbers.

## Syntax

`product(a: number, b: number, ...args): number`

### Parameters

`a: number` - First given number.

`b: number` - Second given number.

`...args: number[]` - The rest of the given numbers

> Can be given an infinite number of parameters.

### Returns

`number` - The resulting product.

### Error

> Throws an error if the length of arguments is less than 2.

## Import

```javascript
import { product } from '@princedev/calculate';
```

## Examples

Basic usage with two given numbers.

```javascript
const result = product(3,4);
```

> `result` would be **12**

Multiplying multiple given nnumbers.

```javascript
const result = product(-2,-4,6);
```

> `result` would be **48**

If you're using an array, you can use the spread operator like this

```javascript
const result = product(...[-2,-4,6]);
```

> `result` would be **48**