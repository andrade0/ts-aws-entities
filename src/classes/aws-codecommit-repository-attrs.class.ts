import { AwsCodecommitRepositoryAttrsIntterface } from '../interfaces';


export class AwsCodecommitRepositoryAttrs implements AwsCodecommitRepositoryAttrsIntterface {
  	repository_id?: string;
	arn?: string;
	clone_url_http?: string;
	clone_url_ssh?: string;

}
