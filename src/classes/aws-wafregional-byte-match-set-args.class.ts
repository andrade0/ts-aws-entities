import { AwsWafregionalByteMatchSetArgsIntterface } from '../interfaces';
import { AwsWafregionalByteMatchSetArgsByteMatchTuple } from '.';

export class AwsWafregionalByteMatchSetArgs implements AwsWafregionalByteMatchSetArgsIntterface {
  name: string;
  byte_match_tuple: AwsWafregionalByteMatchSetArgsByteMatchTuple;
  byte_match_tuples?: string;
  data?: string;
  type: string;

}
