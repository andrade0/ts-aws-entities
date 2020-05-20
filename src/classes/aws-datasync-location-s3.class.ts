import { AwsDatasyncLocationS3Intterface } from '../interfaces';
import { AwsDatasyncLocationS3Args, AwsDatasyncLocationS3Attrs } from '.';

export class AwsDatasyncLocationS3 implements AwsDatasyncLocationS3Intterface {
  name: string = 'aws_datasync_location_s3';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html';
  groupName: string = 'DataSync Resources';
  args: AwsDatasyncLocationS3Args;
  attrs: AwsDatasyncLocationS3Attrs;

}
