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

Python är ett tolkat programmeringsspråk. Det betyder att du kan skriva kod i ett textdokument och sedan köra det i en terminal. Python är ett av de mest populära programmeringsspråken i världen och används för allt från webbprogrammering till maskininlärning.

Python kan du ladda ned från den officiella webbplatsen, [python.org](https://www.python.org).

### Tänk på

-   Att lägga till Python i din path under installationen

## Instruktioner

-   Ladda ned Python för din maskin från [python.org](https://www.python.org)
-   Kör installationsprogrammet


{% hint "warning" %}
Kryssa i checkboxen för att lägga till Python i din path (du behöver sannolikt också välja **Disable path length limit**).
Det är viktigt för att du ska kunna köra Python från terminalen.
{% endhint %}

När installationen är färdig ska du kunna starta Python terminalen.

1. Tryck ned ⊞ (windows tangenten)
2. Skriv python
3. Starta programmet (enter)

Du kan nu testa att skriva kod i terminalfönstret som kommer att tolkas av Python.

```python
12 + 12
24
```

För att testa om du installerat Python i din path, starta först Powershell eller CMD.
Skriv sedan `python` i terminalen för att starta Python. Om programmet finns i systemets path så kommer det att startas.

Om Python saknas i systemets path, så kan du lägga till det manuellt, eller installera om Python (kom ihåg checkboxen).

Du kan sedan avsluta Python genom att skriva `exit()`

{% endinstructions %}

{% questions %}

{% base %}

#### Uppgift 1

Vad är Python och varför behöver du installera det?

#### Uppgift 2

Vad är en path? Varför behöver du lägga till Python i din path?

{% endbase %}

{% endquestions %}