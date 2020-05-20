import { AwsKmsCiphertextIntterface } from '../interfaces';
import { AwsKmsCiphertextArgs, AwsKmsCiphertextAttrs } from '.';

export class AwsKmsCiphertext implements AwsKmsCiphertextIntterface {
  name: string = 'aws_kms_ciphertext';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/kms_ciphertext.html';
  groupName: string = 'Data Sources';
  args: AwsKmsCiphertextArgs;
  attrs: AwsKmsCiphertextAttrs;

}
