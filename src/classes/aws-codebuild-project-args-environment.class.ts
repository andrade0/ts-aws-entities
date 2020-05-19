import { AwsCodebuildProjectArgsEnvironmentIntterface } from '../interfaces';


export class AwsCodebuildProjectArgsEnvironment implements AwsCodebuildProjectArgsEnvironmentIntterface {
  	compute_type: string;
	image: string;
	type: string;
	environment_variable?: string;
	privileged_mode?: string;
	certificate?: string;
	name: string;
	value: string;

}
