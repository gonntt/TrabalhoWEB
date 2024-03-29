document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("adicionar");
    var table = document.getElementById("tabela_kanban").getElementsByTagName('tbody')[0];
  
    button.addEventListener("click", function() {
      
      var novalinha = document.createElement('tr');
      var elem1 = document.createElement('td');
      var elem2 = document.createElement('td');
      var elem3 = document.createElement('td');
      var input1 = document.createElement('input');
      var input2 = document.createElement('input');
      var input3 = document.createElement('input');
  

      input1.type = 'text';
      input2.type = 'text';
      input3.type = 'text';
  

      elem1.appendChild(input1);
      elem2.appendChild(input2);
      elem3.appendChild(input3);
  

      novalinha.appendChild(elem1);
      novalinha.appendChild(elem2);
      novalinha.appendChild(elem3);
  

      table.appendChild(novalinha);
    });
  });