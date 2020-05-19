import { AwsWorkspacesBundleIntterface } from '../interfaces';
import { AwsWorkspacesBundleArgs,  AwsWorkspacesBundleAttrs } from '.';

export class AwsWorkspacesBundle implements AwsWorkspacesBundleIntterface {
  	name: string = 'aws_workspaces_bundle';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/workspaces_bundle.html';
	groupName: string = 'Data Sources';
	args: AwsWorkspacesBundleArgs;
	attrs: AwsWorkspacesBundleAttrs;

}
