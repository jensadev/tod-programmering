---
title: String funktioner
eleventyNavigation:
    key: string funktioner
    parent: text
    order: 5
    excerpt:
---

{% intro %}

## Introduktion
Python innehållet ett stort antal inbyggda funktioner som du kan använda.
För strängar finns det funktioner dels för att kontrollera värdet, men även för 
att ändra strängens innehåll.
Att kunna hantera strängar är viktigt och vi kan med lätthet spendera hela kursen
på att enbart arbeta med strängar.
### Tänk på
- En sträng är en sekvens av tecken
- Hitta fler metoder på [docs.python.org](https://docs.python.org/3/library/stdtypes.html?highlight=str.find#string-methods)

{% endintro %}

{% instruktioner %}

## Instruktioner

Skapa en fil att arbeta i, `string_funktioner.py`.

Kopiera och testa följande kod, som innehåller valet att fortsätta eller avsluta.
```python
accept = input("Vill du fortsätta [J/n]")

if accept == "J" or accept == "j":
    print("Välkommen tillbaka!")
else:
    print("Hejdå!")
```

Med sträng-funktionen ```.replace()``` kan du ändra ett värde i en sträng.
```python
text = "Hej på dig!"
text = text.replace("på", "i")
```

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter

### ⭐

#### Uppgift 1
Förenkla if-satsen i exempelprogrammets villkor med sträng funktionen ```.lower()```.
Lower ändrar bokstavens storlek till gemener, det vill säga små (lowercase).

#### Uppgift 2
Skapa en inmatning av ett namn, testa att använda ```capitalize()``` och ```upper()```.
Hur kan du använda indexering från föregående uppgift för att ge samma effekt som ```capitalize()```?
### ⭐⭐
#### Uppgift 3
Skriv ett program som söker efter ett tecken i en text, använd ```find()```.
Vill du koda ett program som söker efter ett ord, använd ```needle in haystack```.

Titta i Python manualen om [str.find()](https://docs.python.org/3/library/stdtypes.html?highlight=str.find#str.find).

{% extra %}

{% endextra %}

{% enduppgifter %}
