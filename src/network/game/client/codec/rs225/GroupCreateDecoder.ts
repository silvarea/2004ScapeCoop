import Packet from '#/io/Packet.js';
import MessageDecoder from '#/network/game/client/codec/MessageDecoder.js';
import ClientProt225 from '#/network/game/client/codec/rs225/ClientProt225.js';
import GroupCreate from '#/network/game/client/model/GroupCreate.js';

export default class GroupCreateDecoder extends MessageDecoder<GroupCreate> {
    prot = ClientProt225.GROUP_CREATE;

    decode(buf: Packet) {
        const groupName = buf.g8();
        return new GroupCreate(groupName);
    }
}
