import { AwsWafRegexMatchSetArgsIntterface } from '../interfaces';
import { AwsWafRegexMatchSetArgsRegexMatchTuple } from '.';

export class AwsWafRegexMatchSetArgs implements AwsWafRegexMatchSetArgsIntterface {
  	name: string;
	regex_match_tuple: AwsWafRegexMatchSetArgsRegexMatchTuple;
	data?: string;
	type: string;

}
