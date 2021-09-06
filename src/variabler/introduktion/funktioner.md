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
För att ladda in en modul används ```import```.

### Tänk på
- Ibland kallas funktion för metoder, det är samma sak
- Innan du kodar, finns funktionen du söker i språket redan

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

Med en [IDE](/kom-igang/installation/visual-studio-code.html) så går det att se vilka funktioner som finns i en modul.

Starta Visual Studio Code och testa.
Importera modulen math och skriv sedan ```math.```, du bör nu få förslag på tillgängliga metoder i modulen.

```python
import math
```

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Koda och använd dig av en eller flera matematiska standardfunktioner.

#### Uppgift 2

Kombinera matematiska funktioner med ```input()``` och ```print()```.

### ⭐⭐

{% extra %}




{% endextra %}

{% enduppgifter %}