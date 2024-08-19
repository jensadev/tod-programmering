---
title: Python
eleventyNavigation:
    key: python
    parent: installation
    order: 1
    excerpt: För att kunna använda Python på en dator behöver det installeras.
---

{% instructions %}

## Introduktion

Python kan du ladda ned från den officiella webbplatsen, [python.org](https://www.python.org).

### Tänk på

-   Att lägga till Python i din path

## Instruktioner

-   Ladda ned Python för din maskin från [python.org](https://www.python.org)
-   Kör installationsprogrammet

🛑 Kryssa i checkboxen för att lägga till Python i din path (du behöver sannolikt också välja **Disable path length limit**).

När installationen är färdig ska du kunna starta Python terminalen.

1. Tryck ned ⊞ (windows tangenten)
2. Skriv python
3. Starta programmet (enter)

Du kan nu testa att skriva kod i terminalfönstret som kommer att tolkas av Python.

```python
12 + 12
24
```

Det är viktigt att Python är installerat i din path, så att du kan starta programmet från vilken plats som helst i terminalen.


Du kan sedan avsluta Python genom att skriva `exit()`

{% endinstructions %}

{% questions %}

{% base %}

#### Uppgift 1

Varför är det viktigt att lägga till Python i din path?

#### Uppgift 2

Hur kan du testa om Python är installerat i din path?

{% endbase %}

{% endquestions %}

{% extra %}

 För att testa om du installerat Python i din path, starta först Powershell eller CMD.
Skriv sedan `python` i terminalen för att starta Python. Om programmet finns i systemets path så kommer det att startas.

Om Python saknas i systemets path, så kan du lägga till det manuellt, eller installera om Python (kom ihåg checkboxen).

{% endextra %}