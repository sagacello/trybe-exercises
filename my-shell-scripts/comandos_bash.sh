#!/bin/bash
echo " Qual a sua idade ? : "
read idade
if [ "$idade" -ge "16" ] #-lt menor ou igual
# -ge significa maior ou igual
then
    echo "Você pode votar"
else 
    echo "Não pode votar"
fi