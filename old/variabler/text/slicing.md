---
title: Slicing 
eleventyNavigation:
    key: slicing
    parent: text
    order: 3
    excerpt: 
---
{% intro %}

## Introduktion

En slice eller slicing är i Python en sekvens av tecken. I fallet av en sträng så
rör det sig oftast om flera tecken.

För att skapa en slice så anges startindex, stopindex och steg.
Syntax för slice är ```sekvens[start:stop:steg]```.

### Tänk på
- Index värden är heltal
- Utelämnas start så är start 0
- Utelämnas stop så är stop längden på sekvensen
- Utelämnas steg så är steg 1

{% endintro %}

{% instruktioner %}

Skapa en fil att arbeta i, ```slicing.py```.

```python
s = "Programmering"
print(s[3:7]) // gram
print(s[:7]) // program
print(s[3:]) // grammering
print(s[::-1]) // gniremmargorp
```

På det här sättet kan en sträng delas upp och delarna kan exempelvis jämföras.

```python

if s[3:7] == "gram":
    print("Rätt")
else:
    print("Fel")
```

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Skriv ett program som tar inmatningen av för och efternamn.

Programmet ska skriva ut:
- initialer (index)
- tre första bokstäverna av förnamnet konkatenerat med de tre sista bokstäverna av efternamnet

### ⭐⭐

{% extra %}

#### Uppgift 2
Skriv ett program som kontrollerar om ett ord är ett [palindrom](https://sv.wikipedia.org/wiki/Palindrom).

{% endextra %}

{% enduppgifter %}