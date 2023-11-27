import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.bitzen-pet.homologacao.bitzenwebsites.net/api/',
});
