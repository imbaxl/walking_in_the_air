---
{}
---


>[!dfn] 定义： Riemann 积分
>设 $f(x)$ 是定义在 $[a,b]$ 上的有界函数，在 $[a,b]$ 上任意取分点 $\{{x_{i}}\}^n_{i=0}$，作成一种划分
> $$P:a=x_{0}<x_{1}<x_{2}<\dots<x_{n}=b $$
并任意取点 $\xi_{i}\in [x_{i-1},x_{i}]$. 记小区间 $[x_{i-1},x_{i}]$ 的长度为 $\Delta x_{i}=x_{i}-x_{i-1}$，并令 $\lambda=\displaystyle\max_{1\leqslant i\leqslant n}(\Delta x_{i})$，若当 $\lambda \to 0$ 时，极限
> $$\lim\limits_{\lambda \to 0}\sum\limits_{i=1}^{n}f(\xi_{i})\Delta x_{i} $$
存在，且极限值既与划分 $P$ 无关，又与对点 $\xi_{i}$ 的取法无关，则称 $f(x)$ 在 $[a,b]$ 上 **Riemann可积**. 和式 $$S_{n}=\sum\limits_{i=1}^{n}f(\xi_{i})\Delta x_{i} $$
称为 **Riemann 和**，其极限值 $I$ 称为 $f(x)$ 在 $[a,b]$ 上的定积分，记为$$I=\int_{a}^{b}f(x)\mathrm{d}x$$
这里 $a$ 和 $b$ 分别被称为积分的 **下限** 和 **上限** .



>[!dfn] 定义： Riemann 积分（$\epsilon-\delta$ 语言）
>设有定数 $I$，对任意给定的 $\epsilon>0$，存在 $\delta>0$，使得对任意一种划分 $$P:a=x_{0}<x_{1}<x_{2}<\dots<x_{n}=b $$ 和任意点 $\xi_{i}\in [x_{i-1},x_{i}]$，只要 $\lambda=\displaystyle\max_{1\leqslant i\leqslant n}(\Delta x_{i})<\delta$，便有 $$\bigg| \sum\limits_{i=1}^{n}f(\xi_{i})\Delta x_{i}-I\bigg|<\epsilon. $$
>则称 $f(x)$ 在 $[a,b]$ 上 **Riemann 可积**，称 $I$ 是 $f(x)$ 在 $[a,b]$ 上的定积分.





