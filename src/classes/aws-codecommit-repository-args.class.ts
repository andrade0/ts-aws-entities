import { AwsCodecommitRepositoryArgsIntterface } from '../interfaces';


export class AwsCodecommitRepositoryArgs implements AwsCodecommitRepositoryArgsIntterface {
  	repository_name: string;
	description?: string;
	default_branch?: string;

}
