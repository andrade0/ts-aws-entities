import { AwsLambdaLayerVersionArgsIntterface } from '../interfaces';


export class AwsLambdaLayerVersionArgs implements AwsLambdaLayerVersionArgsIntterface {
  layer_name: string;
  filename?: string;
  s3_bucket?: string;
  s3_key?: string;
  s3_object_version?: string;
  compatible_runtimes?: string;
  description?: string;
  license_info?: string;
  source_code_hash?: string;

}
