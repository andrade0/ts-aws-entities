import { AwsEmrClusterArgsBootstrapActionIntterface } from '../interfaces';


export class AwsEmrClusterArgsBootstrapAction implements AwsEmrClusterArgsBootstrapActionIntterface {
  	name: string;
	path: string;
	args?: string;

}
