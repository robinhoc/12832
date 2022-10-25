let produtos = [];
let request = async () => {
    var id = $('#txtIdade').val();

    console.log(id)

    var Url = ''

    if(id > 0){
        Url = 'http://localhost:3000/produtos/'+id    
    }else{
        Url = 'http://localhost:3000/produtos'
    }

    const response = await fetch(Url);
    
    const data = await response.json();
    produtos = data
    
    listarProdutos(produtos)
    console.log(produtos)
}

$("#btnSalvar").click(function () {
    request()
    console.log('chamou')
})



function listarProdutos(bucaprodutos){
    var tbody = document.getElementById('tbodyResultados');

    tbody.innerHTML = ''

    for (let index = 0; index < bucaprodutos.length; index++) {
        var descricao = bucaprodutos[index].descricao;
        var valor = bucaprodutos[index].valfinal;
        var id = bucaprodutos[index].codigo;

        tbody.innerHTML += '<tr><th>'+ descricao +'</th>'+
        '<th>'+ valor +'</th>'+
        '<th><button id="btnEditar" alt="'+ id +'" type="button" class="btn btn-warning btn-sm">Alterar</button>'+
        '<button id="btnExcluir" alt="'+ id +'"  type="button" class="btn btn-danger btn-sm">Excluir</button> </th>  </tr>'
    } 
}