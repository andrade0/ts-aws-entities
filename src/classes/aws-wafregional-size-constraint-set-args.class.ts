import { AwsWafregionalSizeConstraintSetArgsIntterface } from '../interfaces';


export class AwsWafregionalSizeConstraintSetArgs implements AwsWafregionalSizeConstraintSetArgsIntterface {
  	name: string;
	size_constraints?: string;
	field_to_match: string;
	comparison_operator: string;
	size: string;
	text_transformation: string;
	data?: string;
	type: string;

}
