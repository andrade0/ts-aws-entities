import { AwsWafregionalSizeConstraintSetIntterface } from '../interfaces';
import { AwsWafregionalSizeConstraintSetArgs,  AwsWafregionalSizeConstraintSetAttrs } from '.';

export class AwsWafregionalSizeConstraintSet implements AwsWafregionalSizeConstraintSetIntterface {
  	name: string = 'aws_wafregional_size_constraint_set';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html';
	groupName: string = 'WAF Regional Resources';
	args: AwsWafregionalSizeConstraintSetArgs;
	attrs: AwsWafregionalSizeConstraintSetAttrs;

}
