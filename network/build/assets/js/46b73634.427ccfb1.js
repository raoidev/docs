"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[9630],{51223:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var r=s(49214),i=s(43540);const t={tags:["Tooling","LuxJS"],description:"LuxJS is a JavaScript Library for interfacing with the Lux platform. It is built using TypeScript and intended to support both browser and Node.js. The LuxJS library allows one to issue commands to the Lux node APIs.",pagination_label:"Manage X-Chain Keys",sidebar_label:"Manage X-Chain Keys",sidebar_position:6},a="Manage X-Chain Keys",l={id:"tooling/luxjs-guides/manage-x-chain-keys",title:"Manage X-Chain Keys",description:"LuxJS is a JavaScript Library for interfacing with the Lux platform. It is built using TypeScript and intended to support both browser and Node.js. The LuxJS library allows one to issue commands to the Lux node APIs.",source:"@site/docs/tooling/luxjs-guides/manage-x-chain-keys.md",sourceDirName:"tooling/luxjs-guides",slug:"/tooling/luxjs-guides/manage-x-chain-keys",permalink:"/docs/tooling/luxjs-guides/manage-x-chain-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/tooling/luxjs-guides/manage-x-chain-keys.md",tags:[{label:"Tooling",permalink:"/docs/tags/tooling"},{label:"LuxJS",permalink:"/docs/tags/lux-js"}],version:"current",sidebarPosition:6,frontMatter:{tags:["Tooling","LuxJS"],description:"LuxJS is a JavaScript Library for interfacing with the Lux platform. It is built using TypeScript and intended to support both browser and Node.js. The LuxJS library allows one to issue commands to the Lux node APIs.",pagination_label:"Manage X-Chain Keys",sidebar_label:"Manage X-Chain Keys",sidebar_position:6},sidebar:"tooling",previous:{title:"Send an Asset on the X-Chain",permalink:"/docs/tooling/luxjs-guides/send-an-asset-on-the-x-chain"},next:{title:"Multi Signature UTXOs with LuxJS",permalink:"/docs/tooling/luxjs-guides/multisig-utxos-with-luxjs"}},d={},o=[{value:"Accessing the Keychain",id:"accessing-the-keychain",level:2},{value:"Creating X-Chain Key Pairs",id:"creating-x-chain-key-pairs",level:2},{value:"Working with Keychains",id:"working-with-keychains",level:2},{value:"Working with Keypairs",id:"working-with-keypairs",level:2},{value:"Encode Bech32 Addresses",id:"encode-bech32-addresses",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"manage-x-chain-keys",children:"Manage X-Chain Keys"}),"\n",(0,r.jsx)(n.p,{children:"LuxJS comes with its own AVM Keychain. This KeyChain is used in the\nfunctions of the API, enabling them to sign using keys it's registered. The\nfirst step in this process is to create an instance of LuxJS connected to\nour Lux platform endpoint of choice."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { Lux, BinTools, Buffer, BN } from "lux"\n\nlet bintools = BinTools.getInstance()\n\nlet myNetworkID = 12345 //default is 1, we want to override that for our local network\nlet myBlockchainID = "GJABrZ9A6UQFpwjPU8MDxDd8vuyRoDVeDAXc694wJ5t3zEkhU" // The X-Chain blockchainID on this network\nlet ava = new lux.Lux(\n  "localhost",\n  9650,\n  "http",\n  myNetworkID,\n  myBlockchainID\n)\nlet xchain = ava.XChain() //returns a reference to the X-Chain used by LuxJS\n'})}),"\n",(0,r.jsx)(n.h2,{id:"accessing-the-keychain",children:"Accessing the Keychain"}),"\n",(0,r.jsx)(n.p,{children:"The KeyChain is accessed through the X-Chain and can be referenced directly or through a reference variable."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"let myKeychain = xchain.keyChain()\n"})}),"\n",(0,r.jsx)(n.p,{children:"This exposes the instance of the class AVMKeyChain which is created when the\nX-Chain API is created. At present, this supports secp256k1 curve for ECDSA key\npairs."}),"\n",(0,r.jsx)(n.h2,{id:"creating-x-chain-key-pairs",children:"Creating X-Chain Key Pairs"}),"\n",(0,r.jsx)(n.p,{children:"The KeyChain has the ability to create new Keypairs for you and return the\naddress associated with the key pair."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"let newAddress1 = myKeychain.makeKey() //returns a Buffer for the address\n"})}),"\n",(0,r.jsx)(n.p,{children:"You may also import your existing private key into the KeyChain using either a Buffer\u2026"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'let mypk = bintools.avaDeserialize(\n  "24jUJ9vZexUM6expyMcT48LBx27k1m7xpraoV62oSQAHdziao5"\n) //returns a Buffer\nlet newAddress2 = myKeychain.importKey(mypk) //returns a Buffer for the address\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u2026 or a Lux serialized string works, too:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'let mypk = "24jUJ9vZexUM6expyMcT48LBx27k1m7xpraoV62oSQAHdziao5"\nlet newAddress2 = myKeychain.importKey(mypk) //returns a Buffer for the address\n'})}),"\n",(0,r.jsx)(n.h2,{id:"working-with-keychains",children:"Working with Keychains"}),"\n",(0,r.jsx)(n.p,{children:"The X-Chain's KeyChain has standardized key management capabilities. The\nfollowing functions are available on any KeyChain that implements this\ninterface."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"let addresses = myKeychain.getAddresses(); //returns an array of Buffers for the addresses\nlet addressStrings = myKeychain.getAddressStrings(); //returns an array of strings for the addresses\nlet exists = myKeychain.hasKey(newAddress1); //returns true if the address is managed\nlet keypair = myKeychain.getKey(newAddress1); //returns the KeyPair class\n"})}),"\n",(0,r.jsx)(n.h2,{id:"working-with-keypairs",children:"Working with Keypairs"}),"\n",(0,r.jsx)(n.p,{children:"The X-Chain's keypair has standardized keypair functionality. The following\noperations are available on any keypair that implements this interface."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'let address = keypair.getAddress() //returns Buffer\nlet addressString = keypair.getAddressString() //returns string\n\nlet pubk = keypair.getPublicKey() //returns Buffer\nlet pubkstr = keypair.getPublicKeyString() //returns a CB58 encoded string\n\nlet privk = keypair.getPrivateKey() //returns Buffer\nlet privkstr = keypair.getPrivateKeyString() //returns a CB58 encoded string\n\nkeypair.generateKey() //creates a new random KeyPair\n\nlet mypk = "24jUJ9vZexUM6expyMcT48LBx27k1m7xpraoV62oSQAHdziao5"\nlet successul = keypair.importKey(mypk) //returns boolean if private key imported successfully\n\nlet message = Buffer.from("Wubalubadubdub")\nlet signature = keypair.sign(message) //returns a Buffer with the signature\n\nlet signerPubk = keypair.recover(message, signature)\nlet isValid = keypair.verify(message, signature) //returns a boolean\n'})}),"\n",(0,r.jsx)(n.h2,{id:"encode-bech32-addresses",children:"Encode Bech32 Addresses"}),"\n",(0,r.jsxs)(n.p,{children:["The X-Chain and the P-Chain use Bech32 to encode addresses. Note, the C-Chain\nalso uses Bech32 to encode addresses for importing and exporting assets however\nthe EVM, in general, uses hex encoding for addresses. Ex:\n",(0,r.jsx)(n.code,{children:"0x46f3e64E4e3f5a46Eaf5c292301c6174B9B646Bf"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Each Bech32 address is composed of the following components"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"A Human-Readable Part (HRP)."}),"\n",(0,r.jsxs)(n.li,{children:["The number ",(0,r.jsx)(n.code,{children:"1"})," is a separator (the last digit ",(0,r.jsx)(n.code,{children:"1"})," seen is considered the separator)."]}),"\n",(0,r.jsx)(n.li,{children:"Base-32 encoded string for the data part of the address (the 20-byte address itself)."}),"\n",(0,r.jsx)(n.li,{children:"A 6-character base-32 encoded error correction code using the BCH algorithm."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For example the following Bech32 address,\n",(0,r.jsx)(n.code,{children:"X-lux19rknw8l0grnfunjrzwxlxync6zrlu33y2jxhrg"}),", is composed like so:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["HRP: ",(0,r.jsx)(n.code,{children:"lux"})]}),"\n",(0,r.jsxs)(n.li,{children:["Separator: ",(0,r.jsx)(n.code,{children:"1"})]}),"\n",(0,r.jsxs)(n.li,{children:["Address: ",(0,r.jsx)(n.code,{children:"9rknw8l0grnfunjrzwxlxync6zrlu33y"})]}),"\n",(0,r.jsxs)(n.li,{children:["Checksum: ",(0,r.jsx)(n.code,{children:"2jxhrg"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Depending on the ",(0,r.jsx)(n.code,{children:"networkID"})," which is passed in when instantiating ",(0,r.jsx)(n.code,{children:"Lux"}),"\nthe encoded addresses will have a distinctive HRP per each network. LuxJS\nalso has address encoding for past networks ",(0,r.jsx)(n.code,{children:"cascade"}),", ",(0,r.jsx)(n.code,{children:"denali"}),", and ",(0,r.jsx)(n.code,{children:"everest"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["0 - X-",(0,r.jsx)(n.code,{children:"custom"}),"19rknw8l0grnfunjrzwxlxync6zrlu33yeg5dya"]}),"\n",(0,r.jsxs)(n.li,{children:["1 - X-",(0,r.jsx)(n.code,{children:"lux"}),"19rknw8l0grnfunjrzwxlxync6zrlu33y2jxhrg"]}),"\n",(0,r.jsxs)(n.li,{children:["2 - X-",(0,r.jsx)(n.code,{children:"cascade"}),"19rknw8l0grnfunjrzwxlxync6zrlu33ypmtvnh"]}),"\n",(0,r.jsxs)(n.li,{children:["3 - X-",(0,r.jsx)(n.code,{children:"denali"}),"19rknw8l0grnfunjrzwxlxync6zrlu33yhc357h"]}),"\n",(0,r.jsxs)(n.li,{children:["4 - X-",(0,r.jsx)(n.code,{children:"everest"}),"19rknw8l0grnfunjrzwxlxync6zrlu33yn44wty"]}),"\n",(0,r.jsxs)(n.li,{children:["5 - X-",(0,r.jsx)(n.code,{children:"testnet"}),"19rknw8l0grnfunjrzwxlxync6zrlu33yxqzg0h"]}),"\n",(0,r.jsxs)(n.li,{children:["1337 - X-",(0,r.jsx)(n.code,{children:"custom"}),"19rknw8l0grnfunjrzwxlxync6zrlu33yeg5dya"]}),"\n",(0,r.jsxs)(n.li,{children:["12345 - X-",(0,r.jsx)(n.code,{children:"local"}),"19rknw8l0grnfunjrzwxlxync6zrlu33ynpm3qq"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Here's the mapping of ",(0,r.jsx)(n.code,{children:"networkID"})," to bech32 HRP."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'export const NetworkIDToHRP = {\n  0: "custom",\n  1: "lux",\n  2: "cascade",\n  3: "denali",\n  4: "everest",\n  5: "testnet",\n  1337: "custom",\n  12345: "local",\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Change the HRP of the bech32 address by passing in a different networkID when instantiating ",(0,r.jsx)(n.code,{children:"Lux"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// mainnet\nconst networkID = 1\nconst lux = new Lux(undefined, undefined, undefined, networkID)\n\n// [ 'X-lux1j2j0vzttatv73gr7j4tnd7rp4el3ngcyjy0pre' ]\n// [ 'X-lux19rknw8l0grnfunjrzwxlxync6zrlu33y2jxhrg' ]\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// testnet\nconst networkID = 5\nconst lux = new Lux(undefined, undefined, undefined, networkID)\n\n// [ 'X-testnet1j2j0vzttatv73gr7j4tnd7rp4el3ngcy7kt70x' ]\n// [ 'X-testnet19rknw8l0grnfunjrzwxlxync6zrlu33yxqzg0h' ]\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// custom\nconst networkID = 1337 // also networkID = 0\nconst lux = new Lux(undefined, undefined, undefined, networkID)\n\n// [ 'X-custom1j2j0vzttatv73gr7j4tnd7rp4el3ngcyp7amyv' ]\n// [ 'X-custom19rknw8l0grnfunjrzwxlxync6zrlu33yeg5dya' ]\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// mainnet\nconst networkID = 12345\nconst lux = new Lux(undefined, undefined, undefined, networkID)\n\n// [ 'X-local1j2j0vzttatv73gr7j4tnd7rp4el3ngcythj8q3' ]\n// [ 'X-local19rknw8l0grnfunjrzwxlxync6zrlu33ynpm3qq' ]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},43540:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var r=s(48318);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);