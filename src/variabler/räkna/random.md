---
title: Random
eleventyNavigation:
    key: random
    parent: räkna
    order: 6
    excerpt:
---

{% intro %}

## Introduktion

Python har en modul för att generera slumptal, den heter random. Modulen kan skapa så kallade pseudoslumpade tal. Med pseudoslumpat menas att modulen inte skapar ett helt slumpmässigt tal, men det är tillräckligt slumpmässigt.
Slumptalet som skapas är baserat på systemets tid.

### Tänk på

-   Ladda modulen random, `import random`
-   Eftersom talet inte är helt slumpmässigt ska det inte användas i säkerhetssammanhang

{% endintro %}

{% instruktioner %}

## Instruktioner

Skapa en fil att arbeta i, `gissa.py`. Döp inte filen till `random.py` för då kommer Python försöka ladda den som en modul.

Kopiera koden från delen [Med uttryck](med-uttryck.html) där du bad användaren mata in ett tal mellan 1 till 10.
Du ska nu bygga vidare på detta program.

Inmatningen är en gissning och vi ska nu använda random modulen för att slumpa fram rätt svar.
För att skapa ett slumpmässigt heltal (int) används metoden `randint()`. Metoden kräver två parametrar, det minstal talet och det största.

```python
import random
slump_tal = random.randint(1, 10)
print(slump_tal)
```

Det slumpade talet behöver sedan jämföras med användarens inmatning och resultatet skrivs sedan ut.

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter

### ⭐

#### Uppgift 1

Skriv programmet.

### ⭐⭐

{% extra %}

#### Uppgift 2

Använd val, `if` och `else` för att skriva ut olika meddelanden till användaren beroende på om gissningen var rätt eller fel.

{% endextra %}

{% enduppgifter %}

{% facit %}

Val i kod skrivs med `if` och `else`. Ett sätt att läsa den koden är:

```
OM uttryck är SANT
    utför
ANNARS
    utför
```

Syntax och kod för att skriva ut användarens gissning blir alltså.

```python
if gissning == slump_tal:
    print("Rätt!")
else:
    print("Fel!")
```

**Ps.** Glöm inte att omvandla inmatningen till heltal.

{% endfacit %}
