python3 - <<'PY'
from pathlib import Path

content = r'''# Parleto Recruitment Challenge — JavaScript

## Status

- Branch: `recruitment/parleto`
- Solution: `solution.js`
- Final dataset result: **666172.0**
- Real dataset size: **423,333,424 bytes**
- Final measured execution time: **1.72 s**
- Challenge date: October 2026

---

# Original challenge

## Task 1

Write function `task1` which will find first match.

Use only stdlib.

Assumptions for `data`:

- has key `value` which should be returned at full match
- keys in `search` must be same as in header of data; if not raise exception with message `Key mismatch`
- name (except for `value`) and order of columns are not fixed
- if no match is found, return `'-1'`
- add some memory efficient caching if needed

Example:

```javascript
const data = "side,currency,value\nIN,PLN,1\nIN,EUR,2\nOUT,ANY,3";

task1({ side: "IN", currency: "PLN" }, data) === "1";

task1({ side: "IN", currency: "GBP" }, data) === "-1";
```

# Parleto JavaScript Challenge — MID Level Training

## Co to był za challenge?

Zadanie rekrutacyjne polegało na napisaniu dwóch funkcji JavaScript pracujących na bardzo dużych danych tekstowych w formacie podobnym do CSV.

Nie chodziło tylko o uzyskanie poprawnego wyniku.

Rozwiązanie było automatycznie oceniane również pod względem:

- szybkości działania,
- zużycia pamięci,
- pracy na milionach rekordów,
- pracy z setkami kolumn,
- poprawnej obsługi edge cases,
- wydajności algorytmu.

Można było używać wyłącznie standardowej biblioteki.

---

# TASK 1 — `task1`

Funkcja otrzymuje:

```javascript
task1(search, data);
```

Przykład danych:

```text
side,currency,value
IN,PLN,1
IN,EUR,2
OUT,ANY,3
```

Przykład wyszukiwania:

```javascript
task1({ side: "IN", currency: "PLN" }, data);
```

Wynik:

```text
1
```

Funkcja musi znaleźć **pierwszy pełny match** i zwrócić `value`.

Jeżeli nic nie znajdzie:

```text
-1
```

Jeżeli `search` zawiera kolumnę, której nie ma w nagłówku:

```text
Key mismatch
```

Kolejność kolumn nie jest stała.

Czyli kod nie może zakładać:

```text
side = kolumna 0
currency = kolumna 1
value = kolumna 2
```

Trzeba najpierw przeczytać header i ustalić indeks każdej kolumny.

---

# ANY

W przykładzie znajdował się rekord:

```text
OUT,ANY,3
```

oraz wyszukiwanie:

```javascript
{
  side: 'OUT',
  currency: 'EUR'
}
```

`ANY` w danych zostało więc potraktowane jako wildcard:

```text
ANY = dowolna wartość
```

---

# TASK 2 — `task2`

Druga funkcja otrzymuje listę wyszukiwań:

```javascript
task2(keys, data);
```

Dla każdego znalezionego `value` trzeba nadać wagę:

```text
wartość nieparzysta -> 10
wartość parzysta    -> 20
```

Następnie policzyć średnią ważoną i zwrócić ją jako string z jednym miejscem po przecinku.

Przykład:

```text
value = 10 -> weight 20
value = 11 -> weight 10
```

Obliczenie:

```text
(10 * 20 + 11 * 10) / 30
= 10.333...
= 10.3
```

---

# Prawdziwy dataset

Plik użyty w challenge’u po rozpakowaniu miał:

```text
423,333,424 bytes
```

czyli około:

```text
423 MB
```

Header:

```text
a,b,c,d,e,value
```

Szukane rekordy:

```javascript
[
	{
		a: 862984,
		b: 29105,
		c: 605280,
		d: 678194,
		e: 302120,
	},
	{
		a: 20226,
		b: 781899,
		c: 186952,
		d: 506894,
		e: 325696,
	},
];
```

Znalezione wartości:

```text
694342
638002
```

Obie są parzyste, więc:

```text
weight = 20
```

Wynik:

```text
(694342 * 20 + 638002 * 20) / 40
= 666172.0
```

Finalny wynik:

```text
666172.0
```

---

# Problemy, które trzeba było rozwiązać

## Dynamiczne kolumny

Nie wolno zakładać stałej pozycji kolumn.

Trzeba zbudować mapowanie:

```text
nazwa kolumny -> index
```

## CRLF

Realny plik używał końców linii CRLF.

Bez poprawnej obsługi parser mógł zobaczyć:

```text
value\r
```

zamiast:

```text
value
```

i zwrócić:

```text
Key mismatch
```

## Duży dataset

Nie można bezmyślnie robić:

```javascript
data.split("\n");
```

i później:

```javascript
row.split(",");
```

dla każdego rekordu i setek kolumn.

Przy setkach MB / milionach rekordów powstaje ogromna liczba dodatkowych stringów i obiektów.

## Wielokrotne skanowanie

`task2` nie powinien wykonywać pełnego przeszukania 423 MB osobno dla każdego klucza.

Lepsze rozwiązanie:

```text
parse header
      ↓
prepare searches
      ↓
ustal potrzebne kolumny
      ↓
jeden przebieg przez dataset
      ↓
sprawdzaj wszystkie niezakończone wyszukiwania
      ↓
wszystko znalezione
      ↓
STOP
```

## Early termination

Jeżeli wszystkie potrzebne rekordy zostały znalezione, nie ma sensu czytać pozostałych danych.

---

# Wydajność

Pierwsza wersja:

```text
3.14 s
```

Po optymalizacji:

```text
1.72 s
```

Realny dataset:

```text
~423 MB
```

Poprawny wynik:

```text
666172.0
```

---

# Dlaczego traktujemy to jako MID-level?

Nie dlatego, że napisanie dwóch funkcji jest samo w sobie Mid-level.

Poziom podnosi cały zestaw wymagań:

```text
miliony rekordów
+
setki kolumn
+
CPU
+
memory
+
dynamiczny schema
+
edge cases
+
423 MB danych
+
optymalizacja algorytmu
+
profilowanie
```

Dlatego w naszym treningu klasyfikujemy ten challenge jako:

# MID-LEVEL JAVASCRIPT / ALGORITHMS / PERFORMANCE

Mid developer nie powinien tylko doprowadzić kodu do wyniku.

Powinien umieć wyjaśnić:

- dlaczego algorytm działa,
- gdzie traci CPU,
- gdzie alokuje pamięć,
- jak zmniejszyć liczbę przebiegów,
- jak ograniczyć tworzenie obiektów,
- jak znaleźć edge case,
- jak zmierzyć wydajność,
- jakie są kompromisy rozwiązania.

---

# Czego muszę się nauczyć?

### JavaScript

Muszę dobrze rozumieć:

```text
String
Array
Object
Map
Set
loops
indexOf
slice
charCodeAt
Object.keys
Object.entries
Number
toFixed
exceptions
module.exports
```

### Algorytmy

Muszę rozumieć:

```text
linear search
single-pass algorithms
early termination
lookup tables
index mapping
nested loops
time complexity
memory complexity
```

### Parsing

Muszę potrafić sam napisać parser dla:

```text
header
rows
columns
LF
CRLF
dynamic column order
```

### Performance

Muszę rozumieć różnicę między:

```javascript
data.split("\n");
```

a skanowaniem danych bez tworzenia ogromnej tablicy.

Muszę rozumieć koszt:

```text
nowych arrays
nowych Maps
nowych strings
slice()
split()
wielokrotnych przebiegów
```

### Debugging

Muszę potrafić znaleźć problem typu:

```text
value
```

vs:

```text
value\r
```

i sam dojść do tego, dlaczego program zwraca `Key mismatch`.

### Benchmarking

Muszę umieć sprawdzić:

```text
execution time
CPU
memory
```

i porównać dwie implementacje.

---

# Jak będziemy się tego uczyć?

Nie uczymy się finalnego `solution.js` na pamięć.

Challenge zostanie później zrobiony ponownie **od pustego pliku**.

Kolejność:

```text
1. Requirement
2. Zaprojektuj task1
3. Header parser
4. Column indexes
5. Search
6. Key mismatch
7. No match
8. ANY
9. CRLF
10. task2
11. Weighted average
12. Edge cases
13. Duży dataset
14. Benchmark
15. Znajdź bottleneck
16. Optymalizacja
17. Memory analysis
18. Final refactor
19. Code review
20. Obrona rozwiązania
```

---

# MID CHECK

Challenge uznajemy za naprawdę opanowany dopiero wtedy, kiedy potrafię dostać podobne zadanie i bez gotowego rozwiązania przejść przez:

```text
ANALYSE
   ↓
DESIGN
   ↓
IMPLEMENT
   ↓
TEST
   ↓
DEBUG
   ↓
PROFILE
   ↓
OPTIMISE
   ↓
EXPLAIN
```

Muszę również umieć odpowiedzieć:

1. Jaka jest złożoność czasowa `task1`?
2. Jaka jest złożoność `task2`?
3. Gdzie program zużywa pamięć?
4. Dlaczego `split()` może być problemem?
5. Dlaczego indeksujemy kolumny?
6. Dlaczego kolejność kolumn nie ma znaczenia?
7. Dlaczego jeden przebieg jest lepszy od wielu?
8. Jak działa `ANY`?
9. Co spowodował CRLF?
10. Co daje early termination?
11. Jak przetestować edge cases?
12. Jak zmierzyć CPU i RAM?
13. Jak obsłużyć plik większy niż dostępny RAM?
14. Jak przepisać rozwiązanie na streaming?
15. Jak obronić wszystkie decyzje podczas code review?

---

# Cel

Nie chodzi o zapamiętanie:

```text
666172.0
```

ani o zapamiętanie kodu.

Celem jest dojście do poziomu, na którym podobny challenge potrafię:

**sam przeanalizować, napisać, zdebugować, zoptymalizować i obronić technicznie.**

To jest materiał treningowy do osiągnięcia poziomu **Mid Developer**.

Finalne rozwiązanie znajduje się w:

```text
solution.js
```
