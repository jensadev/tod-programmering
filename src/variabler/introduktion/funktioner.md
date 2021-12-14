---
title: Funktioner
eleventyNavigation:
    key: funktioner
    parent: introduktion
    order: 5
    excerpt:
---

{% intro %}

## Introduktion

I varje programmeringsspråk finns det ett stort antal inbyggda funktioner.

Funktionerna är där för att lösa vanligt förekommande problem eller behov. Det kan vara att skriva ut text till användaren eller att räkna ut matematiska funktioner.

I Python så finns det ett antal funktioner tillgängliga i grunden. En del funktioner kräver dock att en modul laddas in före användning.
För att ladda in en modul används `import`.

### Tänk på

-   Ibland kallas funktion för metoder, det är samma sak
-   Innan du börjar koda, undersök om en funktion redan finns i språket

{% endintro %}

{% instruktioner %}

## Instruktioner

Med en [IDE](/kom-igang/installation/visual-studio-code/) så går det att se vilka funktioner som finns i en modul.

Starta Visual Studio Code och testa.
Importera modulen math och skriv sedan `math.`, du bör nu få förslag på tillgängliga metoder i modulen.

```python
import math
```

Utan math kan `round()` användas för avrundning. Men i math modulen finns även metoderna `math.ceil()` och `math.floor()` för avrundning. Testa dem och jämför resultaten.

Python kommer även med ett stort antal funktioner för datatypen `string`, för att använda de vanligaste sträng metoderna behöver du inte importera någon modul.

```python
s = "MittNamn"
print(s.upper())
print(s.swapcase())

små = s.lower()
print(små.capitalize())
```

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter

### ⭐

#### Uppgift 1

Koda och använd dig av en eller flera matematiska standardfunktioner.

#### Uppgift 2

Kombinera en eller flera funktioner med `input()` och `print()`.

{% enduppgifter %}
