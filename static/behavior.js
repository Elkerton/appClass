var text = document.getElementById("subject"),
    createElement = document.getElementById("createElement"),
    sideBar = document.getElementById("sidebar");

   
   
    text.addEventListener('keydown',(e) => {
        if(e.keyCode !== 13)
            return;

            createElement.click()

    }); 

    createElement.addEventListener("click", (e) => {
        if(text.value == ''){
            swal("Vazio?", "Bota matéria aí preguiçoso!");
        }else{
        swal('Boa!','Matéria adicionada!','success');
        var subject = text.value;
        var obj = {materia : subject};
        $.post('/banco', obj)
        .done((data) => { addItem(obj)
        
        })
        }
    });

    var ready = function(){
    $.get('/banco')
    .done((data) => {
        data.forEach((item) => {
            addItem(item);
        });
    });
}

    ready();

    var addItem = (item) => {
    var li = document.createElement("button");
        li.innerText = item.materia;
        sideBar.appendChild(li);        
}