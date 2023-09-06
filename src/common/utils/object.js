import { omitBy } from 'lodash';
import { isNull, isUndefined } from 'common/utils/type-predicates';

const emptyValue = (value) => isUndefined(value) || value === '' || isNull(value);

export const removeEmptyProps = obj => omitBy(obj, emptyValue);
