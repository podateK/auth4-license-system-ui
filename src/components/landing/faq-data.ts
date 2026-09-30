export const FAQ_ITEMS = [
  { question: "Czy panel łączy się z produkcyjnym systemem?", answer: "Nie. To samodzielny, statyczny frontend bez endpointów API, bazy danych i mechanizmu logowania." },
  { question: "Czy widoczne licencje są prawdziwe?", answer: "Nie. Nazwy, serwery, wersje i statystyki są fikcyjnymi przykładami zapisanymi bezpośrednio w komponentach." },
  { question: "Czy przyciski pobierania działają?", answer: "Nie. Są wyłączone i służą wyłącznie do pokazania docelowego układu interfejsu." },
  { question: "Czy mogę użyć tego frontendu jako punktu startowego?", answer: "Tak. Warstwę danych i autoryzację należy jednak wdrożyć osobno, w prywatnym repozytorium i po niezależnym audycie bezpieczeństwa." },
] as const;
