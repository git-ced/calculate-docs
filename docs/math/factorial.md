---
id: factorial
title: Factorial
sidebar_label: Factorial
---

Gets the factorial of a given number.

## Syntax

`factorial(a: number): number`

### Parameters

`a: number` - Given number to be evaluated.

### Returns

`number` - The resulting number.

### Error

> Throws an error if the length of arguments is not equal to 1.

## Import

```javascript
import { factorial } from '@princedev/calculate';
```

## Examples

Basic usage, getting the factorial of 0 and 1

```javascript
const result = factorial(0);
```

> `result` would be **1**

```javascript
const result = factorial(1);
```

> `result` would be **1**

Getting the factorial of any numbers greater than 1

```javascript
const result = factorial(4);
```

> `result` would be **24**