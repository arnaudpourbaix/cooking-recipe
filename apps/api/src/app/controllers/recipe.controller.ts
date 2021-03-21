import { Controller } from '@nestjs/common';
import { RecipeService } from '../services/recipe.service';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  // @Get('channelPlaylists')
  // @UseGuards(AuthGuard('jwt'))
  // getChannelPlaylists(
  //   @Query('channelId') channelId: string,
  //   @Query('pageToken') pageToken: string
  // ) {
  //   // const params: SearchListParam = { part: 'snippet', maxResults: 50, type: 'playlist' };
  //   // if (channelId !== '') {
  //   //   params.channelId = channelId;
  //   // }
  //   // if (pageToken !== '') {
  //   //   params.pageToken = pageToken;
  //   // }
  //   // return this.youtubeService.search(params);
  //   const params: PlaylistListParam = {
  //     part: 'snippet,contentDetails',
  //     maxResults: 50,
  //   };
  //   if (channelId !== '') {
  //     params.channelId = channelId;
  //   }
  //   if (pageToken !== '') {
  //     params.pageToken = pageToken;
  //   }
  //   return this.youtubeService.playlistList({
  //     part: 'snippet,contentDetails',
  //     channelId,
  //     pageToken,
  //     maxResults: 50,
  //   });
  // }

  // @Get('playlistItems/:playlistId')
  // @UseGuards(AuthGuard('jwt'))
  // getPlaylistItems(@Param('playlistId') playlistId: string) {
  //   return this.youtubeService.playlistItems({
  //     part: 'snippet',
  //     playlistId,
  //     maxResults: 50,
  //   });
  // }

  // @Get('playlistInfo/:id')
  // @UseGuards(AuthGuard('jwt'))
  // getPlaylistInfo(@Param('id') id: string): Promise<PlaylistInfo> {
  //   return this.appService.getPlaylistInfo(id);
  // }
}
