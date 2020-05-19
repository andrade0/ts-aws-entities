import { AwsMqConfigurationArgsIntterface } from '../interfaces';


export class AwsMqConfigurationArgs implements AwsMqConfigurationArgsIntterface {
  	data: string;
	description?: string;
	engine_type: string;
	engine_version: string;
	name: string;
	tags?: string;

}
