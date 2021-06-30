restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = [r for r in restaurants if r["nota"] > 3.0]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

print(restaurants[0]["name"])
# Exercício 14: O Fatorial de um número inteiro é representado pela
# multiplicação de todos os números predecessores
# maiores que 0. Por exemplo o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5
# Escreva um código que calcule o fatorial de um número


def fatorial(n):
    if n <= 1:
        return 1
    if n > 1:
        return fatorial(n - 1) * n


print(fatorial(3))


# Exercício 15: Um sistema de avaliações registra valores de 0 a 10 para cada
# avaliação. Após algumas mudanças
# estes valores precisam ser ajustados para avaliações de 0 a 100. Dado uma
# sequência de avaliações
# ratings = [6, 8, 5, 9, 10] . Escreva um código capaz de gerar as avaliações
# após a mudança.
# Neste caso o resultado deveria ser [60, 80, 50, 90, 100]
ratings = [6, 8, 5, 9, 10]

ratings_change = [r*10 for r in ratings]
print(ratings_change)

# Exercício 16: Percorra a lista do exercício 14 e imprima "Múltiplo de 3" 
# se o elemento for divisível por 3.
ratings_change2 = [r for r in ratings if (r % 3 == 0)]
print(ratings_change2)
