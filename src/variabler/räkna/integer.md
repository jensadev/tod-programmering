---
title: Integer
eleventyNavigation:
    key: integer
    parent: räkna
    order: 1
    excerpt: 
---

{% intro %}

## Introduktion

Integer står för heltal och förkortas ofta ```int``` i de flesta programmeringsspråk.

Om en variabel i Python tilldelas ett numeriskt värde utan decimaler så blir det ett heltal.

### Tänk på

- Heltal kan både vara positiva ```+``` och negativa ```-```
- För att konvertera en annan datatyp till integer använd ```int(värde)```

{% endintro %}

{% instruktioner %}

## Instruktioner

Om du inte har skapat en ```📁övningsmapp``` för kursen så skapa en sådan nu.
I den kan du skapa en undermapp med titeln ```📁räkna```.

I mappen ```📁räkna``` skapar du sedan en Python fil, som heter ```📄integer.py```.

```python
tal1 = 12
tal2 = 24

summa = tal1 + tal2

print(type(tal1))
print(type(summa))

print(summa)
print(f"Summan av talen är {summa}")
```

Prova att koda med inmatning till heltal, du behöver då konvertera värdet.

```python
tal1 = input("Skriv in ett heltal: ")
print(type(tal1))

tal1 = int(tal1)
print(type(tal1))
```

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Koda och använd dig av flera variabler av typen integer.
Skriv ut summan av flera variabler och använd dig av formaterade strängar.

Din utskrift ska se ut som följer: ```Summan av 12 + 24 är 36```.

### ⭐⭐

Koda och använd dig av input för att mata in två tal.
Programmet ska sedan räkna ut summan och skriva ut den.
Formatera utskriften.

{% enduppgifter %}