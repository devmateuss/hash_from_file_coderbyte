# Fluxo de gravação do Node.js

Fluxo de gravação do Node.js
No arquivo JavaScript, escreva um programa para realizar uma solicitação GET na rota https://coderbyte.com/api/challenges/json/age-counting que contém uma chave de dados e o valor é uma string que contém itens no formato : chave=STRING, idade=INTEIRO . Seu objetivo é contar quantos itens existem com idade igual a 32. Então você deve criar um fluxo de gravação para um arquivo chamado output.txt e o conteúdo deve ser os valores-chave (do json) cada um em uma linha separada no a ordem em que apareceram no arquivo json (o arquivo deve terminar com um caractere de nova linha em sua própria linha). Por fim, emita o hash SHA1 do arquivo.

Exemplo de entrada
```
{"data":"key=IAfpK, age=32, key=WNVdi, age=64, key=jp9zt, age=40, key=9snd2, age=32"}
```

Conteúdo do arquivo (output.txt)
```
IAfpK
9snd2
```

Exemplo de saída
```
7caa78c7180ea52e5193d2b4c22e5e8a9e03b486
```