---
id: square
title: Square
sidebar_label: Square
---

Gets the sqaure of a given number.

## Syntax

`sqaure(a: number): number`

### Parameters

`a: number` - Given number to be sqaured.

### Returns

`number` - The resulting sqaure.

### Error

> Throws an error if the length of arguments is not equal to 1.

## Import

```javascript
import { sqaure } from '@princedev/calculate';
```

## Examples

Basic usage with two given numbers.

```javascript
const result = sqaure(2);
```

> `result` would be **4**

```javascript
const result = sqaure(-8);
```

> `result` would be **64**