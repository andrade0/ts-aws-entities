import { AwsCodebuildProjectArgsArtifactsIntterface } from '../interfaces';


export class AwsCodebuildProjectArgsArtifacts implements AwsCodebuildProjectArgsArtifactsIntterface {
  type: string;
  encryption_disabled?: string;
  location?: string;
  name?: string;
  namespace_type?: string;
  packaging?: string;
  path?: string;
  artifact_identifier: string;

}
