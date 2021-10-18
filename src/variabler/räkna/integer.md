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
Koppla detta sedan till ett GitHub-repository.

Om du vill så kan du skapa en undermapp med titeln ```📁räkna``` för det här avsnittet.

Skapa sedan en Python fil, som heter ```📄integer.py```.

```python
tal1 = 12
tal2 = 24

summa = tal1 + tal2

print(type(tal1))
print(type(summa))

print(summa)
print(f"Summan av talen är {summa}")
```

Prova att koda så att användaren kan mata in ett heltal, det gör du med ```input(meddelande)```.
Värdet från ```input()``` är alltid en sträng, så värdet behöver konverteras om du ska kunna räkna med det.

Konverteringen av värdet görs med ```int(värde)```.

```python
tal1 = input("Skriv in ett jämnt heltal: ")
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

#### Uppgift 2

Koda och använd dig av input för att mata in två tal.
Programmet ska sedan räkna ut summan och skriva ut den.
Formatera utskriften.

{% enduppgifter %}

{% facit %}

För att programmatiskt kontrollera en inmatning kan du använda dig av Pythons assert. Det är en debug-funktion som finns för att hjälpa dig skriva bättre kod. Assert kontrollerar om ett uttryck är sant, om inte så kastar den ett undantag.

För att kontrollera summan från de första exemplet kan du använda assert.
Om summan är 36 (12+24) så händer inget, men är summan något annat så skrivs den följande texten ut "Summan är inte 36".
```python
assert summa == 36, "Summan är inte 36"
```

I den andra uppgiften kan du använda assert för att kontrollera att talet faktiskt är jämnt.
Här används modulo operatorn för att undersöka om talet är jämnt.
```python
assert tal1 % 2 == 0, "Talet är inte jämt"
```

Modulo räknar ut resten av division. Om talet är jämt så blir resten 0. Det dubbla likamedtecknet jämför resultatet med 0, om uttrycket är sant så är talet jämt.

{% endfacit %}
