import { AwsWafIpsetIntterface } from '../interfaces';
import { AwsWafIpsetArgs, AwsWafIpsetAttrs } from '.';

export class AwsWafIpset implements AwsWafIpsetIntterface {
  name: string = 'aws_waf_ipset';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/waf_ipset.html';
  groupName: string = 'WAF Resources';
  args: AwsWafIpsetArgs;
  attrs: AwsWafIpsetAttrs;

}
