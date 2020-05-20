import { AwsCloudfrontDistributionIntterface } from '../interfaces';
import { AwsCloudfrontDistributionArgs, AwsCloudfrontDistributionAttrs } from '.';

export class AwsCloudfrontDistribution implements AwsCloudfrontDistributionIntterface {
  name: string = 'aws_cloudfront_distribution';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html';
  groupName: string = 'CloudFront Resources';
  args: AwsCloudfrontDistributionArgs;
  attrs: AwsCloudfrontDistributionAttrs;

}
