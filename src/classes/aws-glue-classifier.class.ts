import { AwsGlueClassifierIntterface } from '../interfaces';
import { AwsGlueClassifierArgs,  AwsGlueClassifierAttrs } from '.';

export class AwsGlueClassifier implements AwsGlueClassifierIntterface {
  	name: string = 'aws_glue_classifier';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/glue_classifier.html';
	groupName: string = 'Glue Resources';
	args: AwsGlueClassifierArgs;
	attrs: AwsGlueClassifierAttrs;

}
