---
id: cube
title: Cube
sidebar_label: Cube
---

Gets the cube of a given number.

## Syntax

`cube(a: number): number`

### Parameters

`a: number` - Given number to be cubed.

### Returns

`number` - The resulting cube.

### Error

> Throws an error if the length of arguments is not equal to 1.

## Import

```javascript
import { cube } from '@princedev/calculate';
```

## Examples

Basic usage with two given numbers.

```javascript
const result = cube(2);
```

> `result` would be **8**

```javascript
const result = cube(-8);
```

> `result` would be **-512**