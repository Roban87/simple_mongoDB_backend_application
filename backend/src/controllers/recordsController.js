import { recordsService } from '../services';

export const recordsController = {

  getAllBooks: async (req, res, next) => {
    try {
      const booksResults = await recordsService.getAllBooks();
      res.status(200).json({ booksResults });
    } catch (error) {
      next(error);
    }
  },

  getBookById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const bookResult = await recordsService.getBookById(id);
      res.status(200).json({ bookResult });
    } catch (error) {
      next(error);
    }
  },

  postBook: async (req, res, next) => {
    const data = req.body;
    try {
      const insertResult = await recordsService.postBook(data);
      res.status(201).json({ insertResult });
    } catch (error) {
      next(error);
    }
  },

  deleteBookById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const deletedBook = await recordsService.deleteBookById(id);
      res.status(200).json({ deletedBook });
    } catch (error) {
      next(error);
    }
  },
};
