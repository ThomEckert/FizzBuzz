# FizzBuzz

Ein einfaches NPM-Modul, das die klassische FizzBuzz-Logik in TypeScript implementiert.

## Inhaltsverzeichnis

1. [Über das Projekt](#über-das-projekt)
2. [Installationsanweisungen](#installationsanweisungen)
3. [Verwendung](#verwendung)
4. [Tests](#tests)
5. [Build-Prozess](#build-prozess)
6. [Beispiel](#beispiel)

## Über das Projekt

Das `fizzbuzz`-Modul implementiert die bekannte FizzBuzz-Logik und gibt ein Array von Strings zurück. Die Regeln sind:

- Für jede Zahl von 1 bis `n`:
  - Gib "Fizz" zurück, wenn die Zahl durch 3 teilbar ist.
  - Gib "Buzz" zurück, wenn die Zahl durch 5 teilbar ist.
  - Gib "FizzBuzz" zurück, wenn die Zahl durch 3 und 5 teilbar ist.
  - Gib die Zahl als String zurück, wenn keine der obigen Bedingungen zutrifft.

## Installationsanweisungen

1. **Voraussetzungen:** Stelle sicher, dass Node.js und npm installiert sind. Falls nicht, [lade Node.js hier herunter](https://nodejs.org/).

2. **Installation:**
   Führe folgenden Befehl in deinem Projektverzeichnis aus:

   npm install fizzbuzz

## Verwendung
Um das fizzbuzz-Modul in deinem Projekt zu verwenden, importiere es und rufe die entsprechende Funktion auf:

import { fizzBuzz } from "fizzbuzz";

console.log(fizzBuzz(15));
// Ausgabe:
// [
//   "1", "2", "Fizz", "4", "Buzz",
//   "Fizz", "7", "8", "Fizz", "Buzz",
//   "11", "Fizz", "13", "14", "FizzBuzz"
// ]

## Tests
Das Projekt enthält Unit-Tests, um sicherzustellen, dass die FizzBuzz-Logik korrekt funktioniert. Führe die Tests mit folgendem Befehl aus:

npm run test

Die Tests werden mit Jest durchgeführt. Der Testbericht wird direkt im Terminal angezeigt.

## Build-Prozess
Das Modul ist in TypeScript geschrieben und kann vor der Veröffentlichung oder Verwendung in JavaScript transpiliert werden. Verwende folgenden Befehl, um den Build-Prozess auszuführen:

npm run build

Dadurch wird der TypeScript-Code im Verzeichnis src transpiliert und in das dist-Verzeichnis exportiert.

## Beispiel
Hier ist ein Beispiel, wie du das fizzbuzz-Modul in einem Node.js-Projekt verwenden kannst:

Erstelle eine Datei index.ts mit folgendem Inhalt:

import { fizzBuzz } from "fizzbuzz";

const n = 20;
console.log(fizzBuzz(n));

Kompiliere die Datei, falls erforderlich:

npx tsc src/index.ts

Führe die kompilierte Datei aus:

node src/index.js

Die Ausgabe für n = 20 sollte wie folgt aussehen:

[  "1", "2", "Fizz", "4", "Buzz",  "Fizz", "7", "8", "Fizz", "Buzz",  "11", "Fizz", "13", "14", "FizzBuzz",  "16", "17", "Fizz", "19", "Buzz"]
