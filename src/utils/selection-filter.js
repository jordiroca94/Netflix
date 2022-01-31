export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series.filter((el) => el.genre === "documentaries"),
      },
      {
        title: "Comedies",
        data: series.filter((el) => el.genre === "comedies"),
      },
      {
        title: "Children",
        data: series.filter((el) => el.genre === "children"),
      },
      {
        title: "Crime",
        data: series.filter((el) => el.genre === "crime"),
      },
      {
        title: "Feel Good",
        data: series.filter((el) => el.genre === "feel-good"),
      },
    ],
    films: [
      {
        title: "Drama",
        data: films.filter((el) => el.genre === "drama"),
      },
      {
        title: "Thriller",
        data: films.filter((el) => el.genre === "thriller"),
      },
      {
        title: "Children",
        data: films.filter((el) => el.genre === "children"),
      },
      {
        title: "Suspense",
        data: films.filter((el) => el.genre === "suspense"),
      },
      {
        title: "Romance",
        data: films.filter((el) => el.genre === "romance"),
      },
    ],
  };
}
