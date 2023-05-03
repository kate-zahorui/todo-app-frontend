const save = (key: string, value: string) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', (error as Error).message);
  }
};

const load = (key: string) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', (error as Error).message);
  }
};

const remove = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Remove key from state error: ', (error as Error).message);
  }
};

const ls = {
  save,
  load,
  remove
};

export default ls;
