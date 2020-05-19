import { AwsSagemakerNotebookInstanceArgsIntterface } from '../interfaces';


export class AwsSagemakerNotebookInstanceArgs implements AwsSagemakerNotebookInstanceArgsIntterface {
  	name: string;
	role_arn: string;
	instance_type: string;
	subnet_id?: string;
	security_groups?: string;
	kms_key_id?: string;
	tags?: string;

}
