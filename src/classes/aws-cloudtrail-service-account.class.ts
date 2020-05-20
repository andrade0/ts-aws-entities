import { AwsCloudtrailServiceAccountIntterface } from '../interfaces';
import { AwsCloudtrailServiceAccountArgs, AwsCloudtrailServiceAccountAttrs } from '.';

export class AwsCloudtrailServiceAccount implements AwsCloudtrailServiceAccountIntterface {
  name: string = 'aws_cloudtrail_service_account';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/cloudtrail_service_account.html';
  groupName: string = 'Data Sources';
  args: AwsCloudtrailServiceAccountArgs;
  attrs: AwsCloudtrailServiceAccountAttrs;

}
