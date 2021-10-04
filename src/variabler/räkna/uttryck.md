---
title: Uttryck
eleventyNavigation:
    key: uttryck
    parent: räkna
    order: 4
    excerpt: 
---

{% intro %}

## Introduktion

Ett uttryck i programmeringen skrivs,
```operand operator operand```.

Operanden kan vara ett tal och operatorn det räknesätt som ska utföras.

### Tänk på
- Uttryckets värde beräknas först när programmet körs

{% endintro %}

{% instruktioner %}

## Instruktioner

I mappen ```📁räkna``` skapar du ```uttryck.py```.

För att använda formaterade strängar för att skriva ut olika uttryck använder du *f*. Detta kallas för f-strings.

```python
tal1 = 345.34234523532
print(f"Talet är {tal1:.2f}")

import math
print(f"Pi med 4 decimaler: {math.pi: .4f}")
```

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Du har i flera tidigare uppgifter använt dig av uttryck.

Identifiera ett eller flera uttryck du använt tidigare och skriv dem i kodfilen.

#### Uppgift 2

Skriv kod där användaren får mata in de värden som används i ett uttryck.

Skriv ut resultatet med en formaterad sträng.

{% enduppgifter %}