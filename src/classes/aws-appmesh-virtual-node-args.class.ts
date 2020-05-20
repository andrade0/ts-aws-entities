import { AwsAppmeshVirtualNodeArgsIntterface } from '../interfaces';
import {
  AwsAppmeshVirtualNodeArgsDns,
  AwsAppmeshVirtualNodeArgsHealthCheck,
  AwsAppmeshVirtualNodeArgsPortMapping,
  AwsAppmeshVirtualNodeArgsSpec,
} from '.';

export class AwsAppmeshVirtualNodeArgs implements AwsAppmeshVirtualNodeArgsIntterface {
  name: string;
  mesh_name: string;
  spec: AwsAppmeshVirtualNodeArgsSpec;
  port_mapping: AwsAppmeshVirtualNodeArgsPortMapping;
  health_check?: AwsAppmeshVirtualNodeArgsHealthCheck;
  dns: AwsAppmeshVirtualNodeArgsDns;

}
