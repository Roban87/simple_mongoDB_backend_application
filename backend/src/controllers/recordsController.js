import { recordsService } from '../services';

export const recordsController = {

  getAllRecords: async (req, res, next) => {
    try {
      const recordsResults = await recordsService.getAllRecords();
      res.status(200).json({ recordsResults });
    } catch (error) {
      next(error);
    }
  },

  getRecordById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const recordResult = await recordsService.getRecordById(id);
      res.status(200).json({ recordResult });
    } catch (error) {
      next(error);
    }
  },

  postRecord: async (req, res, next) => {
    const data = req.body;
    try {
      const insertResult = await recordsService.postRecord(data);
      res.status(201).json(insertResult);
    } catch (error) {
      next(error);
    }
  },

  deleteRecordById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const deletedRecord = await recordsService.deleteRecordById(id);
      res.status(200).json(deletedRecord);
    } catch (error) {
      next(error);
    }
  },
};
