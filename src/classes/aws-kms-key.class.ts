import { AwsKmsKeyIntterface } from '../interfaces';
import { AwsKmsKeyArgs, AwsKmsKeyAttrs } from '.';

export class AwsKmsKey implements AwsKmsKeyIntterface {
  name: string = 'aws_kms_key';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/kms_key.html';
  groupName: string = 'KMS Resources';
  args: AwsKmsKeyArgs;
  attrs: AwsKmsKeyAttrs;

}
