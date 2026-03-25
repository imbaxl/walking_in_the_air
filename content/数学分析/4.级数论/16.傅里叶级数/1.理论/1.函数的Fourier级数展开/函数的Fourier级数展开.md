---
tags: 数学分析
---


| 排序 | 内容 |
| ------- | ------- |
|         |         |

****

>[!lem] 引例1
>把 $f(x) = \dfrac{\pi}{2} - x, x \in [0, \pi]$ 展开成余弦级数. 并计算$$\sum_{n=1}^{\infty} \frac{1}{(2n-1)^2}, \sum_{n=1}^{\infty} \frac{1}{n^4}, \sum_{n=1}^{\infty} \frac{1}{n(n+1)} \left(1 + \frac{1}{2} + \cdots + \frac{1}{n}\right).$$

这道题出自2025年的中科大数学分析真题，展开成余弦级数也是让我没看懂，这其实是原来想的并不考虑傅里叶级数的章节了，但是现在调整了一下，如果说可以把握一些基本的例题，那么下面计算的其实就是幂级数的知识点了，也是可以一并拿分的.

背景仍然从 [[函数项级数]] 出发，探讨除了 Taylor 级数之外的另一种级数，也就是下面所说的三角级数，至少在展开条件的要求上，三角级数要低一些（不需要 $n$ 阶可导），适用性更好.

> 本章节的学习策略是短时间通过简单的例题把握概念。

>[!dfn] 定义1
>形如
>$$
>\begin{align}&A_{0}+\displaystyle\sum\limits_{n=1}^{\infty}A_{n}\sin(nx+\varphi_{n})  \\ &=A_{0}+\sum\limits_{k=1}^{n}(A_{n}\sin \varphi_{n}\cos nx+A_{n}\cos \varphi_{n}\sin nx) \\ &=\dfrac{a_{0}}{2}+\displaystyle\sum\limits_{n=1}^{\infty}(a_{n} \cos nx + b_{n} \sin nx)
 \end{align}
>$$
>的函数项级数称为**三角级数**，其中 $a_{0},a_{n},b_{n}$ 为常数.
>

比如 $1,\cos x,\sin x,\cos2x,\sin2x, \cdots, \cos nx,\sin nx, \cdots$

验证周期性直接验证 $f(x+2\pi)=f(x)$ 即可.


>[!prp] 命题2（Euler-Fourier 公式）
>$$
>\begin{align}a_{n}&=\dfrac{1}{\pi}\displaystyle\int_{-\pi}^\pi f(x)\cos nx \ \mathrm{d}x,\quad n=1,2,\cdots \\b_{n}&=\dfrac{1}{\pi}\displaystyle\int_{-\pi}^\pi f(x)\sin nx \ \mathrm{d}x,\quad n=1,2,\cdots  \end{align}
>$$


>[!cnj] 问题：如何展开成Fourier级数？
>回答：只需要利用 Euler-Fourier 公式计算 Fourier 系数即可.

<font color="#0070c0">证明</font>：省略（利用正交性可保留一个非零的积分）.


>[!prp] 命题3（正弦级数，余弦级数）
>$$
>\begin{align}a_{n}&=\dfrac{2}{\pi}\displaystyle\int_{0}^\pi f(x)\cos nx \ \mathrm{d}x,\quad n=1,2,\cdots \\f(x)&\sim\dfrac{a_{0}}{2}+\displaystyle\sum\limits_{n=1}^{\infty}a_{n} \cos nx.\\  \\ b_{n}&=\dfrac{2}{\pi}\displaystyle\int_{0}^\pi f(x)\sin nx \ \mathrm{d}x,\quad n=1,2,\cdots \\g(x)&\sim \displaystyle\sum\limits_{n=1}^{\infty}b_{n} \sin nx.  \end{align}
>$$
>其中，$f(x)$ 称为余弦级数，$g(x)$ 称为正弦级数.






