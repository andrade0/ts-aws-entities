import { AwsWafXssMatchSetArgsIntterface, AwsWafXssMatchSetAttrsIntterface } from '.';

export interface AwsWafXssMatchSetIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsWafXssMatchSetArgsIntterface;
	attrs: AwsWafXssMatchSetAttrsIntterface;

}
