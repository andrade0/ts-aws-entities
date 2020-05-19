import { AwsSagemakerModelArgsPrimaryContainerIntterface } from '../interfaces';


export class AwsSagemakerModelArgsPrimaryContainer implements AwsSagemakerModelArgsPrimaryContainerIntterface {
  	image: string;
	model_data_url?: string;
	container_hostname?: string;
	environment?: string;

}
