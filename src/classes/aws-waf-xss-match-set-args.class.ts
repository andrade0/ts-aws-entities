import { AwsWafXssMatchSetArgsIntterface } from '../interfaces';
import { AwsWafXssMatchSetArgsXssMatchTuples } from '.';

export class AwsWafXssMatchSetArgs implements AwsWafXssMatchSetArgsIntterface {
  name: string;
  xss_match_tuples?: AwsWafXssMatchSetArgsXssMatchTuples;
  data?: string;
  type: string;

}
