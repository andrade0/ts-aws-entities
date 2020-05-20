import { AwsCloudfrontOriginAccessIdentityIntterface } from '../interfaces';
import { AwsCloudfrontOriginAccessIdentityArgs, AwsCloudfrontOriginAccessIdentityAttrs } from '.';

export class AwsCloudfrontOriginAccessIdentity implements AwsCloudfrontOriginAccessIdentityIntterface {
  name: string = 'aws_cloudfront_origin_access_identity';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity.html';
  groupName: string = 'CloudFront Resources';
  args: AwsCloudfrontOriginAccessIdentityArgs;
  attrs: AwsCloudfrontOriginAccessIdentityAttrs;

}
