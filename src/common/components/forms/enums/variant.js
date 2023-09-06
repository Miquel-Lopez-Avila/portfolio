import Input from '../items/input';
import InputNumber from '../items/input-number';

export const variant = {
  INPUT: 'input',
  INPUT_NUMBER: 'input-number',
};

export const formVariants = {
  [variant.INPUT]: Input,
  [variant.INPUT_NUMBER]: InputNumber,
};
