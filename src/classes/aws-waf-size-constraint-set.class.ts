import { AwsWafSizeConstraintSetIntterface } from '../interfaces';
import { AwsWafSizeConstraintSetArgs, AwsWafSizeConstraintSetAttrs } from '.';

export class AwsWafSizeConstraintSet implements AwsWafSizeConstraintSetIntterface {
  name: string = 'aws_waf_size_constraint_set';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html';
  groupName: string = 'WAF Resources';
  args: AwsWafSizeConstraintSetArgs;
  attrs: AwsWafSizeConstraintSetAttrs;

}
