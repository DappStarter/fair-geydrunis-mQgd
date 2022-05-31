require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food iron royal mushroom exchange hover entire slot giggle'; 
let testAccounts = [
"0x0df85b8a7870a2b4f9fb9866b4e007d8439626c2f16b1b03824221b34c24ce30",
"0x46100d5398bf818d1e609e4af7dc44877b7c41d8199eb843b73f7527b1495810",
"0x18450589324062db1746d9fd59d8cb9fd8740644a73f7a251b65b74363c06327",
"0x3e3043f51d221c240422b3c1a0fad3800935160110edbb7f89b01bc5c06cf2b3",
"0xa0ddb0b30075c474b61e5db085c96d5c521d1a51a988dba232a409dd99b4d7be",
"0x921ad4ef44a8d1473c931b2d75d19f74c738a55bc71f0cd7ba3757a1495be0c2",
"0x07d124c6ff9b310f1cf9b77481c2c923055d32d684b869b175a8b697e240c08d",
"0xf34a4eb1d9cb2635a2de8d0d989ab6e2fe31ff3fd605a99acb3f8515953d19cb",
"0xe4fa45cd1744ed2566b4adea223d4b0ccaf04b7d16111128cbf0de9c6e92be06",
"0x96d3cc95a37717e7b8f43cca9f0e7d16c531e3982247c2a633f4da2aee1faac6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


