---
title: String
eleventyNavigation:
    key: string
    parent: text
    order: 1
    excerpt: 
---
{% intro %}

## Introduktion

En stor del av den data som hanteras av program är text. Datatypen för text och de flesta andra tecken är string ```str```, sträng.

En sträng kännetecknas av att värdet är omgivet av enkel- eller dubbelfnuttar. Det skrivs ```"värde"``` eller ```'värde'```.

### Tänk på

- Du kan inte räkna med strängar, men + lägger ihop strängar, det kallas konkatenering

{% endintro %}

{% instruktioner %}

## Instruktioner

Om du inte har skapat en ```📁övningsmapp``` för kursen så skapa en sådan nu.
Koppla detta sedan till ett GitHub-repository.

Om du vill så kan du skapa en undermapp med titeln ```📁text``` för det här området.

Skapa en fil att arbeta i, ```📄string.py```.

```python
name = "Rödluvan" # 'Rödluvan'
print(type(name))
message = "Vem ska gå till mormor? " + name
print(message)
```

Innehållet i en sträng kan även vara [unicode karaktärer](http://unicode.org/charts/).
En sträng kan också skrivas på flera rader.

```python
message = """Denna sträng kan skrivas \U000021B4
över flera rader.
"""
print(message)

message = "Jämför med "\
"det här \U0001F601."
print(message)
```

För att göra radbrytningar eller tabbar kan du använda dig av en escape-sekvens.

|Escape-sekvens|Förklaring|
|---|---|
|`\n`|Ny rad (newline)|
|`\t`|Tab (horisontal tab)|

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Skriv ett program som frågar användaren efter namn.

Skriv sedan ut en hälsning till användaren med namnet.

#### Uppgift 2

Formatera din utskrift över flera rader. Prova att kapitalisera namnet.

```namn.capitalize()```

{% enduppgifter %}