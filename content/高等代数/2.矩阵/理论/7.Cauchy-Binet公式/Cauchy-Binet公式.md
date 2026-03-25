---
tags: 高等代数
---


# 1. 引言

对于 $|AB|=|A||B|$ 的 $n$ 阶情况，可用特征值方法证明，而若要推广到 $n$ 维的 $A$ 和 $m$ 维的 $B$，则需要用到以下定理。


# 2. 定理

>[!thm] 定理：Cauchy-Binet 公式
>设 $A=(a_{ij})$ 是 $m\times n$ 矩阵，$B=(b_{ij})$ 是 $n\times m$ 矩阵.  
>$A\begin{pmatrix}i_{1}&\dots&i_{s}\\j_{1}&\dots&j_{s}\end{pmatrix}$ 表示 $A$ 的一个 $s$ 阶子式，它由 $A$ 的第 $i_{1},\dots,1_{s}$ 与第 $j_{1},\dots,j_{s}$ 列交点上的元素按原次序排列组成的行列式.  同理可定义 $B$ 的 $s$ 阶子式.
>（1）若 $m>n$，则必有 $|AB|=0$；
>（2）若 $m\leqslant n$，则必有
>$$\begin{align}
>&|AB|=\displaystyle\sum\limits_{1\leqslant j_{1}<j_{2}<\dots<j_{m}\leqslant n}&A\begin{pmatrix}
>1&2&\dots&m\\j_{1}&j_{2}&\dots&j_{m}
\end{pmatrix}B\begin{pmatrix}
>j_{1}&j_{2}&\dots&j_{m}\\1&2&\dots&m
\end{pmatrix}.
\end{align}$$


## 2.1. 用法

一般用来计算 $m\times n:n\times m$ 矩阵的行列式，并且这其中的指标能够改动的只有 $1,2,\cdots,m$ 这一部分，也就是限定取多少行，取哪几行，而 $j_{1},j_{2},\cdots,j_{m}$ 这部分是由 $\displaystyle\sum$ 本身自行迭代，形象地看，由行确定了之后，就会把所有列组合的可能扫描一次，并将全部加起来。


# 3. 例子










