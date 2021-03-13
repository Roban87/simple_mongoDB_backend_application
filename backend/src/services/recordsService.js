import { recordsRepo } from '../repositories';

export const recordsService = {

  getAllBooks: async () => {
    const books = await recordsRepo.getAllBooks();
    return books;
  },

  getBookById: async (id) => {
    const book = await recordsRepo.getBookById(id);
    if (book.length === 0) {
      throw { status: 400, message: 'Book doesn\'t exists!' };
    }
    return book[0];
  },

  postBook: async (data) => {
    const { _id } = data;

    if (_id === undefined) {
      throw { status: 400, message: 'Id is missing!' };
    }

    const book = await recordsRepo.getBookById(_id);
    if (book.length > 0) {
      throw { status: 400, message: 'Id already exists' };
    }

    const newBook = await recordsRepo.postBook(data);
    return newBook.ops[0];
  },

  deleteBookById: async (id) => {
    const book = await recordsRepo.getBookById(id);
    if (book.length === 0) {
      throw { status: 400, message: 'Book doesn\'t exists!' };
    }

    await recordsRepo.deleteBookById(id);
    return book[0];
  },
};
