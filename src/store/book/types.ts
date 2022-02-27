export type BooksState = {
  loading: boolean;
  error: Error | string | null;
  search: {
    text: string;
    books: Books[];
  };
};

export type Books = {
  id: string;
  volumeInfo: {
    title: string;
    authors: Array<string>;
    readingModes: {
      image: boolean;
    };
    publishedDate: string;
    description: string;
    categories: Array<string>;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
};
