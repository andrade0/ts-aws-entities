import { AwsSesTemplateArgsIntterface } from '../interfaces';


export class AwsSesTemplateArgs implements AwsSesTemplateArgsIntterface {
  	name: string;
	html?: string;
	subject?: string;
	text?: string;

}
