import { AwsNeptuneClusterAttrsIntterface } from '../interfaces';


export class AwsNeptuneClusterAttrs implements AwsNeptuneClusterAttrsIntterface {
  arn?: string;
  cluster_resource_id?: string;
  cluster_members?: string;
  endpoint?: string;
  hosted_zone_id?: string;
  id?: string;
  reader_endpoint?: string;
  status?: string;

}
