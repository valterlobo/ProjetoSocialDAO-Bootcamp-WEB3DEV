import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // Faça o Deploy de um contracto ERC-20 padrão.
    const tokenAddress = await sdk.deployer.deployToken({
      // Qual o nome do seu token? Ex. "Ethereum"
      name: "Token de Governança do ProjetoSocialDAO",
      // Qual o símbolo do seu token? Ex. "ETH"
      symbol: "PSD",
      // Isso é para o caso de querermos vender o token,
      // nesse caso não queremos, por isso AddressZero de novo.
      primary_sale_recipient: "0x86C917320E3F07e07ca4A6485e3170abA58a1B3b",  //AddressZero,
    });
    console.log(
      "✅ Módulo de token implantado com sucesso. Endereço:",
      tokenAddress,
    );
  } catch (error) {
    console.error("falha ao implantar módulo do token", error);
  }
})();