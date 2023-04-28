import { AxiosRequestConfig } from 'axios';
import { ITodo } from './todo.type';

export interface IServiceConfig extends AxiosRequestConfig<any> {
  url: string;
}

export interface ITodoServiceConfig extends IServiceConfig {
  data?: ITodo | Partial<ITodo>;
}
