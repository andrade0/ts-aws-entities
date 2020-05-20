import { AwsCloudfrontPublicKeyIntterface } from '../interfaces';
import { AwsCloudfrontPublicKeyArgs, AwsCloudfrontPublicKeyAttrs } from '.';

export class AwsCloudfrontPublicKey implements AwsCloudfrontPublicKeyIntterface {
  name: string = 'aws_cloudfront_public_key';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html';
  groupName: string = 'CloudFront Resources';
  args: AwsCloudfrontPublicKeyArgs;
  attrs: AwsCloudfrontPublicKeyAttrs;

}
