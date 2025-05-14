
import Player from '#/engine/entity/Player.js';
import MessageHandler from '#/network/game/client/handler/MessageHandler.js';
import { fromBase37 } from '#/util/JString.js';

import GroupCreate from '../model/GroupCreate.js';

export default class GroupCreateHandler extends MessageHandler<GroupCreate> {
    handle(message: GroupCreate, player: Player): boolean {
        // if (player.socialProtect || fromBase37(message.groupName) === 'invalid_name') {
        //     return false;
        // }

        console.log('Do we get in here?');
        player.messageGame(`Adventuring Party ${fromBase37(message.groupName)} registered with the Adventurer's Guild.`);
        // player.socialProtect = true;
        return true;
    }
}
