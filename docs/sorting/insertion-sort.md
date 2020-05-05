---
id: insertion-insertionSort
title: Insertion Sort
sidebar_label: Insertion Sort
---

Sorts a given array in ascending order using [insertion sort](https://www.geeksforgeeks.org/insertion-sort/).

## Syntax

`insertionSort(a: number[] | string[]): number[] | string[]`

### Parameters

`a: number[] | string[]` - Given array to be sorted.

> Can be given an infinite number of parameters.

### Returns

`number[] | string[]` - The sorted array in ascending order.

### Error

> Throws an error if no array is given.

## Import

```javascript
import { insertionSort } from '@princedev/calculate';
```

## Examples

Basic usage with given numbers.

```javascript
const result = insertionSort([12,62,2,32,6]);
```

> `result` would be **[2, 6, 12, 32, 62]**

Sorting an array of strings.

```javascript
const result = insertionSort(['1000','A100','B200','2000','A1000']);
```

> `result` would be **["1000", "2000", "A100", "A1000", "B200"]**