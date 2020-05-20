import { AwsMediaStoreContainerIntterface } from '../interfaces';
import { AwsMediaStoreContainerArgs, AwsMediaStoreContainerAttrs } from '.';

export class AwsMediaStoreContainer implements AwsMediaStoreContainerIntterface {
  name: string = 'aws_media_store_container';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/media_store_container.html';
  groupName: string = 'MediaStore Resources';
  args: AwsMediaStoreContainerArgs;
  attrs: AwsMediaStoreContainerAttrs;

}
