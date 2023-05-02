import { APP_KEYS } from '../../modules/common/consts';
import { ITodo } from '../../modules/common/types/todo.type';
import { ITodoServiceConfig } from '../../modules/common/types/services.type';
import HttpService from './http.service';

class TodoService extends HttpService {
  getTodos() {
    return this.get<ITodoServiceConfig>({
      url: APP_KEYS.BACKEND_KEYS.TODOS
    });
  }

  addTodo(todo: ITodo) {
    return this.post<ITodoServiceConfig>({
      url: APP_KEYS.BACKEND_KEYS.TODOS,
      data: todo
    });
  }

  deleteTodo(id: number) {
    return this.delete<ITodoServiceConfig>({
      url: `${APP_KEYS.BACKEND_KEYS.TODOS}/${id}`
    });
  }

  updateTodo(id: string, todo: Partial<ITodo>) {
    return this.put<ITodoServiceConfig>({
      url: `${APP_KEYS.BACKEND_KEYS.TODOS}/${id}`,
      data: todo
    });
  }
}

const todoService = new TodoService();
export default todoService;
