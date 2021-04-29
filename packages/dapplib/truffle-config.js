require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note shift promote hidden private swallow type'; 
let testAccounts = [
"0xb406789df61008ab28dfe5af676ac0f526af904127b894e351caedbdd4b9e1f1",
"0x0e3bb6bdd5252c3bcc9081fe99e13138bb9f7b63841b3eb46235bc2766b17754",
"0xa843ce5817f0935cce50d8f4f3c3a89a2d4aa099b11da394999a8a1cb9604a38",
"0xfe3ee9ed846025216053208b5d523eb9570c83eba2747931af4744f071c87d56",
"0xfad8a34b112f5a1e3eaf76756a5897759f43cf6aca2e6db82723da831b297472",
"0xd653ab7959d1c2fe974b0a9c172f9bfd12bbfe7dbf5d344219349fcb23332e90",
"0xc81389564784ae65dd85421d69161149dfd112cdebf51b03e4c42136caf6aae2",
"0x1e65d6ea90deddf30bd40de99b399e75ad4907bee2c33fc82d4c78370b4b7654",
"0x10ba36955259a7455e0ed7f47421a4fc2e23fa835207521be289c6adb9a89dcb",
"0x7f1518debd38e93b5c72de4d24facc9a6840ed11526115f4c34b40153d6e5ab6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
