---
title: Med uttryck
eleventyNavigation:
    key: med uttryck
    parent: räkna
    order: 4
    excerpt:
---

{% intro %}

## Introduktion

Ett uttryck i programmeringen skrivs,
`operand operator operand`.

Operanden kan vara ett tal och operatorn det räknesätt som ska utföras.

Men uttryck används till så mycket mer i programmeringen. Bland annat så används uttryck för att jämföra värden och för att se om utfall av uttryck exempelvis är sant eller falskt.

### Tänk på

-   Uttryckets värde beräknas först när programmet körs

{% endintro %}

{% instruktioner %}

## Instruktioner

Skapa en fil att arbeta i, `uttryck.py`.

Uttryck finns överallt i programmeringen och är grundläggande för programmets funktion.
I nästa alla tidigare program du har skrivit kan du se hur du skapar ett uttryck.

Du kan använda formaterade strängar för att skriva ut resultatet av uttryck. För att göra det används _f_. Detta kallas för f-strings.

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
Redigera hur koden skriver ut resultat, använd f-strings.

#### Uppgift 2

Koda ett program där användaren ska mata in ett tal mellan 1 och 10.

Skriv ut värdet med en formaterad sträng. `Du skrev: 12`

{% enduppgifter %}

{% facit %}

I Python kan `assert` kommandot användas för att kontrollera uttryck.
För att kontrollera svaret på en matematisk uträkning så kan `assert` användas med större än operatorn, `>`.

```python
assert 24 > 12, "24 är inte större än 12"
```

Med hjälp av assert går det även att öva tilldelning av variabler.

```python
a = 12
b = 24
a = b
# Vad har a för värde?
assert a == 24, "Någonting är tokigt"
```

Behöver du förstå och se exemplet tydligare så prova gärna att köra det med "Run and Debug" i VSCode.

{% endfacit %}
