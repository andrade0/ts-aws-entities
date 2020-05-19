import { AwsDatasyncLocationNfsArgsIntterface } from '../interfaces';
import { AwsDatasyncLocationNfsArgsOnPremConfig } from '.';

export class AwsDatasyncLocationNfsArgs implements AwsDatasyncLocationNfsArgsIntterface {
  	on_prem_config: AwsDatasyncLocationNfsArgsOnPremConfig;
	server_hostname: string;
	subdirectory: string;
	tags?: string;
	id: string;
	arn: string;

}
