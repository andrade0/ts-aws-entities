import { AwsWorkspacesBundleAttrsIntterface } from '../interfaces';


export class AwsWorkspacesBundleAttrs implements AwsWorkspacesBundleAttrsIntterface {
  	description?: string;
	name?: string;
	owner?: string;
	compute_type?: string;
	root_storage?: string;
	user_storage?: string;

}
