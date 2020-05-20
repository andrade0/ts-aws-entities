import { AwsStoragegatewayCacheIntterface } from '../interfaces';
import { AwsStoragegatewayCacheArgs, AwsStoragegatewayCacheAttrs } from '.';

export class AwsStoragegatewayCache implements AwsStoragegatewayCacheIntterface {
  name: string = 'aws_storagegateway_cache';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/storagegateway_cache.html';
  groupName: string = 'Storage Gateway Resources';
  args: AwsStoragegatewayCacheArgs;
  attrs: AwsStoragegatewayCacheAttrs;

}
