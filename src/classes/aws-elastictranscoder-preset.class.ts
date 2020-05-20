import { AwsElastictranscoderPresetIntterface } from '../interfaces';
import { AwsElastictranscoderPresetArgs, AwsElastictranscoderPresetAttrs } from '.';

export class AwsElastictranscoderPreset implements AwsElastictranscoderPresetIntterface {
  name: string = 'aws_elastictranscoder_preset';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/elastic_transcoder_preset.html';
  groupName: string = 'Elastic Transcoder Resources';
  args: AwsElastictranscoderPresetArgs;
  attrs: AwsElastictranscoderPresetAttrs;

}
