import { AwsWafSizeConstraintSetArgsIntterface } from '../interfaces';


export class AwsWafSizeConstraintSetArgs implements AwsWafSizeConstraintSetArgsIntterface {
  name: string;
  size_constraints?: string;
  field_to_match: string;
  comparison_operator: string;
  size: string;
  text_transformation: string;
  data?: string;
  type: string;

}
