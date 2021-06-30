# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def maior_numero(a, b):
    if a > b:
        return a
    else:
        return b


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def media():
    lista = [1, 2, 3, 12, 13, 14]
    return sum(lista) / len(lista)


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def quadrado_asteristico(altura, largura):
    print(("*" * largura + "\n") * altura)


print(quadrado_asteristico(4, 4))

# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres. Por exemplo, para
lista = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
# o retorno deve ser "Fernanda" .


def maior_string(lista):
    maior = lista[0]
    for palavra in lista:
        if len(palavra) > len(lista):
            maior = palavra
    return maior
    # maior_palavra = max(lista, key=len)
    # return maior_palavra


def maior_string2(lista):
    maior = list((filter(lambda x: len(x), lista)))
    return maior


print(maior_string2(lista))
