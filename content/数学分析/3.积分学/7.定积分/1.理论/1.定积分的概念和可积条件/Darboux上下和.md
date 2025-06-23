---
{}
---

# 1. 定义

>[!dfn] 定义： Darboux 上下和
>  在每个区间上取 $M_i = \sup \limits _{x \in \Delta _i} f(x),\, m_i = \inf \limits_{x \in \Delta _i}f(x)$，取定划分 $P$ 后，定义 **Darboux上下和** 为 $$\bar{S}(P) = \sum\limits_{i = 1}^n M_i\Delta x_i,\, \underline{S}(P) = \sum\limits_{i = 1}^n m_i\Delta x_i $$
>    定义 $f(x)$ 在 $[a,b]$ 的上下积分为：
>    $$S = \inf \limits_T \bar{S}(P), s = \sup \limits_T \underline{S}(P) $$
>  $T$ 在此对应一个划分，$S(T)$ 表示和式 $S$ 受划分 $T$ 影响.


  [[c35d0bf46df0f2e33f73d2e909a4b5a1_MD5.jpeg|Darboux上下和的几何直观印象]]
![[c35d0bf46df0f2e33f73d2e909a4b5a1_MD5.jpeg]]

# 2. 引理部分

>[!lem] 引理1
>若在原有划分中加入分点形成新的划分，则大和不增，小和不减.

***证明思路***
1. 对某个划分的区间加入一个点，即 $x'\in [x_{i-1},x_{i}]$，若区间 $[x_{i-1},x_{i}]$ 的上确界为 $M_{i}$ ，那么 $[x_{i-1},x']$ 的上确界为 $M_{i}'$，$[x',x_{i}]$ 的上确界为 $M_{i}''$，显然有
$$M_{i}'\leqslant M_{i},\, M_{i}'' \leqslant M_{i} $$
2. 并且有$$\begin{align}
&M_{i}'(x'-x_{i-1})+M_{i}''(x_{i}-x') \\ \leqslant& M_{i}(x'-x_{i-1})+M_{i}(x_{i}-x') \\ = & M_{i}(x_{i}-x_{i-1})
\end{align}$$ 这指两个子区间都小于等于原来的上确界
3. 其他部分没有变化，这就导致新的划分 $S(T')\leqslant S(T)$.  所以



>[!lem] 引理2
>对任意的 $S(T_{1})\in \mathbf{S}$ 和 $s(T_{2})\in \mathbf{s}$，恒有
>$$m(b-a)\leqslant s(T_{2})\leqslant S(T_{1})\leqslant M(b-a) .$$其中 $\mathbf{S}$ 是一切可能划分所得到的 Darboux 上和的集合， $\mathbf{s}$ 是一切可能的划分所得到的 Darboux 小和的集合.



>[!lem] 引理3（Darboux 定理）
>对任意在 $[a,b]$ 上有界的函数 $f(x)$，恒有
>$$\lim\limits_{\lambda\to 0}\bar{S}(P)=L$$
>以及 $$\lim\limits_{\lambda\to 0}\underline{S}(P)=l.$$

口头上的说法是，**Darboux 上和的极限** 是在所有划分 $P$ 中得到的 **Darboux上和** 的下确界.







