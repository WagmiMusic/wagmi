import { Button } from "@material-ui/core";
import { useMoralisCloudFunction, useWeb3ExecuteFunction } from "react-moralis"


const MintButton = () => {

  const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
    contractAddress:"0x64B4B8AD8AB87F988d0FE67c38aFE1acd61B9348",
    functionName:"mint",
    abi:[{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    params:{
      _tokenId:5,
      _amount:1
    }
  });

  return (
  <div>
    <Button style={{backgroundColor: '#333', color: 'white'}} onClick={() => fetch()} disabled={isFetching}>Mint</Button>
  </div>)

}

// const WLMintButton = () => {

//   const { whitelistAddress, error, isLoading } = useMoralisCloudFunction("getWL", {

//   });

//   const { data, err, fetch, isFetching, isLoad } = useWeb3ExecuteFunction({
//     contractAddress:"0x64B4B8AD8AB87F988d0FE67c38aFE1acd61B9348",
//     functionName:"mint",
//     abi:[{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"}],
//     params:{
//       _tokenId:5,
//       _amount:1,
//       _MerklePloof:whitelistAddress
//     }
//   });

//   return (
//   <div>
//     <Button onClick={() => fetch()} disabled={isFetching}>Mint</Button>
//   </div>)

// }
export default MintButton