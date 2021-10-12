---
title: Uttryck
eleventyNavigation:
    key: uttryck
    parent: introduktion
    order: 4
    excerpt: 
---
{% intro %}

## Introduktion

Inom programmering används uttryck på flera sätt. Det kan vara numeriska uttryck (precis som i matematiken)eller logiska uttryck (jämföra två värden till exempel).

Uttryck skrivs ```operand operator operand``` och värdet beräknas när programmet körs, inte när koden skrivs.

En operand kan vara:
- ett direkt värde, ```12```
- en variabel, ```tal```
- variabler kan vara av olika typer, inte bara numeriska

### Tänk på
- Uttryckets form, ```operand operator operand```
- Vad resultatet ska användas till

{% endintro %}

{% instruktioner %}

## Instruktioner

Koda i [Python](/kom-igang/installation/python.html)-terminalen eller [Replit](/kom-igang/installation/online.html). Koden behöver inte sparas.

Skriv och repetera flera aritmetiska uttryck.
Använd dig av de fyra räknesätten.
Du kan läsa data från användaren med funktionen ```input()```. För att kunna räkna med värdet behöver det omvandlas till en numerisk datatyp.

```python
tal1 = input("Skriv ett heltal: ")
tal2 = input("Skriv ett tal till: ")
summa = int(tal1) + float(tal2)
print(f"Summan är: {summa}")
```

Ett logiskt uttryck kan vara att jämföra två variabler.
Resultatet av ett sådant uttryck är antingen **sant** eller **falskt**.

```python
tal1 = 12
tal2 = 24
summa = tal1 + tal1

print(tal1 == summa)
print(tal2 == summa)
```

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Koda ett eller flera numeriska uttryck.
Använd dig av ```input()```.

#### Uppgift 2

Jämför variabler/värden och skriv ut resultatet.

{% enduppgifter %}