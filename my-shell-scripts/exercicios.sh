#!/bin/bash
#1
echo "Shell Script é demais!"

#2
MENSAGEN="Shell Script com variáveis é demais!"
echo $MENSAGEN

#3
HOSTNAME=$(hostname)
echo "Este script está rodando no computador : $HOSTNAME"  

#4
CAMINHO="/home/sagacello/Documentos/exercicios.sh"
if [ -e "$CAMINHO" ] # e para verificar de o caminho existe
    then
        echo "Caminho $CAMINHO é verdadeiro"
fi

if [ -w "$CAMINHO" ] # w para permissão de escrita
    then
        echo "Arquivo $CAMINHO verficado"
        echo "Tem permissão"

else 
    echo "Arquivo $CAMINHO verficado"
    echo "Sem permissão"
fi

#5 
echo "Digite o caminho do arquivo ou diretório:"
read caminho
if [ -f "$caminho" ] #f para camimho arquivo
    then 
        echo "Esse $caminho leva até um arquivo"
elif [ -d "$caminho" ] #d leva a um diretorio 
    then 
        echo "Esse $caminho leva a um diretorio"
else
    echo "Esse caminho não pertence a um arquivo nem diretório"
fi
echo "Lista detalhada "/n
ls -l $caminho

#6
caminho=$1 #O número 1 significa primiro argumento

if [ -f "$caminho" ] #f para camimho
    then 
        echo "Esse $caminho leva até um arquivo"
elif [ -d "$caminho" ] #d leva a um diretorio 
    then 
        echo "Esse $caminho leva a um diretorio"
else
    echo "Esse caminho não pertence a um arquivo nem diretório"
fi
echo "Lista detalhada "
ls -l $caminho

#7
CAMINHO="/home/sagacello/Documentos/"
if [ -d $CAMINHO ]
    then
        QUANTIDADE_ARQUIVOS=`ls -l $CAMINHO | wc -l` # o ls - l mostra todos os arquivos dentro de CAMINHO e o wc -l conta as linhas 
        echo "É um diretorio " 
        echo "O $CAMINHO tem $QUANTIDADE_ARQUIVOS arquivos"
else 
    echo "Não é diretorio "
fi
