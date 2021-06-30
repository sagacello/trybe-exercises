def palavras():
    palavra = str(
        input("Digite uma palavra para inverter as duas ultiumas letras : ")
    )
    duas_ultimas_letras_invertidas = (
        palavra[len(palavra) - 1] + " " + palavra[len(palavra) - 2]
    )  # o metodo len traz o tamanho da lista , mais a contagem de elementos de uma lista começa no 0
    print(duas_ultimas_letras_invertidas)


def soma():
    lista_numeros = []
    for x in range(10):
        lista_numeros.append(
            int(input("Digite um número para formar uma lista de numeros  : "))
        )
    soma_lista = sum(lista_numeros)
    print(soma_lista)


def test():
    lista = [1, 2, 3, 4, 5]
    palavra = "marcelo"
    print(len(palavra))
    print(palavra[len(palavra)])
    print(len(lista))


test()
