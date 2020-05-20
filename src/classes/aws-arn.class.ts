import { AwsArnIntterface } from '../interfaces';
import { AwsArnArgs, AwsArnAttrs } from '.';

export class AwsArn implements AwsArnIntterface {
  name: string = 'aws_arn';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/arn.html';
  groupName: string = 'Data Sources';
  args: AwsArnArgs;
  attrs: AwsArnAttrs;

}
