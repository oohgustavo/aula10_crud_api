import produtoRepository from "../repositories/produto.repository.js";

async function findALLProdutoService() {
    const produto = await produtoRepository.findAllProdutoRepository();
    return produtos;

}
export default {
    findALLProdutoService
}