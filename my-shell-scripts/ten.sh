CAMINHO="/home/sagacello/Documentos/"
if [ -d $CAMINHO ]
    then
       
        QUANTIDADE_ARQUIVOS=`ls -l $CAMINHO | wc -l` # o ls - l mostra todos os arquivos dentro de CAMINHO e o wc -l conta as linhas 
        echo "É um diretorio " 
        echo "O $CAMINHO tem $QUANTIDADE_ARQUIVOS arquivos"
else 
    echo "Não é diretorio "
fi