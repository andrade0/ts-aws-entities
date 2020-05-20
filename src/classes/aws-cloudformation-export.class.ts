import { AwsCloudformationExportIntterface } from '../interfaces';
import { AwsCloudformationExportArgs, AwsCloudformationExportAttrs } from '.';

export class AwsCloudformationExport implements AwsCloudformationExportIntterface {
  name: string = 'aws_cloudformation_export';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/cloudformation_export.html';
  groupName: string = 'Data Sources';
  args: AwsCloudformationExportArgs;
  attrs: AwsCloudformationExportAttrs;

}
