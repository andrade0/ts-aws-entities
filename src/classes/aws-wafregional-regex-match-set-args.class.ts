import { AwsWafregionalRegexMatchSetArgsIntterface } from '../interfaces';
import { AwsWafregionalRegexMatchSetArgsRegexMatchTuple } from '.';

export class AwsWafregionalRegexMatchSetArgs implements AwsWafregionalRegexMatchSetArgsIntterface {
  	name: string;
	regex_match_tuple: AwsWafregionalRegexMatchSetArgsRegexMatchTuple;
	data?: string;
	type: string;

}
