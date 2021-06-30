import torch
import torch.nn as nn
import numpy as np
from sklearn import datasets
import matplotlib.pyplot as plt

# para instalar o pytorch https://pytorch.org/
"""
1- Desing dod modelo(input, output, forward pass)
2- Definição da função de custo e otimizador
3- loop de treinamento
    -forward pass : calcular a predição e o custo
    -bacwarpass: calcular os gradientes
    -atualizar os pesos
"""
x_numpy, y_numpy = datasets.make_regression(
    n_samples=100, n_features=1, noise=20, random_state=1
)  # importei o dataset , com 100 amostras e so uam caracteristica
# x é variavel dependente

x = torch.from_numpy(
    x_numpy.astype(np.float32)
)  # convertendo de um array para um tensor , é necessario para calcular
y = torch.from_numpy(y_numpy.astype(np.float32))
y = y.view(
    y.shape[0], 1
)  # mudando a dimensao na colua , tirando da horizontal e colocando na vertical ( uma unica coluna)

print(plt.plot(x_numpy, y_numpy, "ro"))

# Definição do modelo
input_size = 1
output_size = 1
model = nn.Linear(input_size, output_size)

# Definição da função de custo e otimizador
learning_rate = 0.01
criterion = nn.MSELoss()  # minimos quadrados
optimizer = torch.optim.SGD(
    model.parameters(), lr=learning_rate
)  # vai atualizar os pesos SGD(sticatic gradient descente)

# Loop de treinamento
num_epochs = 1000
contador_custo = []
for epoch in range(num_epochs):
    y_hat = model(x)  # vai gerar uma linha aleatoria(traçar a reta nos pontos)
    loss = criterion(
        y_hat, y
    )  # calcular a função de perda, diferença entre estimado e real
    contador_custo.append(loss)

# backward pass (calcular gradientes)
loss.backward()
