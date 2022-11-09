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

        tbody.innerHTML += '<tr data-descricao='+ descricao +' data-categoria='+ categoria +' data-valor='+ valor +'>'+
        '<th>'+ descricao +'</th>'+
        '<th>'+ categoria +'</th>'+
        '<th>'+ un +'</th>'+
        '<th>'+ valor +'</th>'+
        '<th><button id="btnEditar" name="btnEditar" alt="'+ id +'" type="button" class="btn btn-warning btn-sm">Alterar</button>'+
        '<button id="btnExcluir" alt="'+ id +'"  type="button" class="btn btn-danger btn-sm">Excluir</button> </th>  </tr>';      
    }  
    
    $("button[name='btnEditar']").click(function(){
        var descricao=$(this).parents('tr').attr('data-descricao');
        var categoria=$(this).parents('tr').attr('data-categoria');
        var valor=$(this).parents('tr').attr('data-valor');

        $('#edtdescricao').val(descricao);
        $('#edtcategoria').val(categoria);
        $('#edtpreco').val(valor);
        $('#idupdate').val(id);

        $("#myModal").modal();
    })     
}

function updateproduto(){
    Url = 'http://localhost:3000/produtos';

    var codigo = $('#idupdate').val();      
    var valor = $('#edtpreco').val(); 

    var data = {
        codigo: codigo,
        valor: valor
    }

    fetch(Url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(res => {
            if (res.ok) { console.log("HTTP request successful") }
            else { console.log("HTTP request unsuccessful") }
            return res
        })
        .then(res => res.json())
        .then(data => data)
        .catch(error => error) 
}