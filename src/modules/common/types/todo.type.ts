export interface ITodo {
  title: string;
  description: string;
  isPrivate: boolean;
  isCompleted: boolean;
}

export interface ITodoResponse extends ITodo {
  id: number;
}
