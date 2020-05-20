import { AwsDirectoryServiceDirectoryIntterface } from '../interfaces';
import { AwsDirectoryServiceDirectoryArgs, AwsDirectoryServiceDirectoryAttrs } from '.';

export class AwsDirectoryServiceDirectory implements AwsDirectoryServiceDirectoryIntterface {
  name: string = 'aws_directory_service_directory';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html';
  groupName: string = 'Directory Service Resources';
  args: AwsDirectoryServiceDirectoryArgs;
  attrs: AwsDirectoryServiceDirectoryAttrs;

}
