---
tags: 数学分析
---

# Stolz定理

>[!thm] 定理： Stolz定理
>设$\{y_n\}$是严格单调增加的正无穷大量，且
>$$\lim\limits_{n\to \infty}\dfrac{x_n-x_{n-1}}{y_n-y_{n-1}}=a \tag{1}$$
>$a$可以为有限量，$+\infty$，$-\infty$，则
>$$ \lim\limits_{n\to \infty}\dfrac{x_n}{y_n}=a.\tag{2}$$

*证明（只有思路）：*
1. $a=0$
	1. 式子$(1)$此时是无穷小量，小于$\epsilon$，从逆推看，只要构造$\dfrac{x_{n}-x_{N}}{y_{n}}$，令其也小于$\epsilon$；
	2. 利用$|x_{n}-x_{n-1}|<\epsilon|y_{n}-y_{n-1}|$，把第一步构造的式子$|x_{n}-x_{N_{1}}|$展开并放缩；
	3. 对于$|\dfrac{x_{n}}{y_{n}}-\dfrac{x_{N}}{y_{n}}|<\epsilon$，考虑左侧用三角不等式将$\dfrac{x_{N}}{y_{n}}$移至右侧，为了使其缩成无穷小量，必须令$n$比$N$要大，故取$N_1>N,\forall n>N_{1}$，成立$\dfrac{x_{n}}{y_{n}}<\epsilon+\dfrac{x_{N}}{y_{n}}<2\epsilon$
2. $a\neq 0$
	1. $a$是非零有限数
	2. $a=+\infty$


