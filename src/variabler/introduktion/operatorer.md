---
title: Operatorer
eleventyNavigation:
    key: operatorer
    parent: introduktion
    order: 3
    excerpt:
---

{% intro %}

## Introduktion

Inom programmering används operatorer för att utföra olika operationer på variabler. Operatorer är väldigt vanliga och används i alla programmeringsspråk.

Operatorer representeras av olika tecken, se tabellen under instruktioner.

### Tänk på

-   Lär dig de olika operatorerna och dess betydelse
-   Skillnaden mellan `=` och `==`
-   `+` operatorn kan även användas på strängar

{% endintro %}

{% instruktioner %}

## Instruktioner

Koda i [Python](/kom-igang/installation/python.html)-terminalen eller [Replit](/kom-igang/installation/online.html). Koden behöver inte sparas.

Skriv kod för att se hur operatorer fungerar. Använd både aritmetiska operatorer och jämförelseoperatorer.

Operander, till exempel en siffra, bildar tillsammans med en operator ett uttryck.
Efter modellen `operand operator operand`.

Här följer ett antal exempel på hur aritmetiska operatorer kan användas för att bilda uttryck.

```python
12 + 12
12 - 12
12 == 12
tal1 = 12
tal1 == 24
```

## Operatorer

### Aritmetiska

| Operator | Förklaring                   |
| -------- | ---------------------------- |
| `+`      | Addition                     |
| `-`      | Subtraktion                  |
| `*`      | Multiplikation               |
| `/`      | Division                     |
| `//`     | Division kapat till heltal   |
| `%`      | Rest vid division            |
| `**`     | Upphöjt till andra operatorn |

### Jämförande

| Operator | Förklaring    |
| -------- | ------------- |
| `==`     | Lika med      |
| `!=`     | Inte lika med |
| `<`      | Mindre än     |
| `>`      | Större än     |

### Tilldelning

| Operator | Förklaring                                                                                                 |
| -------- | ---------------------------------------------------------------------------------------------------------- |
| `=`      | Det enkla lika med tecknet är en tilldelningsoperator. Den används för att tilldela en variabel ett värde. |

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter

### ⭐

#### Uppgift 1

Koda och testa aritmetiska operatorer genom att skriva aritmetiska uttryck.

#### Uppgift 2

Koda och testa jämförande operatorer.
Använd variabler av typen `string` för det.

{% enduppgifter %}

{% facit %}

För att jämföra om två värden är samma används likamed operatorn `==`.

```python
namn1 = "Frasse"
namn2 = "Melinda"

print(namn1 == namn2)
```

{% endfacit %}
