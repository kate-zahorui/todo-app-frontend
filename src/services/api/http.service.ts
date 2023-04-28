import axios from 'axios';
import { IServiceConfig } from '../../modules/common/types/services.type';
import { APP_KEYS } from '../../modules/common/consts';
import ls from '../localStorage';

const { REACT_APP_API_URL } = process.env;

export default class HttpService {
  baseUrl: string;

  fetchingService;

  apiVersion: string;

  constructor(baseUrl = REACT_APP_API_URL, fetchingService = axios, apiVersion = 'api') {
    this.baseUrl = baseUrl as string;
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string): string {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private populateTokenToHeaderConfig() {
    const token = ls.load(APP_KEYS.STORAGE_KEYS.TOKEN);
    return {
      Authorization: `Bearer ${token}`
    };
  }

  private extractUrlAndDataFromConfig({ data, url, ...configWithoutDataAndUrl }: IServiceConfig) {
    return configWithoutDataAndUrl;
  }

  get<T extends IServiceConfig>(config: T, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.get(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  post<T extends IServiceConfig>(config: T, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.post(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  delete<T extends IServiceConfig>(config: T, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.delete(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  put<T extends IServiceConfig>(config: T, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.put(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }
}
