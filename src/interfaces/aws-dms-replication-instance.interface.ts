import { AwsDmsReplicationInstanceArgsIntterface, AwsDmsReplicationInstanceAttrsIntterface } from '.';

export interface AwsDmsReplicationInstanceIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDmsReplicationInstanceArgsIntterface;
  attrs: AwsDmsReplicationInstanceAttrsIntterface;

}
