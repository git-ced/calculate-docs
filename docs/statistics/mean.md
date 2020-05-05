---
id: mean
title: Mean
sidebar_label: Mean
---

Gets the mean of given numbers by getting its sum then divide to its length.

## Syntax

`mean(a: number, b: number, ...args): number`

### Parameters

`a: number` - First given number.

`b: number` - Second given number.

`...args: number[]` - The rest of the given numbers

> Can be given an infinite number of parameters.

### Returns

`number` - The resulting mean.

### Error

> Throws an error if the length of arguments is less than 2.

## Import

```javascript
import { mean } from '@princedev/calculate';
```

## Examples

Basic usage with two given numbers.

```javascript
const result = mean(12,4);
```

> `result` would be **8**

Getting the average of multiple given nnumbers.

```javascript
const result = mean(2, 4, 6);
```

> `result` would be **4**

If you're using an array, you can use the spread operator like this

```javascript
const result = mean(...[2, 4, 6]);
```

> `result` would be **4**