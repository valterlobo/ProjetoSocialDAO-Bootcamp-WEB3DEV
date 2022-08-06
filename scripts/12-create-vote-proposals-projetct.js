import sdk from "./1-initialize-sdk.js";
import { ethers } from "ethers";

// Nosso contrato de votação.
const vote = sdk.getVote("0xC97eCA03eB2b6B69BeE9AE343A014d3bBa2A37BB");

// Nosso contrato ERC-20.
const token = sdk.getToken("0xddFe9d9FCd044c59dfd1363509f26169214bdF5E");

(async () => {

  try {
    // Crie uma proposta para transferir para nós mesmos 6,900 tokens por sermos irados.
    const amount = 8_900;

    const description = "A DAO deveria transferir " + amount + " tokens do tesouro para " +
    "0x0d5FdE8D013F3139CCE77d91Cd1346434b173311" + "  financiar o projeto de \"Venda direta do produtor\"  ? ";

    const executions = [
      {
        // Novamente, estamos mandando para nós mesmos 0 ETH. Apenas mandando nosso próprio token.
        nativeTokenValue: 0,
        transactionData: token.encoder.encode(
          // Nós estamos fazendo uma transferência do tesouro para a nossa carteira.
          "transfer",
          [
            "0x0d5FdE8D013F3139CCE77d91Cd1346434b173311",
            ethers.utils.parseUnits(amount.toString(), 18),
          ]
        ),

        toAddress: token.getAddress(),
      },
    ];

    await vote.propose(description, executions);

    console.log(
      "✅ Proposta de dar prêmio do tesouro para si mesmo criada com sucesso, vamos torcer para votarem sim!"
    );
  } catch (error) {
    console.error("falha ao criar segunda proposta", error);
  }
})();
