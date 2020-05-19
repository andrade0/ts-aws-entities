import { AwsDaxClusterAttrsIntterface } from '../interfaces';


export class AwsDaxClusterAttrs implements AwsDaxClusterAttrsIntterface {
  	arn?: string;
	nodes?: string;
	configuration_endpoint?: string;
	cluster_address?: string;
	port?: string;

}
