import { recordsRepo } from '../repositories';

export const recordsService = {

  getAllRecords: async () => {
    const records = await recordsRepo.getAllRecords();
    return records;
  },

  getRecordById: async (id) => {
    const record = await recordsRepo.getRecordById(id);
    if (record.length === 0) {
      throw { status: 400, message: 'Record doesn\'t exists!' };
    }
    return record[0];
  },

  postRecord: async (data) => {
    const { _id } = data;

    if (_id === undefined) {
      throw { status: 400, message: 'Id is missing!' };
    }

    if (typeof _id !== 'string') {
      throw { status: 400, message: 'Id must be a string!' };
    }

    const record = await recordsRepo.getRecordById(_id);
    if (record.length > 0) {
      throw { status: 400, message: 'Id already exists' };
    }

    const newrecord = await recordsRepo.postRecord(data);
    return newrecord.ops[0];
  },

  deleteRecordById: async (id) => {
    const record = await recordsRepo.getRecordById(id);
    if (record.length === 0) {
      throw { status: 400, message: 'Record doesn\'t exists!' };
    }

    await recordsRepo.deleteRecordById(id);
    return record[0];
  },
};
