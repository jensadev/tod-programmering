---
title: Indexering
eleventyNavigation:
    key: indexering
    parent: text
    order: 2
    excerpt: För att komma åt enskilda tecken i en sträng används indexering.
---

{% intro %}

## Introduktion

En sträng är en sekvens i Python. Med det menas att det är en lista med tecken. Varje tecken är alltså ett värde i sig.
Varje värde har en index plats och den börjar från 0.

Så i en sträng `"hej"` har index 0 värde `"h"` och index 1 värde `"e"` och index 2 värde `"j"`.

### Tänk på

-   Att index börjar på 0
-   Du kommer åt värdet med `variabelnamn[index]`
-   Du kan även komma åt index från strängens slut, då börjar det på -1

{% endintro %}

{% instruktioner %}

## Instruktioner

Skapa en fil att arbeta i, `indexering.py`.

```python
s = "En makalös sträng"
print(s[0], s[-1])
```

Eftersom strängens index börjar på 0 så kan vi skriva en loop för att skriva ut varje tecken.

```python
for i in range(0, len(s)):
    print(s[i])
```

Python innehåller även listor över tecken i form av ascii tabeller. Det går att använda dessa för att skriva ut tecken.

```python
import string
chars = string.ascii_lowercase
print(chars)
```

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter

### ⭐

#### Uppgift 1

Skriv av koden, prova att köra den och se hur den fungerar.

Skapa en variabel för ditt namn och skriv ut den baklänges.

#### Uppgift 2

Skriv ut `hej` men hämta de tecken som behövs från `string.ascii_lowercase` och använd indexplatserna.

### ⭐⭐

{% extra %}

#### Uppgift 3

Loopa igenom en sträng och skriv ut varannan bokstav.
Du kan påverka hur många steg loopen tar i range-funktionen.

`range(0, len(s), 2)`

Om du kan spara detta i en ny sträng som du sedan skriver ut.

{% endextra %}

{% enduppgifter %}

{% facit %}

För att lägga till tecken, eller sträng värden i en ny sträng kan du konkatenera strängarna med `+`.

```python
s = "Hej"
s = s + "!"
print(s)

s = "Hej"
s += "!"
print(s)
```

{% endfacit %}
