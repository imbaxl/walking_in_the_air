---
tags: 高等代数
---



# 1. 引言


# 2. 定义

>[!dfn] 定义： Vandermonde（范德蒙）行列式
>$$\begin{align}
>V_{n}&=\begin{vmatrix}
>1&x_{1}&x_{1}^2&\cdots&x_{1}^{n-2}&x_{1}^{n-1} \\
>1&x_{2}&x_{2}^2&\cdots&x_{2}^{n-2}&x_{2}^{n-1} \\ 
>\vdots&\vdots&\vdots&&\vdots&\vdots \\
>1&x_{n-1}&x_{n-1}^2&\cdots&x_{n-1}^{n-2}&x_{n-1}^{n-1} \\
>1&x_{n}&x_{n}^2&\cdots&x_{n}^{n-2}&x_{n}^{n-1}
\end{vmatrix}\\ &=\displaystyle\prod\limits_{i\leqslant i<j\leqslant n}(x_{j}-x_{i})
\end{align}
>$$

# 3. 例子

## 3.1. 针对连乘符号的例子

$$\begin{align}
V_{4}&=(x_{4}-x_{1})(x_{4}-x_{2})(x_{4}-x_{3})(x_{3}-x_{1})(x_{3}-x_{2})(x_{2}-x_{1}) \\
&=(x_{4}-x_{1})(x_{4}-x_{2})(x_{4}-x_{3})V_{3} \\ \\
V_{3}&=(x_{3}-x_{1})(x_{3}-x_{2})(x_{2}-x_{1})

\end{align}$$







