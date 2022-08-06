import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x448F83810Cb8e82ECA2f17dcFB401Ff0d0acE42F");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "PROJETO SOCIAL DAO",
        description: "Esse NFT vai te dar acesso ao ProjetoSocialDAO!",
        image: readFileSync("scripts/assets/projeto_social.jpeg"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no !");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()