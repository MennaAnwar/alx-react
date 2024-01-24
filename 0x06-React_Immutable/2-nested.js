import { getIn, fromJS } from "immutable";

const accessImmutableObject = (object, array) => getIn(fromJS(object), array);

export default accessImmutableObject;
