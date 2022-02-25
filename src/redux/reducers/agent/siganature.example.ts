export const SignatureEx = {
  'types':{
    // 'EIP712Domain':[
    //   {
    //     'name':'name',
    //     'type':'string'
    //   },
    //   {
    //     'name':'version',
    //     'type':'string'
    //   },
    //   {
    //     'name':'chainId',
    //     'type':'uint256'
    //   },
    //   {
    //     'name':'verifyingContract',
    //     'type':'address'
    //   },
    //   {
    //     'name':'salt',
    //     'type':'bytes32'
    //   }
    // ],
    'MessagePayload':[
      {
        'name':'action',
        'type':'string'
      },
      {
        'name':'name',
        'type':'string'
      },
      {
        'name':'wallet',
        'type':'address'
      },
      {
        'name':'nonce',
        'type':'string'
      }
    ]
  },
  'primaryType':'MessagePayload',
  'domain':{
    'name':'CEXISWAP',
    'version':'v1',
    'chainId':'0x1',
    'verifyingContract':'0x11aC75B61C0974f71a6e171e1e36714C4f105E35',
    'salt':'0x3832313838646362393535343131656338633130303234326163313230303033'
  },
  'message':{
    'action':'Login',
    'name':'app.cexiswap.io',
    'nonce':'82188dcb955411ec8c100242ac120003',
    'wallet':'0xffF9f6716Fde72A3b5f49178801d11D44929891B'
  }
}