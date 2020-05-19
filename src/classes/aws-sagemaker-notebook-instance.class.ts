import { AwsSagemakerNotebookInstanceIntterface } from '../interfaces';
import { AwsSagemakerNotebookInstanceArgs,  AwsSagemakerNotebookInstanceAttrs } from '.';

export class AwsSagemakerNotebookInstance implements AwsSagemakerNotebookInstanceIntterface {
  	name: string = 'aws_sagemaker_notebook_instance';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html';
	groupName: string = 'Sagemaker Resources';
	args: AwsSagemakerNotebookInstanceArgs;
	attrs: AwsSagemakerNotebookInstanceAttrs;

}
