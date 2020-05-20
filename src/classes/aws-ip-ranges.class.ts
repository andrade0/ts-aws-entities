import { AwsIpRangesIntterface } from '../interfaces';
import { AwsIpRangesArgs, AwsIpRangesAttrs } from '.';

export class AwsIpRanges implements AwsIpRangesIntterface {
  name: string = 'aws_ip_ranges';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/ip_ranges.html';
  groupName: string = 'Data Sources';
  args: AwsIpRangesArgs;
  attrs: AwsIpRangesAttrs;

}
