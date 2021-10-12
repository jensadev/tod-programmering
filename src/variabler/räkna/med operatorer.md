---
title: Med operatorer
eleventyNavigation:
    key: med operatorer
    parent: räkna
    order: 3
    excerpt: 
---

{% intro %}

## Introduktion

För att kunna räkna med variabler och värden i ett programmeringsspråk används olika operatorer.
Med operatorer menas att de tecken som används bland annat för de fyra räknesätten ```+ - * /```.

Dessa tecken är olika operatorer i programmeringsspråket och låter dig bland annat koda aritmetiska uttryck. De kallas för aritmetiska operatorer.

### Tänk på

- Operatorerna ```* /``` har högre prioritet än ```+ -```

{% endintro %}

{% instruktioner %}

## Instruktioner

I mappen ```📁räkna``` skapar du ```operatorer.py```.

Du har i flera uppgifter tidigare använt dig av operatorer, så detta är främst repetition.

Skriv ett eller flera program som använder aritmetiska operatorer.

|Operator|Förklaring|
|---|---|
|`+`|Addition|
|`-`|Subtraktion|
|`*`|Multiplikation|
|`/`|Division|
|`//`|Division kapat till heltal|
|`%`|Rest vid division|
|`**`|Upphöjt till andra operatorn|

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Undersök vad de olika aritmetiska operatorerna gör.
Använd variabler av typen ```int``` och ```float```.

Du kan kontrollera en variabels typ med type metoden, ```print(type(VARIABELNAMN))```.

#### Uppgift 2

Vad händer om du använder aritmetiska operatorer på variabler av typen ```string```.

{% enduppgifter %}

{% facit %}

En variabel med typen ```string``` är en variabel som kan innehålla alla former av tecken. Det är inte en numerisk datatyp och den går inte att räkna med.
Strängar kännetecknas av att värdet är omgivet av enkel- eller dubbelfnuttar.

```python
sträng = "Hejsan"
sträng = 'Hej'
```

För att kontrollera en variabels typ kan vi använda ```assert``` och ```type()``` tillsammans. 
```python
summa  = 23 / 3
assert type(summa) == float, "Summan är inte en float"
```

Här används likamed operatorn ```==``` för att se om resultatet av uttrycket ```type(summa) == float``` är ```True``` eller ```False```.

{% endfacit %}