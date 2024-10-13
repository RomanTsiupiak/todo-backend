type TodoStatus = 'Draft' | 'Active' | 'Done';

export type TodoDTO = {
  id: string;
  title: string;
  status: TodoStatus;
};

export const todo: TodoDTO[] = [
  {
    id: '1',
    title: 'First',
    status: 'Active',
  },
  {
    id: '2',
    title: 'Second',
    status: 'Active',
  },
  {
    id: '3',
    title: 'Third',
    status: 'Active',
  },
  {
    id: '4',
    title: 'Forth',
    status: 'Active',
  },
  {
    id: '5',
    title: 'Fifth',
    status: 'Active',
  },
];
