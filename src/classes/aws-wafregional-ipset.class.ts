import { AwsWafregionalIpsetIntterface } from '../interfaces';
import { AwsWafregionalIpsetArgs, AwsWafregionalIpsetAttrs } from '.';

export class AwsWafregionalIpset implements AwsWafregionalIpsetIntterface {
  name: string = 'aws_wafregional_ipset';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html';
  groupName: string = 'WAF Regional Resources';
  args: AwsWafregionalIpsetArgs;
  attrs: AwsWafregionalIpsetAttrs;

}
