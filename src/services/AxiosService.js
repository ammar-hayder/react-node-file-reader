import axios from 'axios';
class AxiosService {
  axiosInstance = null;

  constructor() {
    this.initInstance();
  }

  initInstance() {
    this.axiosInstance = axios.create({
      baseURL: '/api/v1',
      timeout: 5000
    });
  }

  get apiService() {
    return this.axiosInstance;
  }
}

export default new AxiosService();

