from random import sample
import numpy as np

# A biblioteca padrão numpy possui uma função chamada numpy.histogram(), que é capaz de computar histogramas com grande eficiência.


class Mega_sena(object):
    def __init__(self, quantia_jogos):
        self.quantia_jogos = quantia_jogos
        self.quantia_dezenas = 6
        self.quantia_numeros_totais = 60
        self.criar_jogos()

    def criar_jogos(self):
        self.jogos = [
            sample(
                range(1, self.quantia_numeros_totais + 1), self.quantia_dezenas
            )
            for n in range(self.quantia_jogos)
        ]
        # Retorne uma lista ordenada aleatoriamente de tamanho k dessa
        #  sequência # o primeiro argumento do sample é a lista ou tupla que
        # ele aceita tudo ,nesse caso eu passei
        # como primeiro argumento um numero que vai variar entre 1 e o ultimo
        # numero determinado
        # e como segundo argumento é tamanho que a lista vai ter
        # isso tudo dentro de um loop de quantidade de jogos a ser feito

    def contagem(self):
        # histograma (também conhecido como distribuição de frequências)
        """
        Neste exemplo:

        np.histogram([1, 2, 1], bins=[0, 1, 2, 3])
        Existem 3 posições para valores que variam de 0 a 1 (excl. 1), 1 a 2
        (excl. 2) e 2 a 3 (incl. 3), respectivamente. A maneira como o Numpy
        define esses compartimentos se fornecendo uma lista de delimitadores
        ( [0, 1, 2, 3]) neste exemplo,
        embora ele também retorne os compartimentos nos resultados, pois ele
        pode escolhê-los automaticamente na entrada, se nenhum for
        especificado. Se bins=5, por exemplo, ele usará 5 compartimentos de
        largura igual entre o valor mínimo de entrada e o valor máximo de 
        entrada.
        Os valores de entrada são 1, 2 e 1. Portanto, a posição "1 a 2" contém
         duas ocorrências (os dois 1valores) e a posição "2 a 3" contém uma
         ocorrência (a 2). Estes resultados são no primeiro item na tupla 
         retornada: array([0, 2, 1]).

        """
        # A histogram função Numpy não desenha o histograma, mas calcula as
        # ocorrências de dados de entrada
        # exemplo:hist, bin_edges = np.histogram([1, 1, 2, 2, 2, 2, 3], bins
        # = 
        # range(5))
        # bin_edges é uma variavel que precisa ser passada junto com o metodo
        # histogram(), mais essas duas variaveis podem ter quaisquer nomes
        # , ess bin_edges vai receber a partir do metodo histogram a quantidade
        #  de intervalos do metodo , bin_edges indica que o compartimento
        #  nº 0 é o intervalo [0,1), o compartimento nº 1 é [1,2), ..., o 
        # compartimento nº 3 é [3,4).
        # e o hist vai retornar a quantidade de itens de cada posição ,
        #  por exemplo : 0 itens na posição 0, 2 na posição 1, 4 na posição 
        # 3, 1 na posição 4.
        # a partir dos jogos criados o hist vai receber uma varredura dentro 
        # de self.jogos , para cada dezena dentro de cada jogo dentro do 
        # conjunto de todos os jogos
        hist, bin_edges = np.histogram(
            [dezena for dezena in [jogo for jogo in self.jogos]],
            range(1, self.quantia_numeros_totais + 2),
        )  # cada coluna vai me representar um numero, tirando o 0
        self.lista = [
            (dezena, frequencia)
            for dezena, frequencia in enumerate(hist[:], 1)
        ]
        # print(hist)
        # print(hist, bin_edges)
        return [
            (dezena, frequencia)
            for dezena, frequencia in enumerate(hist[:], 1)
        ]  # eu tenho que ter um retorno onde cada coluna de 
       # um histograma vai representar um numero ,entao o numero um ta no 
       # conjunto 1
       #  (esse conjunto ja vai me retornar sua quantidade de repetiçoes)

    # funçao alternativa
    def contagem_de_numeros2(self):
        for jogo in self.jogos:
            for dezena in jogo:
                contagem, _ = np.histogram(
                    dezena, range(1, self.quantia_numeros_totais + 2)
                )
                return [
                    (dezena, frquencia)
                    for dezena, frquencia in enumerate(contagem[:], 1)
                ]

    def exibir_jogos(self):
        for indice, valor in enumerate(self.jogos):
            print(f"{indice+1}.{sorted(valor)}")

    def exibir_contagem(self):
        for dezena, frequencia in m.contagem():
            print(f"A quantide de números {dezena} foi {frequencia}")

        print(f"Para um total de {self.quantia_jogos} jogos.")

    def valor_mais_repetido(self):
        self.lista_mais_repetidos = []
        for indice, valor in enumerate(self.lista):
            if (max(int(numero) for indice, numero in self.lista)) == valor[1]:
                print(
                    f"O numero {indice} foi o que mais se repetiu , {valor[1]} vezes "
                )
                self.lista_mais_repetidos.append([indice, valor[1]])
        return self.lista_mais_repetidos


m = Mega_sena(int(input("Quantos jogos deseja fazer ? ")))
m.contagem()
m.exibir_jogos()
m.exibir_contagem()
