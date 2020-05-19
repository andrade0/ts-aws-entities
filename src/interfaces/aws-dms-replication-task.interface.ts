import { AwsDmsReplicationTaskArgsIntterface, AwsDmsReplicationTaskAttrsIntterface } from '.';

export interface AwsDmsReplicationTaskIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsDmsReplicationTaskArgsIntterface;
	attrs: AwsDmsReplicationTaskAttrsIntterface;

}
