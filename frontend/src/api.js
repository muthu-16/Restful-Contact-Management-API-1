import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

export const getContacts = () => axios.get(`${API}/contacts`);
export const createContact = (data) => axios.post(`${API}/contacts`, data);
export const deleteContact = (id) => axios.delete(`${API}/contacts/${id}`);
