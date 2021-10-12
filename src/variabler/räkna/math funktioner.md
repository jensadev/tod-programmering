---
title: Math funktioner
eleventyNavigation:
    key: math funktioner
    parent: räkna
    order: 5
    excerpt: 
---

{% intro %}

## Introduktion

I det tidigare avsnittet om funktioner så introducerades kort några av de matematiska standard-funktionerna i Python. Det är funktioner som laddas in från modulen ```math```.

### Tänk på

- Importera math modulen med ```import math```
- Ibland kallas funktion för metoder, det är samma sak

{% endintro %}

{% instruktioner %}

## Instruktioner

Koda och testa ett antal matematiska standardfunktioner i Python.
För att använda dem behöver modulen ```math``` importeras.

Funktionera är sedan tillgängliga med punktnotation ```math.floor(värde```).

```python
import math

print(math.pi)

avrunda = math.ceil(math.pi)
print(avrunda)
```

Din [IDE](/kom-igang/installation/visual-studio-code.html) hjälper dig att se vilka funktioner som finns tillgängliga i en modul. Skriv modulens namn följt av punkt.

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Koda och använd dig av en eller flera matematiska standardfunktioner.

#### Uppgift 2

Kombinera matematiska funktioner med ```input()``` och ```print()```.

{% enduppgifter %}