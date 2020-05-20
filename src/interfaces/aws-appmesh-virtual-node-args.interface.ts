import {
  AwsAppmeshVirtualNodeArgsDnsIntterface,
  AwsAppmeshVirtualNodeArgsHealthCheckIntterface,
  AwsAppmeshVirtualNodeArgsPortMappingIntterface,
  AwsAppmeshVirtualNodeArgsSpecIntterface,
} from '.';

export interface AwsAppmeshVirtualNodeArgsIntterface {
  name: string;
  mesh_name: string;
  spec: AwsAppmeshVirtualNodeArgsSpecIntterface;
  port_mapping: AwsAppmeshVirtualNodeArgsPortMappingIntterface;
  health_check?: AwsAppmeshVirtualNodeArgsHealthCheckIntterface;
  dns: AwsAppmeshVirtualNodeArgsDnsIntterface;

}
