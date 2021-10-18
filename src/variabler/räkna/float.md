---
title: Float
eleventyNavigation:
    key: float
    parent: räkna
    order: 2
    excerpt: 
---
{% intro %}

## Introduktion

Float står för flyttal och skrivs ```float``` i Python. I Python är en float ett tal som innehåller en *decimalpunkt*.

Om en variabel i Python tilldelas ett numeriskt värde med en *decimalpunkt* så kommer det att bli en float.

### Tänk på

- Använd en *decimalpunkt* och inte ett *decimalkomma*
- För att konvertera en annan datatyp till float använd ```float(värde)```


{% endintro %}

{% instruktioner %}

## Instruktioner

Skapa en fil att arbeta i, ```📄float.py```.

```python
pris_utan_moms = 250
moms = .25

pris_med_moms = pris_utan_moms * (1 + moms)

print(f"Priset med moms är {pris_med_moms}")
```

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Skriv av programmet ovan.

Redigera sedan programmet så att användaren kan mata in momsen.

#### Uppgift 2
Gör så att användaren kan mata in momsen i procent.
Ditt program ska sedan omvandla procentsatsen så att den går att räkna med.

{% enduppgifter %}

{% facit %}

För att omvandla procentsatsen till decimaltal så dela den med 100.

```python
procent = 75
decimal = procent / 100
```

{% endfacit %}