import isObject from '../../utils/isObject'
import applyUnitToNumbers from '../../utils/applyUnitToNumbers'

export default function translate(x, y) {
  const values = isObject(x) ? [ x.x, x.y ] : [ x, y ]
  return 'translate(' + applyUnitToNumbers(values).join(',') + ')'
}
