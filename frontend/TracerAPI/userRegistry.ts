import { connectEthereum } from "./connection";
import deployedAddresses from "./contracts/deployedAddresses.json";
import {
  IUserRegistry,
  UserRegistry,
  UserRegistry__factory,
} from "./contracts/typechain";

const userRegistryAddress = deployedAddresses["UserRegistry"];

export type Member = IUserRegistry.MemberStructOutput;
export type Actor = IUserRegistry.ActorStructOutput;

const UserRegistry = {
  connectReadOnly: async (): Promise<UserRegistry> =>
    UserRegistry__factory.connect(userRegistryAddress, await connectEthereum()),

  getMember: async (address: string): Promise<Member> =>
    UserRegistry.connectReadOnly().then((contract) =>
      contract.getMember(address),
    ),

  getActorName: async (address: string): Promise<string> =>
    UserRegistry.connectReadOnly().then((contract) =>
      contract.getActorName(address),
    ),
};

export default UserRegistry;
