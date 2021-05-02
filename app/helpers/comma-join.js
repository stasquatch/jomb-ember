import { helper } from '@ember/component/helper';

export default helper(function commaJoin([input]) {
  if (!input) return;
  
  if (typeof input === 'string') return input;

  if (Array.isArray(input)) {
    return input.join(', ');
  }

  return;
});
