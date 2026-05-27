import produtoRepository from "../repositories/produto.repository.js";

async function findAllProdutoService() {
    const produto = await produtoRepository.findAllProdutoRepository();
    return produto;

}

async function createProdutoService(novoProduto) {
    const produto = await produtoRepository.createProdutoRepository
    (novoProduto);

    if (!produto) {
        throw new Error("Erro ao criar novo produto!");
    }

    return produto;

}


export default {
    findAllProdutoService,
    createProdutoService
}