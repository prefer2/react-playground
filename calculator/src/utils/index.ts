import { OPERATORS } from '../constants';

export const isOperator = (input: string) => {
  return Object.values(OPERATORS).includes(input);
};
