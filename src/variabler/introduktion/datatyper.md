---
title: Datatyper
eleventyNavigation:
    key: datatyper
    parent: introduktion
    order: 2
    excerpt:
---

{% intro %}

## Introduktion

En variabel innehåller data. Den data som en variabel innehåller kan vara av olika typer. I Python får en variabel sin typ beroende på det värde som variabeln tilldelas.

Tilldelas en variabel data med text så blir typen `string` och är det ett numeriskt värde så blir typen antingen `int` eller `float`.

### Tänk på

-   En variabel får sin typ av värdet
-   Typen kan ändras
-   Variabler kan återanvändas

{% endintro %}

{% instruktioner %}

## Instruktioner

Koda i [Python](/kom-igang/installation/python.html)-terminalen eller [Replit](/kom-igang/installation/online.html). Koden behöver inte sparas.
I [föregående uppgift](../variabler-och-varden/) så skapade du variabler av typen int.
Skapa nu en eller flera variabler med olika typer.

Använd dig av funktionen `type(variabel)` för att undersöka variablers typer.

För att se en variabels värde skriver du namnet (i terminalen) eller skriver ut variabeln med funktionen `print(variabelnamn)`.

```python

integer1 = 23
integer2 = 12
summa = integer1 + integer2
type(summa)
print(summa)

float1 = 12.2
summa = summa + float1
```

I exemplet ovan så används numeriska variabler.
Prova nu variabler med typen `string`.

Att "printa" en variabel kan även formateras.

```python

namn = "Lisa"
print(namn)
print(f"Hej på dig {namn}")
```

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter

### ⭐

#### Uppgift 1

Skriv koden och testa variabler med olika typer.

Undersök typen med `type()` metoden.

#### Uppgift 2

Prova på att använda variabler av typen `string`.

Skriv ut strängar med print.

### ⭐⭐

{% extra %}

#### Uppgift 3

Använd variabler av text- och numerisk typ tillsammans.
Skriv ut en födelsedags hälsning med `print()` som innehåller:

-   För och efternamn
-   Födelsedag
-   Födelsemånaden i text

{% endextra %}

{% enduppgifter %}
