let produtos = [];
let request = async () => {
    var id = $('#txtCodigo').val();

    var mostrarproddesativado = 'N'

    if ($("#checkdesativados").is(":checked")) {
        mostrarproddesativado = 'S'
    }

    console.log(mostrarproddesativado)

    var Url = ''

    if(id > 0){
        Url = 'http://localhost:3000/produtos?desativados='+mostrarproddesativado+'&id='+id    
    }else{
        Url = 'http://localhost:3000/produtos?desativados='+mostrarproddesativado
    }

    const response = await fetch(Url);
    
    const data = await response.json();
    produtos = data

    console.log(produtos) 

    listarProdutos(produtos)

}

$("#btnSalvar").click(function () {
    request()
    console.log('chamou')
})



function listarProdutos(bucaprodutos){
    var tbody = document.getElementById('tbodyResultados');

    tbody.innerHTML = ''

    for (let index = 0; index < bucaprodutos.length; index++) {
        var descricao = bucaprodutos[index].DESCRICAO;
        var un = bucaprodutos[index].UN;
        var valor = bucaprodutos[index].PRECO;
        var id = bucaprodutos[index].CODIGO;
        var categoria = bucaprodutos[index].nomecategoria;

        tbody.innerHTML += '<tr><th>'+ descricao +'</th>'+
        '<th>'+ categoria +'</th>'+
        '<th>'+ un +'</th>'+
        '<th>'+ valor +'</th>'+
        '<th><button id="btnEditar'+ id +'" alt="'+ id +'" type="button" class="btn btn-warning btn-sm">Alterar</button>'+
        '<button id="btnExcluir" alt="'+ id +'"  type="button" class="btn btn-danger btn-sm">Excluir</button> </th>  </tr>';
        
        var NumBotao = '#btnEditar'+id;

        $(NumBotao).click(function(){
            $("#myModal").modal();
            $('#edtdescricao').val(descricao);
            $('#edtcategoria').val(categoria);
            $('#edtpreco').val(valor);
        });          
    }    
}