import { instance } from './auth';

export const fetchContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContacts = async payload => {
  const { data } = await instance.post(`/contacts`, payload);
  return data;
};

export const deleteContacts = async contactsId => {
  const { data } = await instance.delete(`/contacts/${contactsId}`);
  return data;
};
