def soma():
    lista = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
    ]  # no python existe a funçõ sum , que soma todos elementos de uma lista
    # Funções são definidas fora de classes, enquanto Métodos são definidos dentro
    print(sum(lista))


def soma1():
    lista = [x for x in range(11)]  # metodo inline
    print(sum(x for x in lista))


def soma_basica():
    lista = [x for x in range(11)]
    soma = 0
    for x in range(
        len(lista)
    ):  # usando contador mais basico ,  um loop que percorre a lista toda e um contador que vai recebendo cada valor e somando a ele msmo se atualizando até o valor final
        soma += x
    print(soma)


def palavra_invertida():
    palavra = "marcelo"  # o colchete representa o elemento que vc quer dentro daquele conjunto
    palavra_invertida = (
        palavra[len(palavra) - 1] + " " + palavra[len(palavra) - 2]
    )  # a função len retorna o tamanha de um vetor , sendo uma string ou uma lista
    print(palavra_invertida)
    # print(palavra[len(palavra)]) -- nao tem como retornar dessa forma pois o len(palavra) vai buscar o tamanho total do vetor , mais a contagem do python começa no 0 e para contar os elemetnos do conjunto
    # então dessa forma ele busca um elemeto fora do alcançe , pois a contagem começa no 0 e não no 1


def palavra_invertida2():
    palavra = "APPLE"
    palavra_invertida = ""
    for letras in range(
        len(palavra) - 1, len(palavra) - 3, -1
    ):  # primeira letra que vai receber é a 'o'
        palavra_invertida += palavra[letras] + " "
    print(palavra_invertida)


def palindromo():
    palavra = "ana ana"
    palavra_contrario = ""
    palavra_contrario += palavra[
        ::-1
    ]  # os dois pontinho uma vez vai pegar a palavra toda menos a ultima letra , porque o -1 vai simbolizar até onde tem que percorrer , com os :: vai representar tudo que vem antes começando do -1(última letra)
    if palavra == palavra_contrario:
        print(f"A palavraa {palavra} é palindromo ")
    else:
        print("Não é palindromo")
    print(palavra_contrario)


def avaliar():
    avaliacao = "Good"  # igual representa atribuição , e dois iguais , é igualdade mesmo
    if (
        avaliacao == "Poor" or avaliacao == "Terrible"
    ):  # condicional or (ou) e and(e)
        return 3
    if avaliacao == "Good" or avaliacao == "Great":
        return 10
    elif avaliacao == "Excellent":
        return 20
    else:
        return 0


# soma()
palavra_invertida2()
# palindromo()
# soma1()
# soma_basica()
# print(avaliar())
# palavra_invertida2()
