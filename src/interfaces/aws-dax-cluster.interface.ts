import { AwsDaxClusterArgsIntterface, AwsDaxClusterAttrsIntterface } from '.';

export interface AwsDaxClusterIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDaxClusterArgsIntterface;
  attrs: AwsDaxClusterAttrsIntterface;

}
