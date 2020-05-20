import { AwsWafByteMatchSetArgsIntterface } from '../interfaces';


export class AwsWafByteMatchSetArgs implements AwsWafByteMatchSetArgsIntterface {
  name: string;
  byte_match_tuples: string;
  field_to_match: string;
  positional_constraint: string;
  target_string?: string;
  text_transformation: string;
  data?: string;
  type: string;

}
