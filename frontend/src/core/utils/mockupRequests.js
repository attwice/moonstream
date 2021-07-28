import moment from "moment";
const MOCK_API = process.env.NEXT_PUBLIC_SIMIOTICS_AUTH_URL;
var MockAdapter = require("axios-mock-adapter");
const makeid = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const makenum = (length) => {
  var result = "";
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const randDate = () => {
  return moment(
    new Date(+new Date() - Math.floor(Math.random() * 10000000000))
  ).format("MM/DD/YYYY");
};
let MockSubscriptions = [
  {
    label: "Bobs wallet",
    address: `0x` + makeid(24),
    id: makeid(24),
    notes: "lorem", //ToDo: rename in to label
    created_at: randDate(),
    subscription_type: "ethereum_blockchain",
  },
  {
    label: "Alices wallet",
    address: `0x` + makeid(40),
    id: makeid(24),
    notes: "lorem",
    created_at: randDate(),
    subscription_type: "ethereum_txpool",
  },
  {
    label: "Alogrand Ricks Wallet",
    address: `0x` + makeid(40),
    id: makeid(24),
    notes: "lorem",
    created_at: randDate(),
    subscription_type: "algorand_blockchain",
  },
  {
    label: "Unknown wallet",
    address: `0x` + makeid(40),
    id: makeid(24),
    notes: "lorem",
    created_at: randDate(),
    subscription_type: "ethereum_blockchain",
  },
  {
    label: "Unknown wallet",
    address: `0x` + makeid(40),
    id: makeid(24),
    notes: "lorem",
    created_at: randDate(),
    subscription_type: "ethereum_blockchain",
  },
];
const enableMockupRequests = (axiosInstance) => {
  let mock = new MockAdapter(axiosInstance, { onNoMatch: "passthrough" });

  mock.onGet(`${MOCK_API}/subscription_types/`).reply(200, {
    data: [
      {
        subscription_type: "ethereum_blockchain",
        id: makeid(24),
        name: "Ethereum",
        active: true,
        subscription_plan_id: makeid(24),
      },
      {
        subscription_type: "ethereum_txpool",
        id: makeid(24),
        name: "Ethereum Transaction Pool",
        active: true,
        subscription_plan_id: makeid(24),
      },
      {
        subscription_type: "algorand_blockchain",
        id: makeid(24),
        name: "Algorand",
        active: false,
        subscription_plan_id: makeid(24),
      },
      {
        subscription_type: "free",
        id: makeid(24),
        name: "Free subscription",
        active: true,
        subscription_plan_id: null,
      },
    ],
  });

  mock.onGet(`${MOCK_API}/stream`).reply(200, {
    stream: [
      {
        from_label: "Bobs wallet",
        to_label: "Alices wallet",
        to: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420AG",
        from: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420c4",
        gas: 2265656,
        gasPrice: 1000000000,
        hash: "0x5f0b6e212e55c7120f36fe6f88d46eb001c848064fd099116b42805bb3564ae6",
        value: 0,
        input:
          "0x606061026b61014039602061026b60c03960c05160a01c1561002057600080fd5b61014051600055610160516001556001546101805181818301101561004457600080fd5b80820190509050600255600254421061005c57600080fd5b61025356600436101561000d576101ec565b600035601c52600051631998aeef8114156100855760015442101561003157600080fd5b600254421061003f57600080fd5b600454341161004d57600080fd5b600660035460e05260c052604060c020805460045481818301101561007157600080fd5b808201905090508155503360035534600455005b341561009057600080fd5b633ccfd60b8114156100db5760063360e05260c052604060c0205461014052600060063360e05260c052604060c02055600060006000600061014051336000f16100d957600080fd5b005b63fe67a54b811415610124576002544210156100f657600080fd5b6005541561010357600080fd5b600160055560006000600060006004546000546000f161012257600080fd5b005b6338af3eed81141561013c5760005460005260206000f35b634f245ef78114156101545760015460005260206000f35b632a24f46c81141561016c5760025460005260206000f35b6391f901578114156101845760035460005260206000f35b63d57bde7981141561019c5760045460005260206000f35b6312fa6feb8114156101b45760055460005260206000f35b6326b387bb8114156101ea5760043560a01c156101d057600080fd5b600660043560e05260c052604060c0205460005260206000f35b505b60006000fd5b61006161025303610061600039610061610253036000f30000000000000000000000002e337e0fb68f5e51ce9295e80bcd02273d7420c40000000000000000000000000000000000000000000000000000000060d2b04a00000000000000000000000000000000000000000000000000000000616b46ca",
      },
      {
        from_label: "Bobs wallet",
        to_label: "Alices wallet",
        to: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420AG",
        from: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420c4",
        gas: 2265656,
        gasPrice: 1000000000,
        hash: "0x5f0b6e212e55c7120f36fe6f88d46eb001c848064fd099116b42805bb3564ae6",
        value: 0,
        input:
          "0x606061026b61014039602061026b60c03960c05160a01c1561002057600080fd5b61014051600055610160516001556001546101805181818301101561004457600080fd5b80820190509050600255600254421061005c57600080fd5b61025356600436101561000d576101ec565b600035601c52600051631998aeef8114156100855760015442101561003157600080fd5b600254421061003f57600080fd5b600454341161004d57600080fd5b600660035460e05260c052604060c020805460045481818301101561007157600080fd5b808201905090508155503360035534600455005b341561009057600080fd5b633ccfd60b8114156100db5760063360e05260c052604060c0205461014052600060063360e05260c052604060c02055600060006000600061014051336000f16100d957600080fd5b005b63fe67a54b811415610124576002544210156100f657600080fd5b6005541561010357600080fd5b600160055560006000600060006004546000546000f161012257600080fd5b005b6338af3eed81141561013c5760005460005260206000f35b634f245ef78114156101545760015460005260206000f35b632a24f46c81141561016c5760025460005260206000f35b6391f901578114156101845760035460005260206000f35b63d57bde7981141561019c5760045460005260206000f35b6312fa6feb8114156101b45760055460005260206000f35b6326b387bb8114156101ea5760043560a01c156101d057600080fd5b600660043560e05260c052604060c0205460005260206000f35b505b60006000fd5b61006161025303610061600039610061610253036000f30000000000000000000000002e337e0fb68f5e51ce9295e80bcd02273d7420c40000000000000000000000000000000000000000000000000000000060d2b04a00000000000000000000000000000000000000000000000000000000616b46ca",
      },
      {
        from_label: "Bobs wallet",
        to_label: "Alices wallet",
        to: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420AG",
        from: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420c4",
        gas: 2265656,
        gasPrice: 1000000000,
        hash: "0x5f0b6e212e55c7120f36fe6f88d46eb001c848064fd099116b42805bb3564ae6",
        value: 0,
        input:
          "0x606061026b61014039602061026b60c03960c05160a01c1561002057600080fd5b61014051600055610160516001556001546101805181818301101561004457600080fd5b80820190509050600255600254421061005c57600080fd5b61025356600436101561000d576101ec565b600035601c52600051631998aeef8114156100855760015442101561003157600080fd5b600254421061003f57600080fd5b600454341161004d57600080fd5b600660035460e05260c052604060c020805460045481818301101561007157600080fd5b808201905090508155503360035534600455005b341561009057600080fd5b633ccfd60b8114156100db5760063360e05260c052604060c0205461014052600060063360e05260c052604060c02055600060006000600061014051336000f16100d957600080fd5b005b63fe67a54b811415610124576002544210156100f657600080fd5b6005541561010357600080fd5b600160055560006000600060006004546000546000f161012257600080fd5b005b6338af3eed81141561013c5760005460005260206000f35b634f245ef78114156101545760015460005260206000f35b632a24f46c81141561016c5760025460005260206000f35b6391f901578114156101845760035460005260206000f35b63d57bde7981141561019c5760045460005260206000f35b6312fa6feb8114156101b45760055460005260206000f35b6326b387bb8114156101ea5760043560a01c156101d057600080fd5b600660043560e05260c052604060c0205460005260206000f35b505b60006000fd5b61006161025303610061600039610061610253036000f30000000000000000000000002e337e0fb68f5e51ce9295e80bcd02273d7420c40000000000000000000000000000000000000000000000000000000060d2b04a00000000000000000000000000000000000000000000000000000000616b46ca",
      },
      {
        from_label: "Bobs wallet",
        to_label: "Alices wallet",
        to: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420AG",
        from: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420c4",
        gas: 2265656,
        gasPrice: 1000000000,
        hash: "0x5f0b6e212e55c7120f36fe6f88d46eb001c848064fd099116b42805bb3564ae6",
        value: 0,
        input:
          "0x606061026b61014039602061026b60c03960c05160a01c1561002057600080fd5b61014051600055610160516001556001546101805181818301101561004457600080fd5b80820190509050600255600254421061005c57600080fd5b61025356600436101561000d576101ec565b600035601c52600051631998aeef8114156100855760015442101561003157600080fd5b600254421061003f57600080fd5b600454341161004d57600080fd5b600660035460e05260c052604060c020805460045481818301101561007157600080fd5b808201905090508155503360035534600455005b341561009057600080fd5b633ccfd60b8114156100db5760063360e05260c052604060c0205461014052600060063360e05260c052604060c02055600060006000600061014051336000f16100d957600080fd5b005b63fe67a54b811415610124576002544210156100f657600080fd5b6005541561010357600080fd5b600160055560006000600060006004546000546000f161012257600080fd5b005b6338af3eed81141561013c5760005460005260206000f35b634f245ef78114156101545760015460005260206000f35b632a24f46c81141561016c5760025460005260206000f35b6391f901578114156101845760035460005260206000f35b63d57bde7981141561019c5760045460005260206000f35b6312fa6feb8114156101b45760055460005260206000f35b6326b387bb8114156101ea5760043560a01c156101d057600080fd5b600660043560e05260c052604060c0205460005260206000f35b505b60006000fd5b61006161025303610061600039610061610253036000f30000000000000000000000002e337e0fb68f5e51ce9295e80bcd02273d7420c40000000000000000000000000000000000000000000000000000000060d2b04a00000000000000000000000000000000000000000000000000000000616b46ca",
      },
      {
        from_label: "Bobs wallet",
        to_label: "Alices wallet",
        to: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420AG",
        from: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420c4",
        gas: 2265656,
        gasPrice: 1000000000,
        hash: "0x5f0b6e212e55c7120f36fe6f88d46eb001c848064fd099116b42805bb3564ae6",
        value: 0,
        input:
          "0x606061026b61014039602061026b60c03960c05160a01c1561002057600080fd5b61014051600055610160516001556001546101805181818301101561004457600080fd5b80820190509050600255600254421061005c57600080fd5b61025356600436101561000d576101ec565b600035601c52600051631998aeef8114156100855760015442101561003157600080fd5b600254421061003f57600080fd5b600454341161004d57600080fd5b600660035460e05260c052604060c020805460045481818301101561007157600080fd5b808201905090508155503360035534600455005b341561009057600080fd5b633ccfd60b8114156100db5760063360e05260c052604060c0205461014052600060063360e05260c052604060c02055600060006000600061014051336000f16100d957600080fd5b005b63fe67a54b811415610124576002544210156100f657600080fd5b6005541561010357600080fd5b600160055560006000600060006004546000546000f161012257600080fd5b005b6338af3eed81141561013c5760005460005260206000f35b634f245ef78114156101545760015460005260206000f35b632a24f46c81141561016c5760025460005260206000f35b6391f901578114156101845760035460005260206000f35b63d57bde7981141561019c5760045460005260206000f35b6312fa6feb8114156101b45760055460005260206000f35b6326b387bb8114156101ea5760043560a01c156101d057600080fd5b600660043560e05260c052604060c0205460005260206000f35b505b60006000fd5b61006161025303610061600039610061610253036000f30000000000000000000000002e337e0fb68f5e51ce9295e80bcd02273d7420c40000000000000000000000000000000000000000000000000000000060d2b04a00000000000000000000000000000000000000000000000000000000616b46ca",
      },
      {
        from_label: "Bobs wallet",
        to_label: "Alices wallet",
        to: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420AG",
        from: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420c4",
        gas: 2265656,
        gasPrice: 1000000000,
        hash: "0x5f0b6e212e55c7120f36fe6f88d46eb001c848064fd099116b42805bb3564ae6",
        value: 0,
        input:
          "0x606061026b61014039602061026b60c03960c05160a01c1561002057600080fd5b61014051600055610160516001556001546101805181818301101561004457600080fd5b80820190509050600255600254421061005c57600080fd5b61025356600436101561000d576101ec565b600035601c52600051631998aeef8114156100855760015442101561003157600080fd5b600254421061003f57600080fd5b600454341161004d57600080fd5b600660035460e05260c052604060c020805460045481818301101561007157600080fd5b808201905090508155503360035534600455005b341561009057600080fd5b633ccfd60b8114156100db5760063360e05260c052604060c0205461014052600060063360e05260c052604060c02055600060006000600061014051336000f16100d957600080fd5b005b63fe67a54b811415610124576002544210156100f657600080fd5b6005541561010357600080fd5b600160055560006000600060006004546000546000f161012257600080fd5b005b6338af3eed81141561013c5760005460005260206000f35b634f245ef78114156101545760015460005260206000f35b632a24f46c81141561016c5760025460005260206000f35b6391f901578114156101845760035460005260206000f35b63d57bde7981141561019c5760045460005260206000f35b6312fa6feb8114156101b45760055460005260206000f35b6326b387bb8114156101ea5760043560a01c156101d057600080fd5b600660043560e05260c052604060c0205460005260206000f35b505b60006000fd5b61006161025303610061600039610061610253036000f30000000000000000000000002e337e0fb68f5e51ce9295e80bcd02273d7420c40000000000000000000000000000000000000000000000000000000060d2b04a00000000000000000000000000000000000000000000000000000000616b46ca",
      },
      {
        from_label: "Bobs wallet",
        to_label: "Alices wallet",
        to: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420AG",
        from: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420c4",
        gas: 2265656,
        gasPrice: 1000000000,
        hash: "0x5f0b6e212e55c7120f36fe6f88d46eb001c848064fd099116b42805bb3564ae6",
        value: 0,
        input:
          "0x606061026b61014039602061026b60c03960c05160a01c1561002057600080fd5b61014051600055610160516001556001546101805181818301101561004457600080fd5b80820190509050600255600254421061005c57600080fd5b61025356600436101561000d576101ec565b600035601c52600051631998aeef8114156100855760015442101561003157600080fd5b600254421061003f57600080fd5b600454341161004d57600080fd5b600660035460e05260c052604060c020805460045481818301101561007157600080fd5b808201905090508155503360035534600455005b341561009057600080fd5b633ccfd60b8114156100db5760063360e05260c052604060c0205461014052600060063360e05260c052604060c02055600060006000600061014051336000f16100d957600080fd5b005b63fe67a54b811415610124576002544210156100f657600080fd5b6005541561010357600080fd5b600160055560006000600060006004546000546000f161012257600080fd5b005b6338af3eed81141561013c5760005460005260206000f35b634f245ef78114156101545760015460005260206000f35b632a24f46c81141561016c5760025460005260206000f35b6391f901578114156101845760035460005260206000f35b63d57bde7981141561019c5760045460005260206000f35b6312fa6feb8114156101b45760055460005260206000f35b6326b387bb8114156101ea5760043560a01c156101d057600080fd5b600660043560e05260c052604060c0205460005260206000f35b505b60006000fd5b61006161025303610061600039610061610253036000f30000000000000000000000002e337e0fb68f5e51ce9295e80bcd02273d7420c40000000000000000000000000000000000000000000000000000000060d2b04a00000000000000000000000000000000000000000000000000000000616b46ca",
      },
      {
        from_label: "Bobs wallet",
        to_label: "Alices wallet",
        to: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420AG",
        from: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420c4",
        gas: 2265656,
        gasPrice: 1000000000,
        hash: "0x5f0b6e212e55c7120f36fe6f88d46eb001c848064fd099116b42805bb3564ae6",
        value: 0,
        input:
          "0x606061026b61014039602061026b60c03960c05160a01c1561002057600080fd5b61014051600055610160516001556001546101805181818301101561004457600080fd5b80820190509050600255600254421061005c57600080fd5b61025356600436101561000d576101ec565b600035601c52600051631998aeef8114156100855760015442101561003157600080fd5b600254421061003f57600080fd5b600454341161004d57600080fd5b600660035460e05260c052604060c020805460045481818301101561007157600080fd5b808201905090508155503360035534600455005b341561009057600080fd5b633ccfd60b8114156100db5760063360e05260c052604060c0205461014052600060063360e05260c052604060c02055600060006000600061014051336000f16100d957600080fd5b005b63fe67a54b811415610124576002544210156100f657600080fd5b6005541561010357600080fd5b600160055560006000600060006004546000546000f161012257600080fd5b005b6338af3eed81141561013c5760005460005260206000f35b634f245ef78114156101545760015460005260206000f35b632a24f46c81141561016c5760025460005260206000f35b6391f901578114156101845760035460005260206000f35b63d57bde7981141561019c5760045460005260206000f35b6312fa6feb8114156101b45760055460005260206000f35b6326b387bb8114156101ea5760043560a01c156101d057600080fd5b600660043560e05260c052604060c0205460005260206000f35b505b60006000fd5b61006161025303610061600039610061610253036000f30000000000000000000000002e337e0fb68f5e51ce9295e80bcd02273d7420c40000000000000000000000000000000000000000000000000000000060d2b04a00000000000000000000000000000000000000000000000000000000616b46ca",
      },
      {
        from_label: "Bobs wallet",
        to_label: "Alices wallet",
        to: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420AG",
        from: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420c4",
        gas: 2265656,
        gasPrice: 1000000000,
        hash: "0x5f0b6e212e55c7120f36fe6f88d46eb001c848064fd099116b42805bb3564ae6",
        value: 0,
        input:
          "0x606061026b61014039602061026b60c03960c05160a01c1561002057600080fd5b61014051600055610160516001556001546101805181818301101561004457600080fd5b80820190509050600255600254421061005c57600080fd5b61025356600436101561000d576101ec565b600035601c52600051631998aeef8114156100855760015442101561003157600080fd5b600254421061003f57600080fd5b600454341161004d57600080fd5b600660035460e05260c052604060c020805460045481818301101561007157600080fd5b808201905090508155503360035534600455005b341561009057600080fd5b633ccfd60b8114156100db5760063360e05260c052604060c0205461014052600060063360e05260c052604060c02055600060006000600061014051336000f16100d957600080fd5b005b63fe67a54b811415610124576002544210156100f657600080fd5b6005541561010357600080fd5b600160055560006000600060006004546000546000f161012257600080fd5b005b6338af3eed81141561013c5760005460005260206000f35b634f245ef78114156101545760015460005260206000f35b632a24f46c81141561016c5760025460005260206000f35b6391f901578114156101845760035460005260206000f35b63d57bde7981141561019c5760045460005260206000f35b6312fa6feb8114156101b45760055460005260206000f35b6326b387bb8114156101ea5760043560a01c156101d057600080fd5b600660043560e05260c052604060c0205460005260206000f35b505b60006000fd5b61006161025303610061600039610061610253036000f30000000000000000000000002e337e0fb68f5e51ce9295e80bcd02273d7420c40000000000000000000000000000000000000000000000000000000060d2b04a00000000000000000000000000000000000000000000000000000000616b46ca",
      },
      {
        from_label: "Bobs wallet",
        to_label: "Alices wallet",
        to: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420AG",
        from: "0x2E337E0Fb68F5e51ce9295E80BCd02273d7420c4",
        gas: 2265656,
        gasPrice: 1000000000,
        hash: "0x5f0b6e212e55c7120f36fe6f88d46eb001c848064fd099116b42805bb3564ae6",
        value: 0,
        input:
          "0x606061026b61014039602061026b60c03960c05160a01c1561002057600080fd5b61014051600055610160516001556001546101805181818301101561004457600080fd5b80820190509050600255600254421061005c57600080fd5b61025356600436101561000d576101ec565b600035601c52600051631998aeef8114156100855760015442101561003157600080fd5b600254421061003f57600080fd5b600454341161004d57600080fd5b600660035460e05260c052604060c020805460045481818301101561007157600080fd5b808201905090508155503360035534600455005b341561009057600080fd5b633ccfd60b8114156100db5760063360e05260c052604060c0205461014052600060063360e05260c052604060c02055600060006000600061014051336000f16100d957600080fd5b005b63fe67a54b811415610124576002544210156100f657600080fd5b6005541561010357600080fd5b600160055560006000600060006004546000546000f161012257600080fd5b005b6338af3eed81141561013c5760005460005260206000f35b634f245ef78114156101545760015460005260206000f35b632a24f46c81141561016c5760025460005260206000f35b6391f901578114156101845760035460005260206000f35b63d57bde7981141561019c5760045460005260206000f35b6312fa6feb8114156101b45760055460005260206000f35b6326b387bb8114156101ea5760043560a01c156101d057600080fd5b600660043560e05260c052604060c0205460005260206000f35b505b60006000fd5b61006161025303610061600039610061610253036000f30000000000000000000000002e337e0fb68f5e51ce9295e80bcd02273d7420c40000000000000000000000000000000000000000000000000000000060d2b04a00000000000000000000000000000000000000000000000000000000616b46ca",
      },
    ],
    pageParams: {
      next_offset: 25,
      total_results: 4,
      offset: 0,
    },
  });
};
export default enableMockupRequests;