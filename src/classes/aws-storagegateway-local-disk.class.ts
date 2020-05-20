import { AwsStoragegatewayLocalDiskIntterface } from '../interfaces';
import { AwsStoragegatewayLocalDiskArgs, AwsStoragegatewayLocalDiskAttrs } from '.';

export class AwsStoragegatewayLocalDisk implements AwsStoragegatewayLocalDiskIntterface {
  name: string = 'aws_storagegateway_local_disk';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk.html';
  groupName: string = 'Data Sources';
  args: AwsStoragegatewayLocalDiskArgs;
  attrs: AwsStoragegatewayLocalDiskAttrs;

}
