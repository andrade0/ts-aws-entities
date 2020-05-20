import { AwsWafRegexMatchSetArgsIntterface, AwsWafRegexMatchSetAttrsIntterface } from '.';

export interface AwsWafRegexMatchSetIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsWafRegexMatchSetArgsIntterface;
  attrs: AwsWafRegexMatchSetAttrsIntterface;

}
