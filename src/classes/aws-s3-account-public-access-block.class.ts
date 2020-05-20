import { AwsS3AccountPublicAccessBlockIntterface } from '../interfaces';
import { AwsS3AccountPublicAccessBlockArgs, AwsS3AccountPublicAccessBlockAttrs } from '.';

export class AwsS3AccountPublicAccessBlock implements AwsS3AccountPublicAccessBlockIntterface {
  name: string = 'aws_s3_account_public_access_block';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html';
  groupName: string = 'S3 Resources';
  args: AwsS3AccountPublicAccessBlockArgs;
  attrs: AwsS3AccountPublicAccessBlockAttrs;

}
