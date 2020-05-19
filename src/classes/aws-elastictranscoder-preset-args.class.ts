import { AwsElastictranscoderPresetArgsIntterface } from '../interfaces';
import { AwsElastictranscoderPresetArgsAudio,  AwsElastictranscoderPresetArgsThumbnails,  AwsElastictranscoderPresetArgsVideo } from '.';

export class AwsElastictranscoderPresetArgs implements AwsElastictranscoderPresetArgsIntterface {
  	audio: AwsElastictranscoderPresetArgsAudio;
	audio_codec_options: string;
	container: string;
	description: string;
	name: string;
	thumbnails: AwsElastictranscoderPresetArgsThumbnails;
	video: AwsElastictranscoderPresetArgsVideo;
	video_watermarks: string;
	video_codec_options: string;

}
