import { AwsStoragegatewayNfsFileShareIntterface } from '../interfaces';
import { AwsStoragegatewayNfsFileShareArgs, AwsStoragegatewayNfsFileShareAttrs } from '.';

export class AwsStoragegatewayNfsFileShare implements AwsStoragegatewayNfsFileShareIntterface {
  name: string = 'aws_storagegateway_nfs_file_share';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html';
  groupName: string = 'Storage Gateway Resources';
  args: AwsStoragegatewayNfsFileShareArgs;
  attrs: AwsStoragegatewayNfsFileShareAttrs;

}
