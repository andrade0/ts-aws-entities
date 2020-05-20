import { AwsDxLagArgsIntterface, AwsDxLagAttrsIntterface } from '.';

export interface AwsDxLagIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDxLagArgsIntterface;
  attrs: AwsDxLagAttrsIntterface;

}
