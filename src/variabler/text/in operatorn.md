---
title: In operatorn
eleventyNavigation:
    key: in operatorn
    parent: text
    order: 4
    excerpt: 
---
{% intro %}

## Introduktion

När du arbetar med strängar så är det vanligt att du behöver loopa igenom alla tecken.
För att göra detta så kan en for-sats tillsammans med in operatorn användas.

Syntax ser ut som följer:
```python
for tecken in sträng:
    print(tecken)
```

Läs detta som, för varje tecken i strängen.

### Tänk på
- Första varvet i iterationen är index 0
- Andra varvet i iterationen är index 1
- osv.


{% endintro %}

{% instruktioner %}

## Instruktioner

Skapa en fil att arbeta i, ```in-operatorn.py```.

```python
s = "programmering"
for tecken in s:
    print(tecken)
```


{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Redigera koden i instruktionen. Lägg till så att den räknar antalet bokstäver i strängen.

#### Uppgift 2

Skapa ett program som räknar antalet blanksteg, ```" "```,  i en sträng.

### ⭐⭐

{% extra %}

#### Uppgift 3

Skapa ett program som söker efter ett angivet tecken i en sträng.

Programmet ska ange vilken plats tecknet finns på.

{% endextra %}

{% enduppgifter %}