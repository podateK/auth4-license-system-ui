# Licence System UI Demo

Publiczna, statyczna prezentacja interfejsu panelu licencji. Repozytorium nie
zawiera backendu, endpointów API, integracji zewnętrznych, konfiguracji
wdrożeniowej, sekretów ani prawdziwych danych użytkowników.

## Uruchomienie

```bash
npm install
npm run dev
```

Produkcję można wygenerować jako statyczne pliki:

```bash
npm run build
```

Wynik znajdzie się w katalogu `out`.

## Zakres

- landing page produktu,
- statyczny panel demonstracyjny pod `/demo`,
- statyczny panel administracyjny pod `/admin`,
- fikcyjne dane przechowywane wyłącznie w komponentach frontendu,
- brak logowania, bazy danych, pobierania plików i operacji serwerowych.

Przyciski operacyjne w panelu są celowo wyłączone.
