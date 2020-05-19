import { AwsWafregionalXssMatchSetArgsIntterface } from '../interfaces';
import { AwsWafregionalXssMatchSetArgsXssMatchTuple } from '.';

export class AwsWafregionalXssMatchSetArgs implements AwsWafregionalXssMatchSetArgsIntterface {
  	name: string;
	xss_match_tuple?: AwsWafregionalXssMatchSetArgsXssMatchTuple;
	data?: string;
	type: string;

}
