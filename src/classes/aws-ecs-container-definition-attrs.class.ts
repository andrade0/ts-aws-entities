import { AwsEcsContainerDefinitionAttrsIntterface } from '../interfaces';


export class AwsEcsContainerDefinitionAttrs implements AwsEcsContainerDefinitionAttrsIntterface {
  	image?: string;
	image_digest?: string;
	cpu?: string;
	memory?: string;
	memory_reservation?: string;
	environment?: string;
	disable_networking?: string;
	docker_labels?: string;

}
